<div align="center">
  <br />
    <img src="https://github.com/user-attachments/assets/ab600f24-f4d9-4cef-8f1e-3fd9194afb30" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="greensock" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

<h2 align="center">An Awwwards Winning Website</h2>

---

## 📋 Table of Contents
1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  
5. 🕸️ [Snippets](#snippets)  
6. 🔗 [Assets](#assets)  
7. 🚀 [License & Credits](#license--credits)  

---

## ⚠️ Disclaimer

Special thanks to **[Zentry](https://zentry.com/)** for the design inspiration. This project is intended for learning and personal exploration only, not for commercial use or public release.

---

## 🤖 Introduction
This project is a **visually captivating website** inspired by [Zentry](https://zentry.com/).  
It demonstrates how to combine **scroll-based animations, dynamic transitions, and immersive storytelling** into a modern frontend experience.  

The goal of this repo is to help developers explore **creative web design patterns**, experiment with animation frameworks, and improve UI/UX building skills.  

---

## ⚙️ Tech Stack
- ⚛️ **React.js** – component-based frontend framework  
- 🎨 **Tailwind CSS** – utility-first styling for fast, responsive layouts  
- 🎬 **GSAP** – high-performance animations and scroll triggers  

---

## 🔋 Features
👉 **Scroll Animations** – Smooth, interactive effects triggered by user scroll.  
👉 **Geometric Transitions** – Unique CSS clip-path animations.  
👉 **3D Hover Interactions** – Engaging, modern hover states.  
👉 **Video Transitions** – Integrated video to enhance storytelling.  
👉 **Responsive Layout** – Works seamlessly across devices.  
👉 **Reusable Components** – Scalable and modular code structure.  

---

## 🤸 Quick Start

### Prerequisites
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)  

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>index.css</code></summary>

```css

@import "tailwindcss";
@layer base {
  body {
    font-family: "General sans", sans-serif;
    @apply w-dvw bg-[#dfdff0] overflow-x-hidden;
  }
}

@layer utilities {
  .border-hsla {
    @apply border border-white/20;
  }
  .bento-tilt_1 {
    @apply relative rounded-md overflow-hidden;
  }
  .bento-tilt_2 {
    @apply relative col-span-1 row-span-1 rounded-md overflow-hidden;
  }
  .bento-title {
    @apply font-zentry-regular text-4xl uppercase font-black md:text-6xl;
  }
  .swordman-clip-path {
    clip-path: polygon(16% 0, 89% 15%, 75% 100%, 0 97%);
  }
  .contact-clip-path-1 {
    clip-path: polygon(25% 0%, 74% 0, 69% 64%, 34% 73%);
  }
  .contact-clip-path-2 {
    clip-path: polygon(29% 15%, 85% 30%, 50% 100%, 10% 64%);
  }
  .story-img-container {
    @apply relative md:h-dvh h-[90vh] w-full;
    filter: url("#flt_tag");
  }
  .story-img-mask {
    @apply absolute size-full left-0 top-0  md:left-[20%] md:top-[-10%] md:size-4/5 overflow-hidden;
    clip-path: polygon(4% 0, 83% 21%, 100% 73%, 0% 100%);
  }
  .story-img-content {
    @apply absolute w-full md:h-dvh h-[50vh] opacity-100 left-10 top-16 md:left-0 md:top-10 lg:left-[-300px] lg:top-[-100px];
    transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0) scale(1);
  }
  .floating-nav {
    @apply bg-black rounded-lg border;
  }
  .absolute-center {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
  }
  .mask-clip-path {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .special-font b {
    font-family: "zentry-regular";
    font-feature-settings: "ss01" on;
  }
  .hero-heading {
    @apply uppercase font-zentry-regular font-bold text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem];
  }
  .flex-center {
    @apply flex items-center justify-center;
  }
  .about-subtext {
    @apply absolute bottom-[-100vh] left-1/2 w-full -translate-x-1/2 max-w-96 text-center font-circularweb-book text-lg md:max-w-[34rem];
  }
  .about-image {
    @apply absolute top-0 z-20 left-1/2 -translate-x-1/2 h-[60vh] origin-center overflow-hidden w-96 rounded-3xl md:w-[30vw];
  }
  .animated-title {
    @apply flex flex-col gap-1 text-white uppercase leading-[.8] text-7xl md:text-[6rem] sm:px-32;
  }
  .animated-word {
    @apply font-zentry-regular font-black opacity-0;
    transform: translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg);
    transform-origin: 50% 50% -150px !important;
    will-change: opacity, transform;
  }
  .nav-hover-btn {
    @apply relative ms-10 text-xs uppercase font-general text-blue-50 cursor-pointer after:absolute after:w-full after:h-[2px] after:bg-neutral-800 dark:after:bg-white after:-bottom-0.5 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:scale-x-100 hover:after:origin-bottom-left;
  }
  .indicator-line {
    @apply h-1 w-px bg-white rounded-full transition-all duration-200 ease-in-out;
  }

  .indicator-line.active {
    animation: indicator-line 0.5s ease infinite;
    animation-delay: calc(var(--animation-order) * 0.1s);
  }

  @keyframes indicator-line {
    0% {
      height: 4px;
      /* transform: translateY(-0px); */
    }
    50% {
      height: 16px;
      /* transform: translateY(-4px); */
    }
    100% {
      height: 4px;
      /* transform: translateY(-0px); */
    }
  }

  .three-body {
    --uib-size: 35px;
    --uib-speed: 0.8s;
    --uib-color: #5d3fd3;
    position: relative;
    display: inline-block;
    height: var(--uib-size);
    width: var(--uib-size);
    animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
  }
  .three-body__dot {
    @apply absolute w-[100%] h-[30%];
  }
  .three-body__dot:after {
    content: "";
    @apply absolute w-[100%] h-[0%] bg-[var(--uib-color)] pb-[100%] rounded-full;
  }
  .three-body__dot:nth-child(1) {
    bottom: 5%;
    left: 0;
    transform: rotate(60deg);
    transform-origin: 50% 85%;
  }
  .three-body__dot:nth-child(1)::after {
    bottom: 0;
    left: 0;
    animation: wobble1 var(--uib-speed) infinite ease-in-out;
    animation-delay: calc(var(--uib-speed) * -0.3);
  }
  .three-body__dot:nth-child(2) {
    bottom: 5%;
    right: 0;
    transform: rotate(-60deg);
    transform-origin: 50% 85%;
  }
  .three-body__dot:nth-child(2)::after {
    bottom: 0;
    left: 0;
    animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15)
      ease-in-out;
  }
  .three-body_dot:nth-child(3) {
    bottom: -5%;
    left: 0;
    transform: translateX(116.666%);
  }
  .three-body__dot:nth-child(3)::after {
    top: 0;
    left: 0;
    animation: wobble2 var(--uib-speed) infinite ease-in-out;
  }
  @keyframes spin78236 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes wobble1 {
    0%,
    100% {
      transform: translateY(0%) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateY(-66%) scale(0.65);
      opacity: 0.8;
    }
  }
  @keyframes wobble2 {
    0%,
    100% {
      transform: translateY(0%) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateY(66%) scale(0.65);
      opacity: 0.8;
    }
  }
}

@font-face {
  font-family: circularweb-book;
  src: url("/fonts/circularweb-book.woff2") format("woff2");
}
@font-face {
  font-family: general;
  src: url("/fonts/general.woff2") format("woff2");
}
@font-face {
  font-family: robert-medium;
  src: url("/fonts/robert-medium.woff2") format("woff2");
}
@font-face {
  font-family: robert-regular;
  src: url("/fonts/robert-regular.woff2") format("woff2");
}
@font-face {
  font-family: zentry-regular;
  src: url("/fonts/zentry-regular.woff2") format("woff2");
}
@theme {
  --font-robert-medium: "robert-medium", monospace;
  --font-general: "general", sans-serif;
  --font-circularweb-book: "circularweb-book", sans-serif;
  --font-robert-regular: "robert-regular", sans-serif;
  --font-zentry-regular: "zentry-regular", sans-serif;

  --color-blue-50: #dfdff0;
  --color-blue-75: #dfdff2;
  --color-blue-100: #f0f2fa;
  --color-blue-200: #010101;
  --color-blue-300: #4fb7dd;

  --color-violet-300: #5724ff;

  --color-yellow-100: #8e983f;
  --color-yellow-300: #edff66;
}


```

</details>

## <a name="links">🔗 Assets</a>

Assets used in the project can be found [here](https://drive.google.com/file/d/12hCVnanOAUmM1vzz2dTWZ_uEFGG8xDcT/view?usp=sharing)

> This project uses some assets and fonts from **[Zentry](https://zentry.com/)** purely for educational and demonstration purposes. All rights to these assets and fonts belong to their respective owners. If you plan to use this project commercially or publicly, please replace these assets and fonts with ones you own or have permission to use. This project is not affiliated with or endorsed by **[Zentry](https://zentry.com/)**.

