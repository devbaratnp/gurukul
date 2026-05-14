---
name: Gurukul Academy Design System
colors:
  surface: '#fff8f8'
  surface-dim: '#e5d6db'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f4'
  surface-container: '#f9eaef'
  surface-container-high: '#f3e4e9'
  surface-container-highest: '#eddfe3'
  on-surface: '#211a1d'
  on-surface-variant: '#524349'
  inverse-surface: '#372e32'
  inverse-on-surface: '#fcedf1'
  outline: '#84727a'
  outline-variant: '#d7c1c9'
  surface-tint: '#934171'
  primary: '#5f1544'
  on-primary: '#ffffff'
  primary-container: '#7b2d5c'
  on-primary-container: '#fe9bd0'
  inverse-primary: '#ffafd7'
  secondary: '#b60d68'
  on-secondary: '#ffffff'
  secondary-container: '#fd519e'
  on-secondary-container: '#5c0031'
  tertiary: '#133c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#24550a'
  on-tertiary-container: '#91c972'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e9'
  primary-fixed-dim: '#ffafd7'
  on-primary-fixed: '#3c0029'
  on-primary-fixed-variant: '#772958'
  secondary-fixed: '#ffd9e3'
  secondary-fixed-dim: '#ffb0ca'
  on-secondary-fixed: '#3e001f'
  on-secondary-fixed-variant: '#8d004e'
  tertiary-fixed: '#b8f396'
  tertiary-fixed-dim: '#9dd67d'
  on-tertiary-fixed: '#072100'
  on-tertiary-fixed-variant: '#205106'
  background: '#fff8f8'
  on-background: '#211a1d'
  surface-variant: '#eddfe3'
  primary-900: '#5C1F46'
  primary-500: '#9C4878'
  primary-300: '#D4A8C3'
  primary-100: '#F5E8EF'
  pink-300: '#FAD2E1'
  pink-100: '#FDF2F8'
  gold-500: '#D4A017'
  gold-300: '#F0CF65'
  gold-100: '#FBF4D9'
  ink-900: '#1A1A1A'
  ink-700: '#404040'
  ink-500: '#737373'
  ink-300: '#D4D4D4'
  ink-100: '#F5F5F5'
typography:
  text-hero:
    fontFamily: Poppins
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.01em
  text-hero-mobile:
    fontFamily: Poppins
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  text-h1:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  text-h2:
    fontFamily: Poppins
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  text-h3:
    fontFamily: Poppins
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  text-h4:
    fontFamily: Poppins
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  text-lead:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  text-body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  text-small:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  text-tiny:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-6: 24px
  space-8: 32px
  space-12: 48px
  space-16: 64px
  space-24: 96px
  space-32: 128px
  container-narrow: 720px
  container-default: 1200px
  container-wide: 1440px
---

# Design System & UI Guidelines
## Gurukul Academy — School Website

| Field | Value |
|---|---|
| **Document Owner** | Devbarat Prasad Patel |
| **Company** | iSoftro Solutions |
| **Project** | Gurukul Academy Website |
| **Client** | Gurukul Academy, Birgunj |
| **Version** | 1.0 |
| **Last Updated** | May 14, 2026 |

---

## 1. Brand Foundation

### 1.1 Brand Story
Gurukul Academy draws its identity from the ancient **Gurukul** tradition — a system where students learned under the wisdom of a guru in a natural, nurturing environment. The school logo reflects this beautifully: a student seated under a flourishing tree, with rays of knowledge radiating outward. The modern Gurukul Academy carries this heritage forward while embracing contemporary education for Classes ECD–10 under the SEE/NEB curriculum.

### 1.2 Brand Personality
- **Warm** — Approachable, welcoming, family-like
- **Wise** — Rooted in tradition, knowledge-focused
- **Modern** — Forward-looking, premium, well-organized
- **Trustworthy** — Established, reliable, parent-friendly

### 1.3 Design Principles

