---
name: Executive Fiscal Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#001334'
  on-tertiary: '#ffffff'
  tertiary-container: '#00275b'
  on-tertiary-container: '#4c8dff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
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
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-page: 4rem
  gutter-grid: 1.5rem
  stack-section: 2.5rem
  stack-element: 0.75rem
  inset-card: 1.5rem
---

## Brand & Style
This design system is engineered for high-level controllership and tax professionals. The brand personality is authoritative, precise, and meticulously organized. It evokes a sense of "unshakeable accuracy" and "strategic oversight," catering to a target audience of CFOs, stakeholders, and regulatory bodies.

The style is a synthesis of **Minimalism** and **Corporate Modern**. It utilizes heavy white space to ensure complex fiscal data remains legible, while a structured grid enforces a sense of order and compliance. Every pixel serves a functional purpose, reflecting the rigor required in tax and controllership environments.

## Colors
The palette is rooted in fiscal tradition but executed with modern clarity. 

- **Primary (Deep Navy):** Used for headlines, sidebars, and high-authority structural elements. It provides the visual "weight" necessary for executive summaries.
- **Secondary (Slate Grey):** Reserved for body text, metadata, and supporting icons. It reduces visual fatigue compared to pure black.
- **Accent (Corporate Blue):** Used sparingly for interactive elements, progress bars, or highlighting key tax savings and fiscal KPIs.
- **Background (Neutral):** A very light cool-grey tint (#f8fafc) is used for page backgrounds to distinguish from pure white card containers.

## Typography
Inter is utilized across all levels for its exceptional legibility in data-dense environments.

- **Headlines:** Set in Deep Navy with tighter letter spacing for a compact, professional look. 
- **Body Text:** Slate Grey is the default for general descriptions to maintain a refined contrast ratio.
- **Labels:** Uppercase styling is used for section headers (e.g., "PROFESSIONAL EXPERIENCE") to create a clear structural hierarchy without needing excessive font sizes.
- **Numbers:** Tabular lining should be enabled via OpenType features to ensure columns of financial figures align perfectly.

## Layout & Spacing
The layout follows a **Fixed 12-Column Grid** for desktop views, ensuring that the CV content stays centered and readable at a standard A4-equivalent width (approx. 800px - 1000px).

- **Margins:** Generous page margins ensure the document feels breathable and allows for digital annotations or physical printing margins.
- **Rhythm:** A vertical rhythm of 8px increments is strictly followed. Sections are separated by `stack-section` to clearly delineate career phases.
- **Responsive:** On mobile, the layout collapses to a single column. The 12-column span for desktop elements (e.g., Skills on the left, Experience on the right) reflows to a vertical stack with standard `1rem` side padding.

## Elevation & Depth
To maintain a high-contrast, professional aesthetic, this design system avoids heavy shadows. 

- **Tonal Layers:** Deep Navy sidebars or headers use solid fills. Card elements use a pure white background against the #f8fafc neutral background to create depth through color alone.
- **Subtle Shadows:** For floating elements or primary cards, use a single, highly diffused "Ambient Shadow": `0 4px 6px -1px rgba(30, 41, 59, 0.05)`. 
- **Low-Contrast Outlines:** Use 1px borders in #e2e8f0 for input fields and divider lines to maintain structure without adding visual noise.

## Shapes
The shape language is conservative and geometric. 

- **Corner Radius:** A "Soft" approach is used. 4px (0.25rem) is the standard for cards and buttons. This maintains the "serious" nature of the controllership field while avoiding the harshness of sharp 0px corners.
- **Dividers:** Horizontal lines are 1px thick, utilizing the Slate Grey color at 20% opacity.

## Components

- **Buttons:** Primary buttons are solid Deep Navy with white text. Secondary buttons are outlined in Slate Grey. Focus states use the Corporate Blue accent.
- **Chips (Tags):** Used for technical skills (e.g., "IFRS", "SOX Compliance"). These should have a light Slate Grey background (#f1f5f9) and Navy text, with 4px rounding.
- **Input Fields:** For contact forms or search, use white backgrounds with 1px Slate Grey borders. Labels must be `label-caps`.
- **Experience Cards:** These feature a 2px vertical accent border on the left using Corporate Blue to denote the "current" or "active" timeline.
- **Icons:** Use linear, 24px icons with a 1.5px stroke weight. Icons should be Slate Grey by default, shifting to Corporate Blue when highlighting contact info (Phone, Email, LinkedIn).
- **Data Tables:** For fiscal highlights, use a minimal table with no vertical lines, only thin horizontal 1px dividers and `label-caps` for headers.