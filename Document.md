# Zenteq Website – Development Documentation

## Project Overview

**Company:** Zenteq Private Limited  
**Domain:** https://zenteq.in  

### Purpose
A modern, professional, high-converting company website positioned as a **DevOps & Cloud Engineering company**, not an individual freelancer.

### Target Audience
- Startup founders
- CTOs
- Small to mid-size engineering teams
- SaaS & FinTech companies

### Primary Goals
- Establish technical trust
- Clearly explain DevOps services
- Convert visitors into leads
- Provide a scalable foundation for future growth

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** JavaScript (no TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email Service:** EmailJS (frontend-only)
- **Hosting Ready For:** Vercel / AWS EC2 / Netlify

---

## Final Project Structure

```

app/
├─ layout.js
├─ page.js                     # Home
├─ not-found.js                # 404 page
│
├─ components/
│  ├─ Navbar.js
│  ├─ PageTransition.js
│  ├─ animations.js
│  ├─ Hero.js
│  ├─ Services.js
│  ├─ HowItWorks.js
│  ├─ WhyChoose.js
│
├─ services/
│  ├─ aws-devops/
│  │  ├─ page.js
│  │  └─ AWSDevOpsClient.js
│  ├─ ci-cd/
│  │  ├─ page.js
│  │  └─ CICDClient.js
│  ├─ cost-optimization/
│  │  ├─ page.js
│  │  └─ CostOptimizationClient.js
│
├─ case-studies/
│  ├─ page.js
│  └─ CaseStudiesClient.js
│
├─ contact/
│  ├─ page.js
│  └─ ContactClient.js
│
public/
├─ logo.svg
│
globals.css
next.config.mjs

````

---

## Architecture Principles

### Server vs Client Components

**Strict rule followed:**

- `page.js`
  - Server Component
  - Handles SEO metadata
  - Defines routing

- `*Client.js`
  - Client Component
  - Handles animations, state, and events

This avoids:
- Metadata export errors
- Hydration issues
- Runtime crashes

---

## Global Layout

### `app/layout.js`

Responsibilities:
- Global `<Navbar />`
- Page-to-page transitions
- Theme handling
- Consistent header across all pages

**Result:**  
Users can always navigate back to Home, regardless of page.

---

## Navigation (Navbar)

### Design Decisions
- Sticky header
- Logo links to `/`
- Mobile-friendly menu
- Theme toggle
- Contact link routes to `/contact`

**Problem solved:**  
No isolated pages or dead-end navigation.

---

## Page-to-Page Route Transitions

### Component: `PageTransition.js`

- Uses `AnimatePresence`
- Smooth fade/slide between routes
- Subtle and professional

**Benefits**
- App-like UX
- No flashy effects
- No performance impact

---

## Home Page Design Strategy

### Visual Rhythm Rules

| Section Type | Spacing |
|-------------|---------|
| Hero | `pt-40 pb-32` |
| Major sections | `py-28` |
| Break sections | `py-20` |
| CTA | `py-32` |

### Content Flow
1. Hero – positioning & value
2. Services – what Zenteq delivers
3. Break section – credibility
4. How It Works – process clarity
5. Why Choose Zenteq – trust
6. CTA – conversion

---

## Animations Strategy

### Tool
**Framer Motion**

### Shared Animation Config

**`components/animations.js`**
```js
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
````

### Standard Usage Pattern

```js
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
```

### Rules Followed

* Subtle animations only
* Trigger once on scroll
* No excessive motion
* Mobile-friendly

---

## Services Pages

### Structure Pattern

```
service-name/
├─ page.js          # SEO + metadata
└─ ServiceClient.js # UI + animations
```

### Benefits

* SEO-friendly
* Easy to add new services
* Consistent layout
* No Next.js errors

---

## Case Studies

### Purpose

* Build credibility
* Demonstrate real outcomes
* Support enterprise positioning

### Features

* Card-based layout
* CTA buttons
* Ready for detailed case pages

---

## Contact Page

### Why EmailJS

* Free tier
* No backend required
* Fastest setup
* Works locally & in production

### Flow

1. User submits form
2. EmailJS sends email
3. Success message displayed
4. No server failures or 500 errors

### Security

* Public key only
* Domain restriction enabled
* Optional reCAPTCHA support

---

## 404 / Not Found Page

### File

`app/not-found.js`

### Purpose

* Graceful UX for invalid routes
* SEO-safe
* Redirects users back to Home

---

## Mobile UX Decisions

* Minimum 44px tap targets
* Max text width using `max-w-*`
* Cards stack cleanly
* No hover-only interactions
* Mobile-first spacing

---

## Development Notes

### Next.js Dev Indicator

* The “Next.js” button appears **only in dev mode**
* Never visible in production
* Can be disabled via `next.config.mjs`

---

## Best Practices Applied

* Stable React keys
* No object rendering
* No metadata in client components
* Clear separation of concerns
* Company-first language

---

## Future Enhancements

* Migrate EmailJS → AWS SES
* Add Calendly booking
* Add analytics (GA / Plausible)
* SEO sitemap & robots.txt
* Performance & Lighthouse tuning
* About Zenteq page
* Pricing & engagement models

---

## Deployment Notes

### Recommended Platforms

* Vercel (fastest)
* AWS EC2 + Nginx (full control)

### Pre-Deployment Checklist

* Run `npm run build`
* Test `/contact` form
* Verify mobile layout
* Check all navigation links

---

## Final Outcome

This project delivers:

* A professional DevOps company website
* Clean, scalable architecture
* Production-ready UX
* Easy long-term maintenance

---