| Principle | What it means in practice |
|---|---|
| **Generous space** | Lots of white space; never crowd content |
| **One focal point per section** | Each section has one clear message and one clear action |
| **Soft, premium feel** | Rounded corners (not sharp), gentle shadows, no harsh borders |
| **Real imagery first** | Authentic photos of Gurukul Academy — never stock photos of foreign children |
| **Mobile is the default** | Every design decision starts at 375px width |
| **Conversion-aware** | "Apply Now" reachable from every page within one tap |
| **Cultural authenticity** | Subtle nods to the Gurukul/tree motif without being heavy-handed |

---

## 2. Color System

### 2.1 Primary Palette

| Token | Hex | Usage |
|---|---|---|
| `--primary-900` | `#5C1F46` | Darkest purple — text on light backgrounds, footer |
| `--primary-700` | `#7B2D5C` | **Primary brand purple** — logo, primary buttons, headings |
| `--primary-500` | `#9C4878` | Mid purple — hover states, links |
| `--primary-300` | `#D4A8C3` | Light purple — backgrounds, subtle accents |
| `--primary-100` | `#F5E8EF` | Lightest purple tint — section backgrounds |

### 2.2 Accent Palette (Pink)

| Token | Hex | Usage |
|---|---|---|
| `--accent-pink-500` | `#E63E8C` | Bright pink — CTA highlights, badges (from "Vacancy" heading) |
| `--accent-pink-300` | `#FAD2E1` | Soft blush — card backgrounds, dividers (from vacancy poster bg) |
| `--accent-pink-100` | `#FDF2F8` | Very light pink — hero/section backgrounds |

### 2.3 Gold Highlight

| Token | Hex | Usage |
|---|---|---|
| `--gold-500` | `#D4A017` | Awards, achievements, "Admissions Open" badges |
| `--gold-300` | `#F0CF65` | Highlight strips, decorative dividers |
| `--gold-100` | `#FBF4D9` | Background for achievement cards |

### 2.4 Neutrals

| Token | Hex | Usage |
|---|---|---|
| `--ink-900` | `#1A1A1A` | Headings, primary text |
| `--ink-700` | `#404040` | Body text |
| `--ink-500` | `#737373` | Secondary text, captions |
| `--ink-300` | `#D4D4D4` | Borders, dividers |
| `--ink-100` | `#F5F5F5` | Card backgrounds, section dividers |
| `--white` | `#FFFFFF` | Base background |

### 2.5 Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--success` | `#16A34A` | Form success, "Verified" badges |
| `--warning` | `#F59E0B` | Important notices |
| `--error` | `#DC2626` | Form errors, deadline alerts |
| `--info` | `#2563EB` | Informational banners |

### 2.6 Color Usage Rules

- **Purple (`--primary-700`) dominates**: ~60% of brand color usage
- **Pink (`--accent-pink-500`) for emphasis**: ~25% — use sparingly to highlight CTAs and important badges
- **Gold (`--gold-500`) for celebration**: ~15% — reserved for achievements, awards, "Admissions Open" announcements, and SEE topper highlights
- **Never combine all three at high saturation in one component** — pick one as dominant
- Always test color combinations for WCAG AA contrast (4.5:1 for body, 3:1 for large text)

---

## 3. Typography

### 3.1 Font Families

