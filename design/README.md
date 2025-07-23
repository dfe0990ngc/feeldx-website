# FeelDX UI/UX Design Files

This directory contains comprehensive design documentation and assets for the FeelDX website project.

## 📁 File Structure

```
design/
├── design-system.md      # Complete design system documentation
├── component-specs.json  # Component specifications in JSON format
├── wireframes.md         # Detailed wireframes for all breakpoints
├── figma-export.json     # Figma-compatible export data
├── style-guide.css       # CSS implementation of design system
└── README.md            # This file
```

## 🎨 Design System Overview

The FeelDX design system is built around construction industry expertise and BIM services, featuring:

- **Brand Colors**: Olive green primary (#86906C) with dark olive secondary (#40472D)
- **Typography**: System font stack optimized for readability
- **8px Grid System**: Consistent spacing and layout
- **Component Library**: Reusable UI components with defined states
- **Dark Mode Support**: Complete dark theme implementation
- **Responsive Design**: Mobile-first approach with defined breakpoints

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px (1 column layout)
- **Tablet**: 768px - 1023px (2 column layout)  
- **Desktop**: 1024px+ (3+ column layout)
- **Large Desktop**: 1280px+ (max-width container)

## 🧩 Component Library

### Buttons
- **Primary**: Olive green background with hover effects
- **Secondary**: Outlined style with fill on hover
- **States**: Hover, focus, active, disabled

### Cards
- **Service Cards**: Hover lift effect with shadow enhancement
- **Testimonial Cards**: Large rounded cards with quote styling
- **Case Study Cards**: Image + content layout with metrics

### Navigation
- **Desktop**: Fixed header with backdrop blur
- **Mobile**: Collapsible hamburger menu
- **Dark Mode Toggle**: Animated switch component

## 🎭 Animations & Interactions

- **Transitions**: 300ms ease for standard interactions
- **Hover Effects**: Scale, lift, and color transitions
- **Loading States**: Fade-in and slide-up animations
- **Carousel**: Smooth 500ms transitions with auto-advance

## 🌙 Dark Mode Implementation

- **System Preference Detection**: Respects user's OS setting
- **Manual Toggle**: Persistent user preference storage
- **Smooth Transitions**: 300ms color transitions
- **Complete Coverage**: All components support dark mode

## ♿ Accessibility Features

- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus States**: Clear focus indicators for keyboard navigation
- **ARIA Labels**: Proper semantic markup and screen reader support
- **Touch Targets**: Minimum 44px touch targets for mobile

## 📊 Performance Considerations

- **Optimized Animations**: CSS transforms for hardware acceleration
- **Lazy Loading**: Below-fold content loading optimization
- **Progressive Enhancement**: Core functionality without JavaScript
- **Image Optimization**: WebP format with fallbacks

## 🔧 Implementation Guidelines

### CSS Variables
All design tokens are implemented as CSS custom properties for easy theming and maintenance.

### Component Architecture
Components follow a modular approach with clear separation of concerns and reusable patterns.

### Responsive Design
Mobile-first approach with progressive enhancement for larger screens.

### Browser Support
Modern browsers with graceful degradation for older versions.

## 📋 Usage Instructions

### For Designers
1. Use `design-system.md` for complete design specifications
2. Import `figma-export.json` into Figma for design system setup
3. Reference `wireframes.md` for layout structures

### For Developers
1. Implement `style-guide.css` as base styles
2. Use `component-specs.json` for component implementation
3. Follow responsive patterns from wireframes

### For Stakeholders
1. Review `design-system.md` for brand consistency
2. Use wireframes for content planning
3. Reference component specs for feature requirements

## 🚀 Getting Started

1. **Review Design System**: Start with `design-system.md` for overview
2. **Check Wireframes**: Understand layout structure from `wireframes.md`
3. **Implement Components**: Use `component-specs.json` for development
4. **Apply Styles**: Integrate `style-guide.css` for consistent styling

## 📞 Support

For questions about the design system or implementation:
- Review the documentation files in this directory
- Check component specifications for detailed requirements
- Reference wireframes for layout guidance

## 🔄 Version History

- **v1.0.0**: Initial design system with complete component library
- Includes responsive design, dark mode, and accessibility features
- Production-ready implementation with performance optimizations

---

*This design system is specifically tailored for FeelDX's construction industry focus and BIM service offerings.*