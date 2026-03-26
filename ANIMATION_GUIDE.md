# Animation System

## Overview

Clean, reusable animation components built on Framer Motion.

## Components

### `Animated` - Single Element Animation

**Props:**
- `variant`: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale'
- `delay`: number (default: 0)
- `duration`: number (default: 0.6)
- `type`: 'animate' | 'whileInView' (default: 'whileInView')
- `as`: 'div' | 'li' (default: 'div')

**Usage:**
```tsx
<Animated variant="slideUp" className="max-w-160.5 mx-auto text-center">
  <SectionTitle>Title</SectionTitle>
  <p>Description</p>
</Animated>
```

### `Stagger` + `StaggerItem` - List Animations

**Props (Stagger):**
- `staggerDelay`: number (default: 0.1)
- `as`: 'div' | 'ul' | 'ol' (default: 'div')

**Props (StaggerItem):**
- `variant`: animation variant
- `duration`: number (default: 0.6)
- `as`: 'div' | 'li' (default: 'div')

**Usage:**
```tsx
<Stagger staggerDelay={0.1} className="grid grid-cols-4 gap-6">
  {items.map((item) => (
    <StaggerItem key={item.id} variant="slideUp">
      <Card {...item} />
    </StaggerItem>
  ))}
</Stagger>
```

## Animation Variants

- **fadeIn**: Opacity 0 → 1
- **slideUp**: Fade in + slide from bottom (y: 30 → 0)
- **slideDown**: Fade in + slide from top (y: -30 → 0)
- **slideLeft**: Fade in + slide from right (x: 30 → 0)
- **slideRight**: Fade in + slide from left (x: -30 → 0)
- **scale**: Fade in + scale up (scale: 0.9 → 1)

## Common Patterns

### Hero Section (animate on mount)
```tsx
<Animated variant="slideUp" type="animate" duration={0.8}>
  <h1>Hero Title</h1>
</Animated>

<Animated variant="slideUp" type="animate" delay={0.2} duration={0.8}>
  <p>Hero description</p>
</Animated>
```

### Section with Multiple Elements
```tsx
<Animated variant="slideUp">
  <SectionTitle>Title</SectionTitle>
  <p>Description</p>
</Animated>

<Animated variant="slideLeft" delay={0.2}>
  <Card />
</Animated>
```

### Grid/List with Stagger
```tsx
<Stagger staggerDelay={0.15} className="grid grid-cols-4" as="ol">
  {steps.map((step) => (
    <StaggerItem key={step.id} variant="slideUp" as="li">
      <StepCard {...step} />
    </StaggerItem>
  ))}
</Stagger>
```

### Custom Element (li, ol, ul)
```tsx
<Animated variant="slideRight" delay={0.1} as="li" className="flex gap-4">
  <Icon />
  <Text />
</Animated>
```

## Import

```tsx
import { Animated, Stagger, StaggerItem } from '@/components/ui/animated';
```
