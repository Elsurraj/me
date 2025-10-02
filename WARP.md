# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **React-based personal portfolio website** showcasing web development projects and services. The portfolio is built as a single-page application (SPA) with smooth scrolling navigation and animated sections.

### Key Technologies
- **React 18** - Core frontend framework
- **Tailwind CSS** - Utility-first styling framework with custom color scheme
- **AOS (Animate On Scroll)** - Animation library for scroll-triggered animations
- **React CountUp** - Animated counter components
- **RemixIcon** - Icon library for UI elements

## Architecture Overview

### Component Structure
The application follows a **modular component architecture** with clear separation of concerns:

```
src/
├── App.js                 # Main application component with layout structure
├── component/
│   ├── Header/            # Navigation header with sticky behavior
│   ├── Footer/            # Site footer
│   └── Ul/                # Main UI components (sections)
│       ├── Hero.jsx       # About/hero section with personal info
│       ├── Services.jsx   # Services timeline layout
│       ├── Portfolio.jsx  # Project showcase with filtering
│       ├── Contact.jsx    # Contact form section
│       └── Modal.jsx      # Portfolio project detail modal
└── assests/
    ├── data/
    │   └── Data.jsx       # Centralized project data configuration
    └── images/            # Static image assets
```

### Application Flow
1. **Single Page Layout**: App.js renders all sections in a fixed order (Header → Hero → Services → Portfolio → Contact → Footer)
2. **Section Navigation**: Header implements smooth scrolling to sections using `scrollTo()` API
3. **State Management**: Uses React hooks (useState, useEffect) for local component state
4. **Data Management**: Portfolio projects are centrally managed in `Data.jsx` with categories for filtering

### Key Patterns

#### Sticky Header with Scroll Detection
- Header becomes "sticky" when user scrolls past 80px
- Uses `useRef` for DOM manipulation and scroll event listeners

#### Portfolio Filtering System
- Projects categorized as 'webDesign', 'UI', or viewable as 'all'
- Dynamic filtering using `useEffect` with dependency on selected tab
- Load more functionality with pagination (shows 6 initially, +3 on load more)

#### Animation Integration
- AOS library initialized in App.js with `Aos.init()`
- Components use `data-aos` attributes for scroll-triggered animations
- Common patterns: `fade-right`, `fade-left`, `fade-up`, `fade-zoom-in`

#### Tailwind Configuration
- Custom color palette defined in `tailwind.config.js`:
  - `primaryColor`: "#8873ef" (purple)
  - `headingColor`: "#081e21" (dark)
  - `smallTextColor`: "#193256" (blue-gray)

## Development Commands

### Local Development
```bash
npm start                    # Start development server on localhost:3000
```

### Building & Deployment  
```bash
npm run build               # Create production build in /build directory
npm run deploy              # Build and deploy to GitHub Pages (gh-pages)
npm run predeploy           # Automatically runs before deploy (runs build)
```

### Testing
```bash
npm test                    # Run test suite with Jest/React Testing Library
```

### Project Management
```bash
npm run eject               # Eject from Create React App (irreversible)
```

## Project Data Structure

Portfolio projects are defined in `src/assests/data/Data.jsx` with this structure:
```javascript
{
    id: '01',
    title: 'Project Name',
    desc: 'Project description',
    image: ImportedImage,
    tech: 'Technologies used',
    category: 'webDesign' | 'UI',
    URL: 'https://live-demo-url'  // Optional
}
```

## Working with Portfolio Projects

### Adding New Projects
1. Add project image to `src/assests/images/`
2. Import image in `Data.jsx`
3. Add project object to Data array with required fields
4. Ensure `category` field matches filter buttons ('webDesign', 'UI')

### Modifying Animations
- AOS animations are configured per-component using data attributes
- Common duration values: 1200-1500ms
- Delay increments typically 50-100ms for staggered effects

### Styling Guidelines
- Use Tailwind utility classes with custom color variables
- Responsive breakpoints: `sm:` (640px+), `md:` (768px+), `lg:` (1024px+)
- Hover states typically use `hover:bg-smallTextColor hover:text-white`
- Group hover patterns used in Services timeline cards
