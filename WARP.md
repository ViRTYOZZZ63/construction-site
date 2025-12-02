# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **construction company landing page** ("Универсал Строй Инвест") built with Create React App. The site is a single-page application showcasing construction services in Russian, featuring multiple interactive sections with animations and image sliders.

**Tech Stack:**
- React 19.2.0 with React Router
- styled-components for CSS-in-JS styling
- GSAP for animations
- Swiper for image carousels
- React Testing Library for testing

## Development Commands

### Start Development Server
```bash
npm start
```
Opens at http://localhost:3000 with hot reload enabled.

### Build for Production
```bash
npm run build
```
Creates optimized production build in `/build` directory.

### Run Tests
```bash
npm test
```
Launches Jest test runner in interactive watch mode.

**Run a single test file:**
```bash
npm test -- ComponentName.test.js
```

**Run all tests non-interactively:**
```bash
npm test -- --watchAll=false
```

## Architecture Overview

### Application Structure

The app follows a component-based architecture with a single-page layout:

```
App.js (root)
├── Header (fixed navigation)
├── main
│   ├── HeroSection (hero with ImageSlider + PinterestEmbed)
│   ├── StepsSection (workflow steps)
│   ├── ServicesSection (service cards)
│   ├── BlogSection (blog carousel)
│   └── ContactForm (contact form)
└── Footer
```

### Key Patterns

**1. Styled Components Pattern:**
All components use styled-components for styling. Each component file defines its styled elements inline:
```jsx
const StyledContainer = styled.section`
  // styles here
`;
```

**2. Intersection Observer for Animations:**
Most sections (HeroSection, StepsSection, ServicesSection, BlogSection, ContactForm) use the same animation pattern:
- Elements start with `opacity: 0` and `transform: translateY(30px)`
- IntersectionObserver watches when elements enter viewport
- `.animated` class is added, triggering CSS transitions
- Animation logic is in `useEffect` hooks with cleanup

**3. Image Imports:**
Images are imported as ES modules and passed to components:
```jsx
import image1 from '../images/const1.jpg';
```

**4. Swiper Integration:**
Two components use Swiper for carousels:
- `ImageSlider`: Full-width hero slider with fade effect
- `BlogSection`: Multi-slide blog carousel with navigation

### State Management

The app has minimal state management:
- Local component state using `useState` (e.g., ContactForm, Header menu toggle)
- No global state management library
- BrowserRouter wraps the app but no routes are currently defined

### Styling Architecture

**Color Scheme:**
- Primary: `#0A1E40` (dark blue)
- Accent: `#D4AF37` (gold)
- Hover: `#C99E25` (darker gold)
- Background: `#f8f9fa` (light gray)

**Typography:**
- Body: "Noto Sans"
- Headings: "Bebas Neue"

**Global Styles:**
- Located in `src/styles/global.css`
- Contains container class, animations, and CSS resets
- **Note:** `user-select: none` is applied globally (may need adjustment for accessibility)

### Component Details

**ImageSlider:**
- Uses Swiper with fade effect and autoplay
- 5 imported images from Unsplash
- Touch-enabled with custom event handling

**PinterestEmbed:**
- Simulates iPhone frame around embedded Pinterest content
- Uses iframe embed from Pinterest

**ContactForm:**
- Simple form with name and phone inputs
- Currently logs to console (no backend integration)
- Shows success notification after submission

## Testing Approach

Tests use React Testing Library with jest-dom matchers (configured in `setupTests.js`). Only `App.test.js` exists currently.

When adding tests:
- Import `@testing-library/react` and `@testing-library/jest-dom`
- Test user interactions and component rendering
- Mock Swiper components if needed (they may cause test issues)

## Development Notes

### Windows Environment
This project is being developed on Windows with PowerShell. File paths use backslashes in the system but forward slashes in imports.

### SVG Sprites
Components reference `img/sprite.svg` for icons (phone, social media), but this file doesn't exist in the repo. Icons may not render correctly until sprite is added to `public/img/`.

### External Dependencies
The app embeds a Pinterest iframe. This requires internet connection to display content.

### Language
All content is in Russian. UI text, comments, and component names use Russian or transliterated Russian words.

### Responsive Design
Components include media queries for mobile (`@media (max-width: 768px)`). Mobile design hides navigation and adjusts layouts.

## Common Tasks

### Adding a New Section Component
1. Create new component file in `src/components/`
2. Use styled-components for styling
3. Add IntersectionObserver pattern for scroll animations
4. Import and add to App.js in desired order
5. Include responsive styles for mobile

### Modifying Colors
Update the color constants in individual styled components. Consider creating a theme object if colors need to be changed frequently.

### Updating Images
Replace images in `src/images/` directory and update imports in components (ImageSlider, ServiceSection, BlogSection).

### Adding Routes
Currently, the app is single-page with hash links. To add routes:
1. Define routes in App.js using React Router
2. Replace hash links (#services, #steps) with route paths
3. Update BrowserRouter configuration if needed
