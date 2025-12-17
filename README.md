# Anime Vault | Modern Anime Discovery Platform - Next.js FullStack Server-Side Rendered Project

A modern, fully server-rendered anime listing and browsing platform built with **Next.js 14 App Router**. Discover and explore anime with infinite scroll, beautiful animations, and real-time data from the Shikimori API.

**Live Demo:** [https://anime-lover.vercel.app/](https://anime-lover.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=for-the-badge&logo=tailwind-css)

![project25](https://github.com/user-attachments/assets/08b14faa-3e9a-4fb2-a794-2e82c35980ac) ![Screenshot 2024-09-16 at 13 57 39](https://github.com/user-attachments/assets/b0ea18a0-e6cd-4d69-b222-018de87b8fe9)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [How to Run](#-how-to-run)
- [Project Walkthrough](#-project-walkthrough)
- [Components Documentation](#-components-documentation)
- [API Integration](#-api-integration)
- [Key Functionalities](#-key-functionalities)
- [Code Examples](#-code-examples)
- [Reusing Components](#-reusing-components)
- [Deployment](#-deployment)
- [Keywords](#-keywords)
- [Conclusion](#-conclusion)

---

## 🎯 Project Overview

Anime Vault is a production-ready anime discovery platform that demonstrates modern web development practices using Next.js 14's latest features. The project showcases:

- **Server-Side Rendering (SSR)** for optimal SEO and performance
- **Server Actions** for seamless server-side data fetching
- **Infinite Scroll** for smooth user experience
- **Framer Motion** animations for engaging UI
- **TypeScript** for type safety
- **Tailwind CSS** for responsive, utility-first styling

This project serves as an excellent learning resource for understanding Next.js 14 App Router, Server Components, Client Components, and modern React patterns.

---

## ✨ Features

### Core Features

- 🎨 **Beautiful UI/UX** - Modern, dark-themed interface with smooth animations
- 🔄 **Infinite Scroll** - Seamless pagination with automatic loading
- 🚀 **Server-Side Rendering** - Fast initial page loads and SEO optimization
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎭 **Framer Motion Animations** - Staggered card animations for visual appeal
- 🔍 **Real-Time Data** - Live anime data from Shikimori API
- ⚡ **Optimized Images** - Next.js Image component with automatic optimization
- 🎯 **TypeScript** - Full type safety throughout the application
- 📊 **SEO Optimized** - Comprehensive metadata for search engines and social sharing

### Technical Features

- Next.js 14 App Router architecture
- Server Actions for data fetching
- Client Components for interactivity
- Intersection Observer API for scroll detection
- Font optimization with Next.js font system
- Image optimization and lazy loading

---

## 🛠 Technology Stack

### Core Technologies

- **Next.js 14.2.35** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 3.3** - Utility-first CSS framework

### Key Libraries

- **framer-motion 10.16.5** - Animation library for React
- **react-intersection-observer 9.5.3** - Intersection Observer hook

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### External APIs

- **Shikimori API** - Anime data source ([Documentation](https://shikimori.one/api/doc))

---

## 📁 Project Structure

```bash
anime-vault/
├── app/                          # Next.js 14 App Router directory
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── page.tsx                 # Home page (Server Component)
│   ├── action.tsx               # Server Actions for data fetching
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── _data.ts                 # Static data (optional, not used in production)
│   └── favicon.ico              # Site favicon
│
├── components/                   # Reusable React components
│   ├── AnimeCard.tsx            # Individual anime card component
│   ├── LoadMore.tsx             # Infinite scroll component
│   ├── Hero.tsx                 # Hero section component
│   ├── Footer.tsx               # Footer component
│   └── Motion.tsx                # Framer Motion wrapper
│
├── public/                       # Static assets
│   ├── anime.png                # Hero image
│   ├── logo.svg                 # Logo
│   ├── hero.png                 # Hero background
│   ├── spinner.svg              # Loading spinner
│   ├── episodes.svg             # Episodes icon
│   ├── star.svg                 # Star rating icon
│   └── [social-icons].svg       # Social media icons
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

### Key Files Explained

- **`app/layout.tsx`** - Root layout that wraps all pages, contains SEO metadata
- **`app/page.tsx`** - Main home page, fetches initial anime data
- **`app/action.tsx`** - Server Actions for fetching anime from API
- **`components/AnimeCard.tsx`** - Reusable card component for displaying anime
- **`components/LoadMore.tsx`** - Client component handling infinite scroll
- **`next.config.js`** - Configures image domains and build settings

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or later ([Download](https://nodejs.org/))
- **npm** or **yarn** or **pnpm** (comes with Node.js)
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/anime-vault.git
   cd anime-vault
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🔐 Environment Variables

### Current Setup

**This project does not require environment variables** as it uses the public Shikimori API which doesn't require authentication. However, if you want to add environment variables for future enhancements, here's how:

### Setting Up Environment Variables

1. **Create a `.env.local` file** in the root directory:

   ```bash
   touch .env.local
   ```

2. **Add your environment variables** (example for future API keys):

   ```env
   # .env.local
   NEXT_PUBLIC_API_URL=https://shikimori.one/api
   # NEXT_PUBLIC_API_KEY=your_api_key_here (if needed in future)
   ```

3. **Access in your code**:

   ```typescript
   // Server Components and Server Actions
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

   // Client Components
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

### Environment Variable Best Practices

- **Never commit `.env.local`** - Add it to `.gitignore`
- **Use `NEXT_PUBLIC_` prefix** for client-accessible variables
- **Use `.env.example`** to document required variables
- **Keep secrets server-side** - Don't expose API keys to the client

### Example `.env.example` File

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://shikimori.one/api

# Optional: Future API key (if Shikimori requires authentication)
# NEXT_PUBLIC_API_KEY=your_api_key_here
```

---

## 🏃 How to Run

### Development Mode

```bash
npm run dev
```

Starts the development server at `http://localhost:3000` with hot-reloading enabled.

### Production Build

```bash
npm run build
npm start
```

Creates an optimized production build and starts the production server.

### Linting

```bash
npm run lint
```

Runs ESLint to check for code quality issues.

---

## 📚 Project Walkthrough

### Architecture Overview

This project follows the **Next.js 14 App Router** architecture, which introduces several key concepts:

1. **Server Components** (default) - Run on the server, reduce bundle size
2. **Client Components** (`"use client"`) - Run in the browser, enable interactivity
3. **Server Actions** (`"use server"`) - Server-side functions callable from client

### Data Flow

```bash
User Request
    ↓
app/page.tsx (Server Component)
    ↓
app/action.tsx (Server Action) → Shikimori API
    ↓
Returns JSX (AnimeCard components)
    ↓
Rendered on Server → Sent to Client
    ↓
User Scrolls → LoadMore Component (Client)
    ↓
Intersection Observer detects scroll
    ↓
Calls fetchAnime Server Action
    ↓
Appends new data to page
```

### Page Rendering Process

1. **Initial Load**: Server renders `app/page.tsx` with first 8 anime
2. **Server Action**: `fetchAnime(1)` fetches data from Shikimori API
3. **Component Creation**: Data is transformed into `AnimeCard` components
4. **HTML Generation**: Server generates HTML with all content
5. **Client Hydration**: React hydrates the page for interactivity
6. **Infinite Scroll**: `LoadMore` component handles additional pages

---

## 🧩 Components Documentation

### 1. AnimeCard Component

**Location:** `components/AnimeCard.tsx`

**Type:** Server Component (can be used in both Server and Client contexts)

**Purpose:** Displays individual anime information in a card format.

**Props:**

```typescript
interface Prop {
  anime: AnimeProp; // Anime data object
  index: number; // Index for staggered animation
}
```

**Features:**

- Framer Motion animations with stagger effect
- Next.js Image optimization
- Responsive design
- Displays: image, name, type, episodes, rating

**Usage Example:**

```tsx
import AnimeCard from "@/components/AnimeCard";

<AnimeCard
  anime={{
    id: "1",
    name: "Attack on Titan",
    image: { original: "/path/to/image.jpg" },
    kind: "TV",
    episodes: 75,
    episodes_aired: 75,
    score: "9.16",
  }}
  index={0}
/>;
```

**Reusing in Other Projects:**

- Copy `AnimeCard.tsx` and `Motion.tsx`
- Adjust the `AnimeProp` interface to match your data structure
- Customize styling with Tailwind classes
- Modify animation variants as needed

---

### 2. LoadMore Component

**Location:** `components/LoadMore.tsx`

**Type:** Client Component (`"use client"`)

**Purpose:** Implements infinite scroll functionality.

**Features:**

- Intersection Observer API for scroll detection
- Automatic pagination
- Loading spinner
- State management with React hooks

**How It Works:**

1. Uses `useInView` hook to detect when trigger element is visible
2. When visible, calls `fetchAnime` Server Action
3. Appends new data to existing state
4. Shows loading spinner during fetch

**Usage Example:**

```tsx
import LoadMore from "@/components/LoadMore";

// In your page component
<LoadMore />;
```

**Reusing in Other Projects:**

- Copy `LoadMore.tsx`
- Update the `fetchAnime` import to your data fetching function
- Adjust the `page` variable initialization
- Customize loading spinner and grid layout
- Modify delay timing if needed

---

### 3. Hero Component

**Location:** `components/Hero.tsx`

**Type:** Server Component

**Purpose:** Displays the landing section with branding.

**Features:**

- Responsive layout
- Background image support
- Gradient text effect
- Logo display

**Usage Example:**

```tsx
import Hero from "@/components/Hero";

// In layout.tsx
<Hero />;
```

**Reusing in Other Projects:**

- Copy `Hero.tsx`
- Replace logo and images
- Update heading text
- Customize gradient class
- Adjust responsive breakpoints

---

### 4. Footer Component

**Location:** `components/Footer.tsx`

**Type:** Server Component

**Purpose:** Site footer with copyright and social links.

**Features:**

- Responsive flex layout
- Social media icons
- Copyright information

**Usage Example:**

```tsx
import Footer from "@/components/Footer";

// In layout.tsx
<Footer />;
```

**Reusing in Other Projects:**

- Copy `Footer.tsx`
- Update copyright text
- Replace social media icons
- Add/remove social links
- Customize styling

---

### 5. Motion Component

**Location:** `components/Motion.tsx`

**Type:** Client Component (`"use client"`)

**Purpose:** Wrapper for Framer Motion animations.

**Usage Example:**

```tsx
import { MotionDiv } from "@/components/Motion";

<MotionDiv
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.5 }}
>
  Content here
</MotionDiv>;
```

**Reusing in Other Projects:**

- Copy `Motion.tsx`
- Create additional motion components (MotionSection, MotionButton, etc.)
- Use with any Framer Motion animation

---

## 🔌 API Integration

### Shikimori API

**Base URL:** `https://shikimori.one/api`

**Endpoint Used:**

```bash
GET /animes?page={page}&limit={limit}&order=popularity
```

**Parameters:**

- `page` - Page number (starts at 1)
- `limit` - Number of items per page (default: 8)
- `order` - Sort order (`popularity`, `ranked`, `name`, etc.)

**Response Structure:**

```json
[
  {
    "id": 1,
    "name": "Anime Name",
    "image": {
      "original": "/system/animes/original/1.jpg"
    },
    "kind": "TV",
    "episodes": 24,
    "episodes_aired": 24,
    "score": "8.5"
  }
]
```

### API Integration Code

**Location:** `app/action.tsx`

```typescript
export async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}
```

### Using Different APIs

To integrate a different API:

1. **Update the fetch URL** in `app/action.tsx`
2. **Adjust the `AnimeProp` interface** to match new data structure
3. **Update the mapping logic** to transform API response
4. **Modify `AnimeCard` component** if data fields change

---

## 🎯 Key Functionalities

### 1. Server-Side Rendering (SSR)

**How it works:**

- `app/page.tsx` is a Server Component by default
- Data fetching happens on the server before HTML is sent
- Reduces client-side JavaScript bundle size
- Improves SEO and initial load performance

**Code Example:**

```tsx
// app/page.tsx
async function Home() {
  // This runs on the server
  const data = await fetchAnime(1);
  return <div>{data}</div>;
}
```

---

### 2. Server Actions

**How it works:**

- Functions marked with `"use server"` run on the server
- Can be called directly from Client Components
- No need for API routes
- Automatic serialization of props and return values

**Code Example:**

```typescript
// app/action.tsx
"use server";

export async function fetchAnime(page: number) {
  // Server-side code
  const response = await fetch(apiUrl);
  return response.json();
}
```

---

### 3. Infinite Scroll

**How it works:**

- Uses `react-intersection-observer` to detect scroll position
- When trigger element enters viewport, fetches next page
- Appends new data to existing state
- Shows loading indicator during fetch

**Code Example:**

```tsx
// components/LoadMore.tsx
const { ref, inView } = useInView();

useEffect(() => {
  if (inView) {
    fetchAnime(page).then((res) => {
      setData([...data, ...res]);
    });
  }
}, [inView]);
```

---

### 4. Framer Motion Animations

**How it works:**

- Defines animation variants (hidden/visible states)
- Uses stagger delay for cascading effects
- Triggers on viewport entry

**Code Example:**

```tsx
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

<MotionDiv
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: index * 0.25 }}
>
  Content
</MotionDiv>;
```

---

### 5. Image Optimization

**How it works:**

- Next.js Image component automatically optimizes images
- Lazy loading by default
- Responsive images with srcset
- WebP format when supported

**Code Example:**

```tsx
<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  // or use fill for responsive containers
  fill
/>
```

---

## 💻 Code Examples

### Creating a New Server Action

```typescript
// app/actions.ts
"use server";

export async function fetchAnimeDetails(id: string) {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  return response.json();
}
```

### Using Server Action in Client Component

```tsx
// components/AnimeDetails.tsx
"use client";

import { fetchAnimeDetails } from "@/app/actions";
import { useState } from "react";

export function AnimeDetails({ id }: { id: string }) {
  const [details, setDetails] = useState(null);

  const loadDetails = async () => {
    const data = await fetchAnimeDetails(id);
    setDetails(data);
  };

  return <button onClick={loadDetails}>Load Details</button>;
}
```

### Creating a Reusable Card Component

```tsx
// components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  image: string;
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <Image src={image} alt={title} width={400} height={300} />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
```

### Adding a New Page Route

```tsx
// app/about/page.tsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
    </div>
  );
}
```

Accessible at: `/about`

---

## 🔄 Reusing Components

### Using AnimeCard in Another Project

1. **Copy the component files:**

   ```bash
   cp components/AnimeCard.tsx your-project/components/
   cp components/Motion.tsx your-project/components/
   ```

2. **Install required dependencies:**

   ```bash
   npm install framer-motion next
   ```

3. **Update the interface** to match your data:

   ```typescript
   export interface YourDataProp {
     id: string;
     title: string; // Changed from 'name'
     // ... other fields
   }
   ```

4. **Import and use:**

   ```tsx
   import AnimeCard from "@/components/AnimeCard";

   <AnimeCard anime={yourData} index={0} />;
   ```

### Using LoadMore in Another Project

1. **Copy the component:**

   ```bash
   cp components/LoadMore.tsx your-project/components/
   ```

2. **Install dependencies:**

   ```bash
   npm install react-intersection-observer
   ```

3. **Update the fetch function:**

   ```typescript
   // Change this import
   import { fetchAnime } from "../app/action";

   // To your fetch function
   import { fetchYourData } from "../app/your-action";
   ```

4. **Use in your page:**

   ```tsx
   import LoadMore from "@/components/LoadMore";

   <LoadMore />;
   ```

### Creating Custom Variants

You can create custom animation variants for different effects:

```typescript
// components/Motion.tsx
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
```

---

## 🚀 Deployment

### Deploying to Vercel

1. **Push your code to GitHub**

2. **Import project in Vercel:**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure build settings:**

   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Deploy:**
   - Vercel automatically detects Next.js and configures everything
   - Click "Deploy"

### Deploying to Other Platforms

**Netlify:**

```bash
npm run build
# Deploy .next folder
```

**Docker:**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🏷 Keywords

- Next.js 14
- React 18
- TypeScript
- Server Components
- Client Components
- Server Actions
- App Router
- Infinite Scroll
- Framer Motion
- Tailwind CSS
- SSR (Server-Side Rendering)
- SEO Optimization
- Anime API
- Shikimori API
- Responsive Design
- Web Development
- Full-Stack Development
- Modern React Patterns
- Performance Optimization
- Image Optimization

---

## 🎓 Conclusion

Anime Vault demonstrates modern web development practices using Next.js 14's cutting-edge features. This project serves as an excellent learning resource for:

- Understanding Server Components vs Client Components
- Implementing Server Actions for data fetching
- Building infinite scroll functionality
- Creating smooth animations with Framer Motion
- Optimizing for SEO and performance
- Building responsive, mobile-first UIs

### Key Takeaways

1. **Server Components** reduce bundle size and improve performance
2. **Server Actions** simplify server-side logic without API routes
3. **Infinite Scroll** enhances user experience for large datasets
4. **TypeScript** provides type safety and better developer experience
5. **Tailwind CSS** enables rapid, responsive UI development

### Next Steps

- Add search functionality
- Implement anime detail pages
- Add user favorites/bookmarks
- Create filtering and sorting options
- Add dark/light theme toggle
- Implement user authentication
- Add comments and ratings

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
