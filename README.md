# AgentiousAI — Agentic AI for Healthcare

A modern, production-ready website for AgentiousAI, showcasing AI-powered solutions that automate healthcare workflows.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (or use [nvm](https://github.com/nvm-sh/nvm))
- npm or pnpm (pnpm recommended)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd agentiousai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   - Visit [http://localhost:8080](http://localhost:8080)

### Build for Production

```bash
npm run build
# or
pnpm build
```

Preview production build locally:
```bash
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
agentiousai/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, HowItWorks, Products, etc.
│   │   └── ui/              # Reusable UI components (shadcn)
│   ├── data/
│   │   ├── products.ts      # Product data
│   │   └── team.ts          # Team member data
│   ├── pages/
│   │   ├── Index.tsx        # Home page
│   │   ├── About.tsx        # About page
│   │   ├── Products.tsx     # Products page
│   │   └── Contact.tsx      # Contact page
│   ├── index.css            # Design system & global styles
│   └── App.tsx              # Main app component
├── public/
│   ├── logo.png             # Site logo
│   └── favicon.png          # Favicon
└── tailwind.config.ts       # Tailwind configuration
```

## ✏️ Editing Content

### Update Site Copy

**Hero Section** (`src/components/sections/Hero.tsx`)
- Edit headline, subheadline, and CTA buttons

**About Content** (`src/pages/About.tsx`)
- Modify the company story and mission

**Products** (`src/data/products.ts`)
- Add/edit products: name, description, features, status, target users
- Status options: `"Idea"`, `"Building"`, `"Launched"`

**Team Members** (`src/data/team.ts`)
- Update team member names, roles, and bios
- Add/modify mentor information

### Replace Logo

1. Replace these files with your new logo:
   - `public/logo.png` (main logo, 512×512px recommended)
   - `public/favicon.png` (favicon, 512×512px recommended)

2. For best results:
   - Use PNG format with transparency
   - Maintain square aspect ratio
   - Optimize file size (use tools like TinyPNG)

### Customize Design

**Colors & Theme** (`src/index.css`)
- Modify CSS variables for light/dark themes
- Primary color: `--primary`
- Accent color: `--accent`
- Gradients: `--gradient-primary`, `--gradient-accent`

**Tailwind Config** (`tailwind.config.ts`)
- Extend animations, shadows, and other utilities

## 📧 Connecting Contact Forms

The contact form and newsletter are **UI-only** by default. To make them functional:

### Option 1: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update `src/pages/Contact.tsx`:
   ```tsx
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData),
     });
     // Handle response
   };
   ```

### Option 2: Getform
1. Sign up at [getform.io](https://getform.io)
2. Create a form endpoint
3. Similar integration as Formspree

### Option 3: Netlify Forms
If deploying to Netlify, add `netlify` attribute to form:
```tsx
<form onSubmit={handleSubmit} netlify>
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Connect GitHub**
   - Push your code to GitHub
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository

2. **Configure Settings**
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
   - No environment variables needed for basic setup

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - Get a free `.vercel.app` domain

4. **Custom Domain** (Optional)
   - In Vercel dashboard: Settings → Domains
   - Add your custom domain (e.g., `agentiousai.site`)
   - Configure DNS as instructed

### Deploy to Netlify

1. Connect repository at [netlify.com](https://netlify.com)
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

### Deploy to Other Platforms

This is a standard Vite + React app. It works with:
- **Cloudflare Pages**
- **GitHub Pages**
- **AWS Amplify**
- Any static hosting service

Build command: `npm run build`  
Output directory: `dist`

## 🔧 Advanced Customization

### Add New Pages

1. Create new page in `src/pages/`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `src/components/layout/Navbar.tsx`

### SEO Optimization

**Per-Page Meta Tags:**
- Update `index.html` for global tags
- Add react-helmet or similar for dynamic per-page SEO

**Generate Sitemap:**
```bash
# Create sitemap.xml manually or use a generator
# Place in public/ folder for deployment
```

**robots.txt:**
Already included at `public/robots.txt`

### Add Analytics (Optional)

**Google Analytics:**
1. Get tracking ID from Google Analytics
2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

**Plausible Analytics:**
1. Sign up at [plausible.io](https://plausible.io)
2. Add script to `index.html`:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

## 🎨 Design System

- **Deep navy blue** (`--primary`): Brand primary color
- **Bright teal** (`--accent`): Accent color for CTAs and highlights
- **Gradients**: `bg-gradient-primary`, `bg-gradient-accent`
- **Shadows**: `shadow-elegant`, `shadow-card`
- **Animations**: `animate-fade-in`, `animate-slide-up`, `animate-scale-in`

All design tokens are defined in `src/index.css` for consistency.

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Framer Motion** - Ready to add for animations

## 📝 License

© 2025 AgentiousAI. All rights reserved.

## 🤝 Support

For questions or support:
- **Email:** contact@agentiousai.site
- **Website:** [agentiousai.site](https://agentiousai.site)

---

Built with ❤️ by Ubaid Raza & Canon Yusuf
