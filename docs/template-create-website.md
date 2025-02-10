Here's a reusable template-style prompt with parameterized sections:

```markdown
<frontend-prompt>
1. Use Astro handles client/server componentsy using the client:* directives.
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Dark mode support
7. Mobile-friendly navigation
8. Optimized third-party scripts with Partytown
9. NextUI components with Tailwind CSS styling
10. Lucide icons integration
11. Create root layout.astro page that wraps necessary navigation items to all pages. Place in src/layouts/ directory.
12. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
13. Accurately implement necessary grid layouts
14. Follow proper import practices:
    - Keep component imports organized at the top of .astro files
    - Update src/pages/index.astro with new comprehensive code
    - Configure path aliases in tsconfig.json
    - update astro.config.mjs to support aliases:
    - Organized component imports
    - Root route handling (via src/pages/index.astro)
    - Import order convention:
        - Astro components
        - Framework components (React/Vue/etc)
        - NPM packages
        - Utilities/styles
        - Types/interfaces
    - You MUST complete the entire prompt before stopping


<summary_title>
{{PROJECT_TITLE}}
</summary_title>

<webpage_analysis>

1. Navigation Elements:
- {{NAVIGATION_STRUCTURE}}
- {{AUTHENTICATION_ELEMENTS}}
- {{LOGO_PLACEMENT}}

2. Layout Components:
- {{LAYOUT_SECTIONS}}
- {{CONTAINER_SETTINGS}}
- {{GRID_CONFIGURATION}}

3. Content Sections:
- {{MAIN_CONTENT_BLOCKS}}
- {{FEATURE_COMPONENTS}}
- {{CTA_ELEMENTS}}

4. Interactive Controls:
- {{BUTTON_TYPES}}
- {{FORM_COMPONENTS}}
- {{SPECIAL_INTERACTIONS}}

5. Colors:
- Background: {{BACKGROUND_COLOR}}
- Primary: {{PRIMARY_COLOR}}
- Accent: {{ACCENT_COLOR}}
- Text: {{TEXT_COLORS}}

6. Grid/Layout Structure:
- {{GRID_SYSTEM}}
- {{GUTTER_SIZE}}
- {{RESPONSIVE_BREAKPOINTS}}
</webpage_analysis>

<development_planning>

1. Project Structure:
```
{{DIRECTORY_TREE}}
```

2. Key Features:
- {{FEATURE_LIST}}

3. State Management:
```typescript
{{STATE_INTERFACE}}
```

4. Routes:
```typescript
{{ROUTE_CONFIGURATION}}
```

5. Component Architecture:
- {{COMPONENT_HIERARCHY}}

6. Responsive Breakpoints:
```scss
{{BREAKPOINT_CONFIG}}
```
</development_planning>
</frontend-prompt>

IMPORTANT: Implement (1) all {{KEY_COMPONENTS}} and (2) {{LAYOUT_STRUCTURE}} exactly as specified. Strictly adhere to color codes from image_analysis.
```

**Template Usage Guide**:
1. Replace variables in {{ALL_CAPS}} with project-specific values
2. Maintain Markdown structure
3. Keep image_analysis sections in numbered list format
4. Development planning sections require valid code examples
5. Color values must use hex codes
6. Breakpoints should match Tailwind's default configuration

Example variables for reuse:
- {{PROJECT_TITLE}}: "E-Commerce Platform Interface"
- {{NAVIGATION_STRUCTURE}}: "Left vertical sidebar with: CATEGORIES, FILTERS, WISHLIST"
- {{KEY_COMPONENTS}}: "Product cards, Shopping cart, Category filters"