| Role | Font | Source |
|---|---|---|
| **Display / Headings** | Poppins | Google Fonts |
| **Body / UI** | Inter | Google Fonts |
| **Numeric (stats)** | Inter (tabular-nums) | Google Fonts |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">
```

### 3.2 Type Scale (Mobile-first; scale up at `md:` breakpoint)

| Token | Mobile | Desktop | Weight | Family | Usage |
|---|---|---|---|---|---|
| `text-hero` | 36px / 44px | 64px / 72px | 700 | Poppins | Hero headlines |
| `text-h1` | 32px / 40px | 48px / 56px | 700 | Poppins | Page titles |
| `text-h2` | 26px / 34px | 36px / 44px | 700 | Poppins | Section headings |
| `text-h3` | 22px / 30px | 28px / 36px | 600 | Poppins | Sub-section headings |
| `text-h4` | 18px / 26px | 22px / 30px | 600 | Poppins | Card titles |
| `text-lead` | 18px / 28px | 20px / 32px | 400 | Inter | Lead paragraphs, intros |
| `text-body` | 16px / 26px | 16px / 28px | 400 | Inter | Body text |
| `text-small` | 14px / 22px | 14px / 22px | 400 | Inter | Captions, meta |
| `text-tiny` | 12px / 18px | 12px / 18px | 500 | Inter | Labels, badges, eyebrow |

### 3.3 Typography Rules

- **Headings**: Poppins, weight 600–700, color `--ink-900` or `--primary-900`
- **Body**: Inter, weight 400, color `--ink-700`, line-height 1.6–1.75
- **Letter-spacing**: -0.01em on headings (tighter); 0.02em on uppercase labels (looser)
- **Eyebrow text** (above section headings): 12px, uppercase, weight 600, color `--accent-pink-500`, letter-spacing 0.08em — e.g., "Welcome to Gurukul"
- **Max line length**: 70 characters for body copy (use `max-w-prose` in Tailwind)
- **Never use all-caps for long text** — only for badges, eyebrows, and short buttons

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (Tailwind-compatible)

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Tight inline gaps |
| `space-2` | 8px | Form field padding |
| `space-3` | 12px | Icon + text |
| `space-4` | 16px | Default gap between items |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Component gap |
| `space-12` | 48px | Section internal spacing |
| `space-16` | 64px | Section spacing (mobile) |
| `space-24` | 96px | Section spacing (desktop) |
| `space-32` | 128px | Hero/major section spacing (desktop) |

### 4.2 Container Widths

| Container | Max Width | Use Case |
|---|---|---|
| `container-narrow` | 720px | Article body, single-column content |
| `container-default` | 1200px | Most page sections |
| `container-wide` | 1440px | Hero, gallery, full-width sections |
| `container-full` | 100% | Banner images, map embeds |

**Side padding**: 16px (mobile) → 24px (tablet) → 48px (desktop)

### 4.3 Breakpoints (Tailwind defaults)

| Name | Width | Target |
|---|---|---|
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

**Mobile-first**: Write base styles for mobile, add `md:`, `lg:` modifiers for larger screens.

### 4.4 Grid System

- **12-column grid** at desktop, 4-column at mobile
- Gutter: 24px (desktop), 16px (mobile)
- Use CSS Grid or Tailwind's grid utilities

---

## 5. Visual Elements

### 5.1 Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Form inputs, small badges |
| `radius-md` | 10px | Buttons, small cards |
| `radius-lg` | 16px | Cards, image containers |
| `radius-xl` | 24px | Hero containers, feature blocks |
| `radius-full` | 9999px | Pills, circular avatars |

**Rule**: Soft, rounded corners throughout — never sharp 90° corners on interactive elements.

### 5.2 Shadows

| Token | Value | Usage |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(123, 45, 92, 0.05)` | Subtle lift on inputs |
| `shadow-sm` | `0 2px 8px rgba(123, 45, 92, 0.06)` | Cards (default) |
| `shadow-md` | `0 4px 16px rgba(123, 45, 92, 0.08)` | Cards (hover), dropdowns |
| `shadow-lg` | `0 12px 32px rgba(123, 45, 92, 0.12)` | Modals, sticky CTAs |
| `shadow-xl` | `0 24px 48px rgba(123, 45, 92, 0.16)` | Hero floating cards |

**Note**: Shadows use the brand purple at low opacity for cohesion (instead of black).

### 5.3 Decorative Motifs

Drawn from the Gurukul logo:

- **Sun rays** — Subtle radial gradient or SVG ray pattern behind the hero principal photo or "Why Choose Us" section
- **Tree silhouette** — Used as a watermark in section dividers or footer (very low opacity, ~5%)
- **Curved underline** — Hand-drawn style underline under section eyebrows (gold accent)
- **Soft blob shapes** — Pink/purple blurred shapes as decorative backgrounds (`filter: blur(80px)`)

### 5.4 Iconography

- **Library**: Lucide Icons (open-source, clean, consistent)
- **Style**: Outline, 1.5px stroke
- **Size scale**: 16px / 20px / 24px / 32px / 48px
- **Color**: Inherits text color by default; primary `--primary-700` for emphasis
- **Never mix icon styles** (no Lucide + Font Awesome together)

---

