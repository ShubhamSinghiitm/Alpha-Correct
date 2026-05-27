const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static assets from workspace directory
app.use(express.static(__dirname));

// Default route serves code.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'code.html'));
});

// Proxy route for secure AI enhancements
app.post('/api/enhance', async (req, res) => {
    const { text, mode } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text input is required.' });
    }

    const selectedMode = mode || 'standard';

    if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ 
            error: 'Server API key is not configured.', 
            code: 'SERVER_KEY_MISSING' 
        });
    }

    const systemPrompt = `You are a high-precision grammar and writing assistant like QuillBot.
You enhance text for the following writing mode: "${selectedMode.toUpperCase()}".
Your goal is to correct all spelling, grammar, and phrasing issues while adhering to the mode guidelines:
- STANDARD: Correct spelling, grammar, punctuation, and capitalization. Maintain simple, clear sentences.
- FLUENCY: Correct errors and rephrase sentences slightly to improve readability and flow.
- FORMAL: Elevate casual language, replace phrasal verbs, and maintain a highly professional tone.
- ACADEMIC: Remove contractions, use rigorous academic terminology, and ensure objective tone.

Return the result as a raw JSON object matching this schema. Do not output markdown code blocks or any conversational text.
{
  "correctedText": "string representing the complete updated paragraph with corrections applied",
  "edits": [
    {
      "original": "string representing the exact wrong text segment in the original input that is corrected",
      "corrected": "string representing the corrected text segment replacement",
      "explanation": "short title of error e.g. Subject-Verb Agreement",
      "desc": "longer description of why the change was made"
    }
  ]
}
Note: Ensure "original" matches exactly a substring in the input text. If no changes are needed, return an empty "edits" list and the original text in "correctedText".`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                     { role: 'system', content: systemPrompt },
                     { role: 'user', content: text }
                ],
                response_format: { type: "json_object" },
                temperature: 0.3
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const errMsg = errData.error?.message || `OpenAI API returned status ${response.status}`;
            console.error('OpenAI Error:', errMsg);
            return res.status(response.status).json({ error: errMsg });
        }

        const data = await response.json();
        const contentStr = data.choices[0].message.content;
        
        let result;
        try {
            result = JSON.parse(contentStr);
        } catch (parseErr) {
            console.error('Failed to parse OpenAI JSON output:', contentStr);
            return res.status(500).json({ error: 'AI returned invalid JSON format.' });
        }

        res.json(result);
    } catch (fetchError) {
        console.error('OpenAI Proxy Fetch Error:', fetchError);
        res.status(500).json({ error: 'Failed to connect to OpenAI service: ' + fetchError.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`  Alpha Correct server is running on port ${PORT}`);
    console.log(`  Access the website at http://localhost:${PORT}`);
    console.log(`==================================================`);
});
