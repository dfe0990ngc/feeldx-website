# FeelDX UI/UX Design System

## Brand Identity

### Logo
- **Primary Logo**: FeelDX SVG logo (164x42px)
- **Usage**: Navigation (120x31px), Footer (120x31px)
- **Color**: Inherits from theme (currentColor)

### Color Palette

#### Primary Colors
```css
--primary: #86906C (Olive Green)
--secondary: #40472D (Dark Olive)
--dark: #242424 (Charcoal)
--white: #ffffff (Pure White)
```

#### Extended Palette
```css
/* Light Mode */
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-600: #4b5563
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827

/* Dark Mode */
--dark-bg: #111827
--dark-surface: #1f2937
--dark-border: #374151
--dark-text: #f9fafb
```

#### Semantic Colors
```css
--success: #10b981
--warning: #f59e0b
--error: #ef4444
--info: #3b82f6
```

### Typography

#### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

#### Type Scale
```css
/* Headings */
h1: 3.5rem (56px) - font-weight: 700
h2: 2.25rem (36px) - font-weight: 700
h3: 1.5rem (24px) - font-weight: 600
h4: 1.25rem (20px) - font-weight: 600

/* Body Text */
body-large: 1.125rem (18px) - font-weight: 400
body: 1rem (16px) - font-weight: 400
body-small: 0.875rem (14px) - font-weight: 400
caption: 0.75rem (12px) - font-weight: 400
```

#### Line Heights
```css
/* Headings */
h1-h2: 1.2 (120%)
h3-h4: 1.3 (130%)

/* Body */
body: 1.5 (150%)
caption: 1.4 (140%)
```

### Spacing System

#### 8px Grid System
```css
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-5: 1.25rem (20px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-10: 2.5rem (40px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-20: 5rem (80px)
--space-24: 6rem (96px)
```

### Border Radius
```css
--radius-sm: 0.375rem (6px)
--radius: 0.5rem (8px)
--radius-md: 0.75rem (12px)
--radius-lg: 1rem (16px)
--radius-xl: 1.5rem (24px)
--radius-2xl: 2rem (32px)
--radius-full: 9999px
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

## Component Library

### Buttons

#### Primary Button
```css
background: var(--primary)
color: white
padding: 1rem 2rem
border-radius: 0.5rem
font-weight: 600
transition: all 300ms
hover: background: var(--secondary), transform: scale(1.05)
```

#### Secondary Button
```css
background: transparent
color: var(--secondary)
border: 2px solid var(--secondary)
padding: 1rem 2rem
border-radius: 0.5rem
font-weight: 600
transition: all 300ms
hover: background: var(--secondary), color: white
```

### Cards

#### Service Card
```css
background: white
border: 1px solid var(--gray-100)
border-radius: 0.75rem
padding: 2rem
transition: all 300ms
hover: border-color: var(--primary), shadow: var(--shadow-xl), transform: translateY(-8px)
```

#### Testimonial Card
```css
background: white
border-radius: 1.5rem
padding: 2rem 3rem
box-shadow: var(--shadow-2xl)
position: relative
overflow: hidden
```

### Navigation

#### Desktop Navigation
```css
height: 4rem (64px)
background: rgba(255, 255, 255, 0.95)
backdrop-filter: blur(8px)
border-bottom: 1px solid var(--gray-100)
position: fixed
z-index: 50
```

#### Mobile Navigation
```css
background: white
border-top: 1px solid var(--gray-100)
padding: 0.5rem
```

## Layout System

### Container
```css
max-width: 1280px (7xl)
margin: 0 auto
padding: 0 1rem (mobile), 0 1.5rem (tablet), 0 2rem (desktop)
```

### Grid System
```css
/* Services Grid */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
gap: 2rem

/* Testimonials Grid */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
gap: 2rem

/* Case Studies */
grid-template-columns: 1fr 1fr (desktop)
gap: 3rem
```

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Animations & Transitions

### Standard Transitions
```css
transition-duration: 300ms
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
```

### Hover Effects
```css
/* Cards */
transform: translateY(-8px)
box-shadow: var(--shadow-xl)

/* Buttons */
transform: scale(1.05)
```

### Loading States
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

/* Slide Up */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
}

/* Pulse */
@keyframes pulse {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.5 }
}
```

## Accessibility Guidelines

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio

### Focus States
```css
focus:outline-none
focus:ring-2
focus:ring-primary
focus:ring-offset-2
```

### ARIA Labels
- All interactive elements have proper ARIA labels
- Form inputs have associated labels
- Navigation landmarks are properly marked

## Dark Mode Implementation

### Theme Toggle
- Respects system preferences
- Remembers user choice in localStorage
- Smooth 300ms transitions between themes

### Dark Mode Colors
```css
/* Backgrounds */
--dark-bg: #111827
--dark-surface: #1f2937
--dark-card: #374151

/* Text */
--dark-text-primary: #f9fafb
--dark-text-secondary: #d1d5db
--dark-text-muted: #9ca3af

/* Borders */
--dark-border: #374151
```

## Performance Considerations

### Image Optimization
- Use WebP format when possible
- Implement lazy loading for below-fold images
- Provide appropriate alt text for accessibility

### Animation Performance
- Use CSS transforms instead of changing layout properties
- Implement `will-change` for elements that will be animated
- Use `transform3d()` to enable hardware acceleration

### Loading States
- Implement skeleton screens for content loading
- Use progressive enhancement for JavaScript features
- Ensure core functionality works without JavaScript

## SEO Optimization

### Meta Tags
- Comprehensive Open Graph tags
- Twitter Card implementation
- Structured data for organization information

### Performance Metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## Component Specifications

### Hero Section
- **Height**: 100vh (mobile), auto (desktop)
- **Background**: Gradient from gray-50 to white
- **Content Width**: max-width 7xl
- **Grid**: 2 columns on desktop, 1 column on mobile

### Services Grid
- **Columns**: 3 on desktop, 2 on tablet, 1 on mobile
- **Card Height**: Auto with consistent padding
- **Hover Effect**: Lift and shadow enhancement

### Testimonials Carousel
- **Auto-advance**: 6 seconds
- **Transition**: 500ms fade effect
- **Controls**: Previous/Next buttons + dot indicators
- **Touch Support**: Swipe gestures on mobile

### Footer
- **Background**: Dark (#242424)
- **Grid**: 4 columns on desktop, 2 on tablet, 1 on mobile
- **Newsletter**: Full-width input with CTA button