## 6. Components

### 6.1 Buttons

**Primary Button** (main CTA — "Apply Now", "Submit Inquiry")
```css
.btn-primary {
  background: var(--primary-700);
  color: white;
  padding: 14px 28px;
  border-radius: var(--radius-md);
  font: 600 16px/1 Inter;
  letter-spacing: 0.01em;
  box-shadow: var(--shadow-sm);
  transition: all 200ms ease;
}
.btn-primary:hover {
  background: var(--primary-900);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

**Secondary Button** (outline — "Take a Tour", "Learn More")
```css
.btn-secondary {
  background: transparent;
  color: var(--primary-700);
  border: 2px solid var(--primary-700);
  padding: 12px 26px;
  border-radius: var(--radius-md);
  font: 600 16px/1 Inter;
}
.btn-secondary:hover {
  background: var(--primary-700);
  color: white;
}
```

**Accent Button** (high-emphasis — "Admissions Open Now")
```css
.btn-accent {
  background: var(--accent-pink-500);
  color: white;
  padding: 14px 28px;
  border-radius: var(--radius-full);
  font: 600 16px/1 Inter;
}
```

**Ghost Button** (low-emphasis — "View All", "Read More")
```css
.btn-ghost {
  background: transparent;
  color: var(--primary-700);
  padding: 10px 16px;
  font: 600 15px/1 Inter;
}
.btn-ghost:hover { color: var(--primary-900); }
.btn-ghost::after { content: " →"; transition: margin 200ms; }
.btn-ghost:hover::after { margin-left: 4px; }
```

**Sizes**: `sm` (10px 20px / 14px text), `md` (default), `lg` (16px 32px / 18px text)

### 6.2 Cards

**Standard Card** (used in Why Choose Us, Levels, Facilities)
```
- Background: white
- Border: none
- Border-radius: radius-lg (16px)
- Padding: 24px (mobile) / 32px (desktop)
- Shadow: shadow-sm → shadow-md on hover
- Transition: transform 300ms ease
- Hover: translateY(-4px)
- Icon (top, optional): 48px, color primary-700, in a 64px rounded-full background of primary-100
- Title: text-h4, weight 600, ink-900
- Description: text-body, ink-700
```

**News/Notice Card**
```
- Layout: horizontal on desktop, stacked on mobile
- Date badge: top-left, gold-500 background, white text, 12px uppercase
- Category pill: top-right, primary-100 background, primary-700 text
- Title: text-h4, hover changes to primary-700
- Excerpt: 2 lines, then ellipsis
- "Read more" link with arrow
```

**Faculty Card**
```
- Photo: 16:9 or 4:5, full-width top
- Padding: 20px below photo
- Name: text-h4, ink-900
- Designation: text-small, primary-700, weight 500
- Qualification: text-small, ink-500
- Subject pill at bottom: pink-300 background, primary-900 text
```

**Event Card**
```
- Date badge: large, top-left, gold gradient background
  - Day number: 32px, weight 700
  - Month: 12px, uppercase
- Title, time/venue, short description
- "Add to calendar" link
```

**Testimonial Card**
```
- Background: primary-100 or pink-100
- Large quote mark in top-left (decorative, low opacity)
- Italic quote text
- Avatar + name + relation at bottom
- Border-radius: radius-xl
```

### 6.3 Form Elements

**Input Field**
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--ink-300);
  border-radius: var(--radius-md);
  font: 400 16px/1.5 Inter;
  color: var(--ink-900);
  background: white;
  transition: border-color 200ms;
}
.form-input:focus {
  outline: none;
  border-color: var(--primary-700);
  box-shadow: 0 0 0 4px rgba(123, 45, 92, 0.1);
}
.form-input.error {
  border-color: var(--error);
}
```

**Label**
```css
.form-label {
  display: block;
  font: 500 14px/1.4 Inter;
  color: var(--ink-900);
  margin-bottom: 6px;
}
.form-label .required { color: var(--error); }
```

**Helper / Error Text**
```css
.form-helper { font: 400 13px/1.4 Inter; color: var(--ink-500); margin-top: 6px; }
.form-error { color: var(--error); }
```

