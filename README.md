# Frontend Mentor - Space tourism website solution

This is a solution to the
[Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for each of the website's pages depending on their
    device's screen size
-   See hover states for all interactive elements on the page
-   View each page and toggle between tabs to see different content

### Screenshot

![](./screenshot.jpg)

### Links

-   Solution URL:
    [https://www.frontendmentor.io/solutions/space-tourism-nextjs-tailwind](https://www.frontendmentor.io/solutions/space-tourism-nextjs-tailwind)
-   Live Site URL:
    [https://space-tourism-gabriel.vercel.app](https://space-tourism-gabriel.vercel.app)

---

## My process

### Built with

-   Semantic HTML5
-   [React](https://reactjs.org/)
-   [Next.js (App Router)](https://nextjs.org/docs/app)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   Mobile-first workflow

### What I learned

This challenge helped me deepen my understanding of Tailwind CSS, especially:

-   Creating fully responsive layouts with custom breakpoints
-   Using utility-first classes to manage spacing, layout and typography
-   Applying conditional styling based on media queries (`md:`, `lg:` etc.)
-   Handling tab navigation and dynamic rendering using React state

Example of conditional class usage with Tailwind:

```tsx
<div className='text-white text-lg md:text-2xl lg:text-4xl'>
    Responsive text sizing using Tailwind
</div>
```

### Continued development

In future projects, I want to:

-   Refine my use of Tailwind's `@layer` and `@apply` for cleaner component
    styling
-   Explore the use of Tailwind plugins like `tailwind-forms` or
    `tailwind-typography`
-   Improve accessibility (focus states, aria attributes) using Tailwind utility
    classes

### Useful resources

-   [Tailwind CSS Documentation](https://tailwindcss.com/docs) – The official
    Tailwind docs are excellent and helped me a lot with responsive design and
    utility-first concepts.
-   [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing)
    – For understanding layouts, routing and dynamic rendering.

---

## Author

-   GitHub – [GabrielHenrique16y](https://github.com/GabrielHenrique16y)
-   Frontend Mentor –
    [@GabrielHenrique16y](https://www.frontendmentor.io/profile/GabrielHenrique16y)

---

## Acknowledgments

Thanks to the Frontend Mentor team for the great design and guidance. Also, a
big shoutout to the Tailwind CSS community for the detailed documentation and
real-world examples.
