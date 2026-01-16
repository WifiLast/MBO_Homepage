# Slideshow Component

A reusable Angular slideshow component with automatic transitions, touch swipe support, and customizable overlay text.

## Usage

### 1. Import the component

```typescript
import { SlideshowComponent } from '../components/slideshow/slideshow.component';

@Component({
  selector: 'app-your-component',
  imports: [SlideshowComponent, ...],
  // ...
})
```

### 2. Use in your template

```html
<app-slideshow
    [slides]="mySlides"
    [interval]="5000"
    [showOverlay]="true"
    [overlayTitle]="'My Title'"
    [overlaySubtitle]="'My Subtitle'">
</app-slideshow>
```

### 3. Define slides in your component

```typescript
export class YourComponent {
  mySlides = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg'
  ];
}
```

## Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `slides` | `string[]` | `[]` | Array of image URLs to display in the slideshow |
| `interval` | `number` | `5000` | Time in milliseconds between slide transitions |
| `showOverlay` | `boolean` | `false` | Whether to show the text overlay |
| `overlayTitle` | `string` | `''` | Title text for the overlay |
| `overlaySubtitle` | `string` | `''` | Subtitle text for the overlay |
| `initialSlide` | `number` | `0` | Index of the slide to start with (0-based) |
| `imagePath` | `string` | `''` | Single image path (alternative to slides array) |

## Features

- ✅ Automatic slide transitions
- ✅ Touch swipe support for mobile devices
- ✅ Smooth fade transitions
- ✅ Zoom animation on active slides
- ✅ Customizable overlay text
- ✅ Responsive design with mobile breakpoints
- ✅ Automatic interval reset on manual interaction

## Example: Simple Slideshow

```html
<app-slideshow [slides]="slides"></app-slideshow>
```

```typescript
slides = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];
```

## Example: With Overlay and Custom Interval

```html
<app-slideshow
    [slides]="slides"
    [interval]="3000"
    [showOverlay]="true"
    [overlayTitle]="'Welcome'"
    [overlaySubtitle]="'Explore our gallery'">
</app-slideshow>
```

## Example: With Translation

```html
<app-slideshow
    [slides]="slides"
    [showOverlay]="true"
    [overlayTitle]="'HERO.TITLE' | translate"
    [overlaySubtitle]="'HERO.SUBTITLE' | translate">
</app-slideshow>
```

## Example: Single Image Path

```html
<app-slideshow
    [imagePath]="'/path/to/single-image.jpg'"
    [showOverlay]="true"
    [overlayTitle]="'Welcome'"
    [overlaySubtitle]="'To our site'">
</app-slideshow>
```

## Example: Start at Specific Slide

```html
<app-slideshow
    [slides]="slides"
    [initialSlide]="2">
</app-slideshow>
```

```typescript
// Component starts at the 3rd slide (index 2)
slides = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];
```

## Styling

The component comes with default styling that is responsive across different screen sizes. The styles are scoped to the component, so they won't affect other parts of your application.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers with touch support
- IE11+ (with polyfills)