**Select / Dropdown**: Same as input; custom chevron icon on the right (Lucide `chevron-down`)

**Textarea**: Same as input; min-height 120px; resize vertical only

**Checkbox / Radio**: Custom-styled, 20px square/circle, primary-700 when checked

**Submit button**: Full-width on mobile, auto-width on desktop; uses `.btn-primary`

### 6.4 Navigation

**Desktop Header**
```
- Height: 80px
- Background: white with bottom border (ink-300, 1px) OR semi-transparent + blur on scroll
- Logo: left, 48px height
- Nav links: center or right, Inter 15px weight 500, ink-700
  - Hover: primary-700
  - Active page: primary-700, with 2px pink-500 underline
- "Apply Now" button: right-most, btn-primary
- On scroll past 100px: add shadow-sm
```

**Mobile Header**
```
- Height: 64px
- Logo: left, 40px height
- Hamburger icon: right, 28px
- Tapping hamburger opens full-screen slide-in menu:
  - Background: white
  - Close (X) top-right
  - Nav links: stacked, 20px Poppins weight 600
  - Sub-menu indicator: chevron-right; tap expands accordion
  - "Apply Now" button: sticky bottom, full-width
```

**Footer**
```
- Background: primary-900 (deep purple)
- Text color: white / primary-300 for secondary
- Padding: 64px top, 32px bottom
- 4 columns on desktop, stacked on mobile:
  1. Logo + tagline + NEB badge
  2. Quick Links
  3. Contact
  4. Connect (social icons + newsletter)
- Bottom bar: thin line above, "© 2026 Gurukul Academy | Designed by iSoftro Solutions"
- Decorative tree silhouette in background at 5% opacity, bottom-right
```

### 6.5 Badges & Pills

| Type | Background | Text Color | Usage |
|---|---|---|---|
| Category (News) | `--primary-100` | `--primary-700` | "Notice", "Holiday" |
| Status — New | `--accent-pink-500` | white | "New Admission Open" |
| Status — Featured | `--gold-500` | white | SEE topper highlights |
| Tag — Subject | `--accent-pink-300` | `--primary-900` | Faculty subject |
| Date | `--gold-300` | `--ink-900` | Event date strip |

Pill format: rounded-full, 12px text, 4px 12px padding, 500 weight, uppercase letter-spacing 0.04em

### 6.6 Sections / Page Patterns

**Hero Section**
```
- Min-height: 80vh on desktop, 70vh on mobile
- Background: full-bleed photo of school + dark purple gradient overlay (left → right, 60% → 0%)
- OR: split layout — text left, image right (rounded-xl, with floating stat card overlay)
- Eyebrow text + h1 hero + lead paragraph + 2 buttons (primary + secondary)
- Decorative: soft gold ray pattern bottom-right, low opacity
```

**Section Heading Pattern** (used throughout site)
```
[EYEBROW TEXT IN PINK]      ← e.g., "OUR ACADEMICS"
Section Headline in Poppins  ← centered or left-aligned, h2
Short description paragraph  ← max 60ch, ink-500
─── ✦ ───                   ← optional gold decorative divider
[content below]
```

**Stat Strip**
```
- Background: primary-700 OR primary-100 (alternating sections)
- 4 stats in a row (mobile: 2x2 grid)
- Each stat: large number (text-h1, Poppins 700, gold-500 OR pink-500) + label (text-small, weight 500)
- Optional separator dots between stats (desktop only)
```

**CTA Banner** (mid-page)
```
- Background: primary-700 with subtle radial gradient + tree motif (low opacity)
- White text, centered
- Eyebrow + h2 + lead + primary button (white bg, primary text — inverted)
```

---

## 7. Imagery Guidelines

### 7.1 Photo Style
- **Authentic, real photos** of Gurukul Academy — students, classrooms, events, facilities
- **Bright, natural lighting** preferred
- **Color treatment**: Slight warm tone; consistent across the site
- **Diverse representation**: Show variety in students, activities, ages
- **NEVER use stock photos** of foreign children or generic classrooms

### 7.2 Image Specs

