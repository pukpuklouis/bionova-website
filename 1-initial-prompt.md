

## 1. Project Initialization
```
pnpm add astro
pnpm init 

```

## 2. Core Integrations
```
pnpm astro add cloudflare react @astrojs/sitemap partytown

```

## 3. Image Optimization Configuration
```
// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare', // Enable CF image optimization
    mode: 'directory'
  }),
  integrations: [
    react(),
    sitemap()
  ],
  site: 'https://your-domain.com', // Required for sitemap
  experimental: { assets: true }
});
```

## 4. React Component Structure
```
// src/components/InteractiveButton.jsx
export default function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700">
      Cloudflare Optimized Button
    </button>
  )
}
```

## 5. ESLint Configuration
```
pnpm add -D eslint eslint-plugin-react eslint-plugin-astro @typescript-eslint/parser

```

```
// .eslintrc.cjs
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:astro/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'astro/no-set-html-directive': 'error',
    'jsx-a11y/anchor-is-valid': 'warn'
  },
  overrides: [{
    files: ['*.astro'],
    parser: 'astro-eslint-parser'
  }]
};
```

## 6. Package Scripts
```
{
  "scripts": {
    "dev": "bunx --bun astro dev",
    "build": "bunx --bun astro build",
    "preview": "bunx --bun astro preview",
    "check": "bunx --bun astro check",
    "lint": "bunx --bun eslint . --ext .js,.jsx,.ts,.tsx,.astro"
  }
}
```

## 7. Deployment Requirements
```
# cf-pages.md
- Build Command: `bun run build`
- Output Directory: `dist`
- Environment Variables:
  - NODE_VERSION=20
  - CLOUDFLARE_ACCOUNT_ID=your_id
```

## Key Features Implemented:
1. **Bun Optimization**  
   Automatic dependency resolution with `bun install` and Bun-native script execution

2. **Cloudflare Image Handling**  
   Automatic WebP conversion via `ImageService` with edge caching[3][5]

3. **React Hydration Control**  
   Partial hydration using Astro directives:
   ```
   <InteractiveButton client:load /> 
   ```

4. **Sitemap Generation**  
   Automatic XML sitemap creation at build time with `@astrojs/sitemap`

5. **Linting Rules**  
   Combined React+Astro validation with accessibility checks

## Verification Steps:
```
# Check Cloudflare adapter
pnpm astro config --verify

# Test optimized images
curl -I https://your-domain.com/_astro/image.jpg

# Validate sitemap
```bash
pnpm run build && ls dist/sitemap*.xml
```


Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
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
        - pnpm packages
        - Utilities/styles
        - Types/interfaces
    - You MUST complete the entire prompt before stopping

<summary_title>
bedding shop Landing Page
</summary_title>

<webpage_analysis>

1. Navigation Elements:
- Top horizontal navbar
- right algin hamburger menu button
- Logo placement in center


2. Layout Components:
- Full-width header section (100vw)
- Three-column feature grid (33% each)
- Container max-width: 1200px
- Padding: 24px (mobile), 48px (desktop)


3. Content Sections:
- Hero section with headline and subtitle
- pain point descriptions section
- why this section
- feature section , what ingredients in bottle
- Scientific endorsement section
- who need this section
- testimonial section
- CTA section , irresstible offer
- FAQ section
- CTA section , get started now
- footer section



4. Interactive Controls:
- Primary CTA button (green)
- Secondary navigation links
- Download button with icon
- buy now button


5. Colors:
    Color Palette for Nutrient Supplement Brand:

    1. Background Colors:
    - Primary Background: #F4F9F4 (Soft, clean mint green - reminiscent of health and freshness)
    - Secondary Background: #E6F3E6 (Lighter shade of mint, creating depth)
    - Dark Mode Background: #0A1A0A (Deep, forest-like green for contrast)

    2. Text Colors:
    - Primary Text: #2C3E2C (Deep forest green)
    - Secondary Text: #4D704D (Softer, more readable green)
    - Muted Text: rgba(44, 62, 44, 0.7)

    3. Accent Colors:
    - Vibrant Green (CTA): #2ECC71 (Energetic, health-focused green)
    - Complementary Blue: #3498DB (Calm, trustworthy supplement tone)
    - Highlight Yellow: #F1C40F (Energy, vitality)

    4. Interactive Controls:
    - Primary CTA Button:
    - Background: #2ECC71 (Vibrant green)
    - Text: #FFFFFF
    - Hover: #27AE60 (Slightly darker green)

    - Secondary Button:
    - Background: #3498DB (Soft blue)
    - Text: #FFFFFF
    - Hover: #2980B9 (Deeper blue)

    - Buy Now Button:
    - Background: linear-gradient(135deg, #2ECC71 0%, #3498DB 100%)
    - Text: #FFFFFF
    - Shadow: rgba(46, 204, 113, 0.3)

    5. Gradient Accent:
    ```css
    background: linear-gradient(
    135deg, 
    #2ECC71 0%, 
    #3498DB 50%, 
    #F1C40F 100%
    );
    ```

    Psychological Color Reasoning:
    - Green symbolizes health, growth, and natural wellness
    - Soft, muted tones create a sense of calm and trustworthiness
    - Gradients add modern, dynamic feel to supplement branding
    - Accessible color contrast for readability


6. Grid/Layout Structure:
- 12px gutters
- Responsive breakpoints at 768px, 1024px
- Card grid: 3 columns desktop, 1 column mobile
</iwebpage_analysis>

<development_planning>

1. Project Structure:
```
├── src/
│   ├── components/
│   │   ├── HeroSection.astro
│   │   ├── PainPointDescriptions.astro
│   │   ├── WhyThisSection.astro
│   │   ├── FeatureSection.astro
│   │   ├── ScientificEndorsement.astro
│   │   ├── WhoNeedsThis.astro
│   │   ├── TestimonialSection.astro
│   │   ├── CTASectionIrresistibleOffer.astro
│   │   ├── FAQSection.astro
│   │   ├── CTASectionGetStartedNow.astro
│   │   └── FooterSection.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── main.css
├── public/
│   └── favicon.ico
├── astro.config.mjs
└── package.json

```


2. Key Features:
- Responsive design
- Feature card grid
- Gradient animations
- CTA functionality


3. State Management:
```typescript

```


4. Routes:
```typescript

```

5. Component Architecture:
- Layout wrapper components
- Reusable feature cards
- Shared button components
- Navigation components


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'wide': 1440px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.