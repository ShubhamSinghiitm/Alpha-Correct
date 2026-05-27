---
name: Pinnacle Correct
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3e4943'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6e7a72'
  outline-variant: '#bdcac1'
  surface-tint: '#006c4c'
  primary: '#00694a'
  on-primary: '#ffffff'
  primary-container: '#00855e'
  on-primary-container: '#f5fff7'
  inverse-primary: '#6fdaac'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#98403f'
  on-tertiary: '#ffffff'
  tertiary-container: '#b75756'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8cf7c7'
  primary-fixed-dim: '#6fdaac'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005138'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410006'
  on-tertiary-fixed-variant: '#7c2b2c'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  workspace_gutter: 1px
  container_max_width: 1440px
---

## Brand & Style

The design system is engineered for **Pinnacle Correct**, an AI-driven text enhancement platform. The brand personality is authoritative yet assistive, prioritizing clarity and cognitive ease. The target audience includes academics, professional writers, and corporate executors who require high-precision editing tools without visual distraction.

The visual style is **Minimalist / Corporate Modern**. It leverages generous white space, a constrained color palette, and high-quality functional typography to create a "digital paper" feel. The interface stays out of the way of the user's focus, using subtle depth and precise alignment to organize complex linguistic data. The emotional response is one of confidence, efficiency, and intellectual rigor.

## Colors

The palette is anchored in high-legibility neutrals to support long-form reading and editing.

*   **Primary (#2D9F75):** A signature "Botanical Green" used for primary actions, active text highlights, and brand presence. It signals growth and correction.
*   **Secondary (#1E293B):** A "Deep Slate" blue used for headers, primary text, and high-contrast UI elements to ground the experience in professionalism.
*   **Neutral (#F9FAFB):** The foundation of the app. This off-white/light gray minimizes eye strain compared to pure white.
*   **Borders (#E5E7EB):** Used for structural division, specifically the split-screen workspace, ensuring clear containment without heavy visual weight.

## Typography

This design system utilizes **Inter** for all roles due to its exceptional legibility in digital interfaces and systematic glyph construction. 

*   **Reading Experience:** `body-lg` and `body-md` are optimized for long-form text entry and review. Line heights are intentionally generous to prevent line-skipping during the editing process.
*   **Hierarchy:** `display-lg` is reserved for marketing or onboarding moments. Dashboard views utilize `title-sm` for panel headers to maintain a compact, professional workspace.
*   **Utility:** `label-md` uses a slight tracking increase and uppercase transform for category headers and navigation items to distinguish them from editable content.

## Layout & Spacing

The layout follows a **Strict Grid** model focused on a centralized split-screen workspace.

*   **Split-Screen Workspace:** The core editor uses a 50/50 split on desktop. The divider is a 1px border (`#E5E7EB`). Each pane has `lg` (24px) internal padding to ensure text doesn't feel cramped against the edges.
*   **Desktop:** A 12-column grid with a fixed `container_max_width`. Sidebars are fixed at 240px, while the main editor remains fluid between them.
*   **Mobile:** Panels stack vertically. The input area remains at the top with a sticky "Enhance" button at the bottom of the viewport.
*   **Rhythm:** All spacing (padding, margins, gaps) must be a multiple of the `base` 8px unit to maintain mathematical harmony.

## Elevation & Depth

This design system employs **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows to maintain a professional, flat aesthetic.

*   **Surface 0 (Background):** `#F9FAFB` - The main canvas of the application.
*   **Surface 1 (Panels):** Pure `#FFFFFF` with a 1px `#E5E7EB` border. Used for the text input areas and cards to make them appear slightly "above" the canvas.
*   **Active State:** Elements in focus or primary buttons use a very soft ambient shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05)`.
*   **Overlays:** Modals and dropdowns use a crisp border and a slightly more defined shadow (`0 10px 15px -3px rgba(0, 0, 0, 0.1)`) to separate from the workspace.

## Shapes

The shape language is **Rounded** to soften the professional aesthetic and make the AI assistance feel approachable.

*   **Input Areas & Cards:** Use `rounded-lg` (1rem / 16px) for large containers to create a modern, framed look.
*   **Buttons & Controls:** Use `rounded-md` (0.5rem / 8px) for a precise, clickable appearance.
*   **Status Tags/Chips:** Use `rounded-full` (Pill) for linguistic categories (e.g., "Grammar", "Fluency").

## Components

*   **Text Areas:** Must be borderless when inside a Surface 1 container. The cursor should be the primary green (`#2D9F75`). Active text highlights for AI suggestions use a 15% opacity tint of the primary color.
*   **Buttons:**
    *   *Primary:* Solid `#2D9F75` with white text. High-contrast, rounded.
    *   *Secondary:* White background with `#E5E7EB` border and `#1E293B` text.
*   **Status Indicators:** Small 8px dots. Green for "Optimized", Amber for "Processing", Red for "Issue Found".
*   **Chips:** Used above the workspace to select "Modes" (e.g., Standard, Fluency, Formal). Active chips use a Primary Green border and text with a 5% green fill.
*   **Input Fields:** Clean, minimal styling. Use the `label-sm` for field titles. Focus state is indicated by a 2px Primary Green border.
*   **Splitter Bar:** A thin vertical line that allows users to adjust the ratio between input and output areas. On hover, it thickens to 4px with a primary color tint.