| Use Case | Aspect Ratio | Min Resolution |
|---|---|---|
| Hero | 16:9 (desktop), 4:5 (mobile) | 1920×1080 |
| Card thumbnail | 4:3 or 16:9 | 800×600 |
| Faculty portrait | 4:5 | 600×750 |
| Gallery | Original (varied) | 1200×800+ |
| Logo (header) | Original SVG | Vector |
| Open Graph | 1.91:1 | 1200×630 |

### 7.3 Image Treatment
- **Border-radius**: `--radius-lg` on all photo containers (rounded corners)
- **Subtle hover effect**: 1.03× scale on hover (within overflow-hidden container)
- **Lazy loading**: All images below the fold
- **Format**: WebP with JPEG fallback
- **Alt text**: Required, descriptive (for accessibility + SEO)

### 7.4 Logo Usage
- **Minimum size**: 32px height (digital)
- **Clear space**: At least 16px padding around the logo
- **On dark backgrounds**: Use white/light variant (to be prepared); never apply filter inversion
- **NEVER stretch, recolor, or rotate** the logo

---

## 8. Motion & Interaction

### 8.1 Transition Principles
- **Duration**: 150–300ms for most interactions
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out) for entering; `cubic-bezier(0.4, 0, 1, 1)` (ease-in) for exiting
- **Subtle over flashy**: This is a school website, not an entertainment app

### 8.2 Key Interactions

| Element | Behavior |
|---|---|
| Buttons | `translateY(-1px)` + shadow increase on hover |
| Cards | `translateY(-4px)` + shadow-md on hover |
| Links | Color change with 200ms transition |
| Images | 1.03× scale on hover (in card containers) |
| Form inputs | Border color change + 4px focus ring |
| Page load | Hero text fades up + staggered (40ms between elements) |
| Scroll-triggered | Fade-up reveal for section content (use Intersection Observer) |
| Mobile menu | Slide-in from right, 250ms |
| Image gallery | Lightbox with fade + zoom |

### 8.3 What to Avoid
- ❌ Parallax that breaks on mobile
- ❌ Auto-playing videos with sound
- ❌ Excessive scroll animations
- ❌ Cursors-following elements (annoying)
- ❌ Heavy slide carousels — use sparingly, max 1 per page

---

## 9. Accessibility

- **WCAG 2.1 AA compliance** as baseline
- **Color contrast**: Minimum 4.5:1 for body text, 3:1 for large text (18px+)
- **Focus states**: Visible 2px outline (primary-700) on all interactive elements
- **Keyboard navigation**: All interactions reachable via Tab key
- **Alt text**: Descriptive alt on all meaningful images; `alt=""` on decorative
- **Semantic HTML**: Use `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`
- **ARIA labels**: On icon-only buttons (e.g., hamburger menu, social icons)
- **Form labels**: Always visible (never placeholder-only)
- **Skip-to-content link**: First focusable element on every page

---

## 10. Page-Specific Design Notes

### 10.1 Home
- Hero with bold "Welcome to Gurukul Academy" + tagline + 2 CTAs
- Stat strip (Years of legacy, Students, Faculty, SEE %)
- 3-card "Levels we offer" with tree-motif icons
- Why Choose Us — 4 cards with custom icons
- Mid-page CTA banner: "Admissions Open for 2083 B.S." with gold accents
- Latest news + upcoming events side-by-side on desktop
- Gallery preview — 6-image asymmetric grid (Pinterest-style)
- Testimonials carousel — soft pink background
- Footer

### 10.2 Admissions
- Hero with gold "Admissions Open" pill at top
- Step-by-step process visualized as 5 connected circles (with icons)
- Eligibility & Dates as side-by-side tables
- Inquiry form: 2-column on desktop, stacked on mobile, with reassurance text ("We respond within 24 hours")
- FAQ accordion with smooth expand animation

### 10.3 Faculty Profiles
- Filter pills at top: All / ECD / Basic / Secondary
- Grid: 2 columns mobile, 3 columns tablet, 4 columns desktop
- Hover: card lifts + subject pill changes color

### 10.4 Gallery
- Album covers in a grid
- Click → opens album page with masonry grid
- Click image → lightbox with prev/next navigation, captions, keyboard support

