# How to Import FeelDX Design System into Figma

Since Figma doesn't support direct JSON imports, here are several ways to get the FeelDX design system into your Figma workspace:

## Method 1: Manual Setup (Recommended)

### 1. Create Color Styles
1. Open Figma and create a new file
2. Go to the local styles panel (four dots icon)
3. Click the "+" next to Colors
4. Create these color styles:

**Primary Colors:**
- Primary/500: `#86906C`
- Secondary/800: `#40472D`
- Dark: `#242424`
- White: `#FFFFFF`

**Gray Scale:**
- Gray/50: `#F9FAFB`
- Gray/100: `#F3F4F6`
- Gray/200: `#E5E7EB`
- Gray/300: `#D1D5DB`
- Gray/600: `#4B5563`
- Gray/700: `#374151`
- Gray/800: `#1F2937`
- Gray/900: `#111827`

### 2. Create Text Styles
1. Click the "+" next to Text styles
2. Create these text styles:

**Heading 1:**
- Font: System (or SF Pro Display)
- Size: 60px
- Weight: Bold (700)
- Line Height: 120%

**Heading 2:**
- Font: System
- Size: 36px
- Weight: Bold (700)
- Line Height: 120%

**Heading 3:**
- Font: System
- Size: 24px
- Weight: Semibold (600)
- Line Height: 130%

**Body Large:**
- Font: System
- Size: 18px
- Weight: Regular (400)
- Line Height: 150%

**Body:**
- Font: System
- Size: 16px
- Weight: Regular (400)
- Line Height: 150%

### 3. Create Components

**Primary Button:**
1. Create a rectangle: 200x48px
2. Fill: Primary/500 color style
3. Border radius: 8px
4. Add text: "Button Text"
5. Text style: Body, color White
6. Create component (Ctrl/Cmd + Alt + K)

**Secondary Button:**
1. Create a rectangle: 200x48px
2. Fill: None
3. Stroke: 2px, Secondary/800 color style
4. Border radius: 8px
5. Add text: "Button Text"
6. Text style: Body, color Secondary/800
7. Create component

**Service Card:**
1. Create a rectangle: 350x400px
2. Fill: White color style
3. Stroke: 1px, Gray/100 color style
4. Border radius: 12px
5. Add drop shadow: 0px 1px 3px rgba(0,0,0,0.1)
6. Create component

## Method 2: Using Figma Plugins

### Option A: Design Tokens Plugin
1. Install "Design Tokens" plugin in Figma
2. Import the `figma-design-tokens.json` file
3. The plugin will create color and text styles automatically

### Option B: Figma Tokens Plugin
1. Install "Figma Tokens" plugin
2. Import the design tokens JSON
3. Sync tokens to create styles

## Method 3: Copy from Existing Design

### Using the Figma Community
1. Search for "Construction" or "BIM" design systems in Figma Community
2. Duplicate a similar file
3. Modify colors and typography to match FeelDX brand

## Method 4: Import from Other Tools

### From Sketch:
1. Use the `sketch-symbols.json` file with Sketch
2. Export as Figma file using Sketch's Figma export feature

### From Adobe XD:
1. Use the `adobe-xd-colors.ase` file to import colors
2. Manually recreate components in XD
3. Export to Figma using XD's export features

## Quick Setup Checklist

- [ ] Create Primary color style (#86906C)
- [ ] Create Secondary color style (#40472D)
- [ ] Create Gray scale colors
- [ ] Set up Heading 1-3 text styles
- [ ] Set up Body text styles
- [ ] Create Primary button component
- [ ] Create Secondary button component
- [ ] Create Service card component
- [ ] Create Navigation component
- [ ] Set up 8px grid system
- [ ] Create auto-layout frames for responsive design

## Grid and Layout Setup

1. **8px Grid System:**
   - Go to View > Layout Grids
   - Set up 8px square grid
   - Use for consistent spacing

2. **Responsive Breakpoints:**
   - Mobile: 375px width
   - Tablet: 768px width
   - Desktop: 1440px width

3. **Auto Layout:**
   - Use auto layout for all components
   - Set gaps using 8px increments (8, 16, 24, 32px)

## Tips for Success

1. **Organize with Pages:**
   - Create separate pages for Colors, Typography, Components, Layouts
   
2. **Use Variants:**
   - Create button variants for different states (default, hover, disabled)
   - Create card variants for different content types

3. **Documentation:**
   - Add descriptions to each component
   - Include usage guidelines in component descriptions

4. **Team Library:**
   - Publish as team library for consistency across projects
   - Set up proper naming conventions

This manual setup will give you a complete FeelDX design system in Figma that matches the implemented website exactly!