### 10.5 News & Notices
- List view with category filter pills + year filter dropdown
- Cards with date badge + category + title + excerpt
- Pagination at bottom (or "Load more" button)

---

## 11. CSS Variable Setup (Implementation Snippet)

```css
:root {
  /* Colors — Primary */
  --primary-900: #5C1F46;
  --primary-700: #7B2D5C;
  --primary-500: #9C4878;
  --primary-300: #D4A8C3;
  --primary-100: #F5E8EF;

  /* Colors — Accent Pink */
  --accent-pink-500: #E63E8C;
  --accent-pink-300: #FAD2E1;
  --accent-pink-100: #FDF2F8;

  /* Colors — Gold */
  --gold-500: #D4A017;
  --gold-300: #F0CF65;
  --gold-100: #FBF4D9;

  /* Neutrals */
  --ink-900: #1A1A1A;
  --ink-700: #404040;
  --ink-500: #737373;
  --ink-300: #D4D4D4;
  --ink-100: #F5F5F5;
  --white: #FFFFFF;

  /* Semantic */
  --success: #16A34A;
  --warning: #F59E0B;
  --error:   #DC2626;
  --info:    #2563EB;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadow */
  --shadow-xs: 0 1px 2px rgba(123, 45, 92, 0.05);
  --shadow-sm: 0 2px 8px rgba(123, 45, 92, 0.06);
  --shadow-md: 0 4px 16px rgba(123, 45, 92, 0.08);
  --shadow-lg: 0 12px 32px rgba(123, 45, 92, 0.12);
  --shadow-xl: 0 24px 48px rgba(123, 45, 92, 0.16);

  /* Type */
  --font-display: 'Poppins', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}

body {
  font-family: var(--font-body);
  color: var(--ink-700);
  background: var(--white);
  line-height: 1.6;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  color: var(--ink-900);
  letter-spacing: -0.01em;
}
```

---

## 12. Tailwind Config Snippet (if using Tailwind)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F5E8EF',
          300: '#D4A8C3',
          500: '#9C4878',
          700: '#7B2D5C',
          900: '#5C1F46',
        },
        pink: {
          100: '#FDF2F8',
          300: '#FAD2E1',
          500: '#E63E8C',
        },
        gold: {
          100: '#FBF4D9',
          300: '#F0CF65',
          500: '#D4A017',
        },
        ink: {
          100: '#F5F5F5',
          300: '#D4D4D4',
          500: '#737373',
          700: '#404040',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px', md: '10px', lg: '16px', xl: '24px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(123, 45, 92, 0.05)',
        sm: '0 2px 8px rgba(123, 45, 92, 0.06)',
        md: '0 4px 16px rgba(123, 45, 92, 0.08)',
        lg: '0 12px 32px rgba(123, 45, 92, 0.12)',
        xl: '0 24px 48px rgba(123, 45, 92, 0.16)',
      },
    },
  },
};
```

---

## 13. Design Deliverables Checklist

Before development begins, the following design assets should be ready:

- [ ] High-fidelity Figma mockups (Desktop + Mobile) for: Home, About, Academics, Admissions, Faculty, Gallery, Contact
- [ ] Admin panel mockups (Dashboard, Inquiry list, Content edit forms)
- [ ] Logo files: SVG (color + white variant), PNG (transparent, multiple sizes), favicon
- [ ] Brand color swatches confirmed with client
- [ ] At least 20 authentic school photos approved by client
- [ ] Principal's Message + photo
- [ ] Faculty photos + bios collected
- [ ] Final NEB affiliation badge artwork
- [ ] Tagline finalized with client

---

## 14. Don'ts (Critical Reminders)

- ❌ No purple gradients on white background (overused, AI-generic look)
- ❌ No stock photos of non-Gurukul students or foreign-looking schools
- ❌ No more than 2 fonts on a page
- ❌ No mixing icon styles
- ❌ No autoplay video with sound
- ❌ No sharp 90° corners on cards/buttons
- ❌ No long-form text in all caps
- ❌ No carousels for primary content (use grid)
- ❌ No solid black shadows (use brand-tinted)
- ❌ No design decisions made desktop-first

---

*End of Document*
