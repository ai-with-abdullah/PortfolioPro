# PortfolioPro — AI Agent Engineer Portfolio Website

A modern, high-performance personal branding website built for **Abdullah AI** — an AI Agent Engineer specializing in autonomous AI agents and multi-agent systems for businesses globally, with a focus on Gulf real estate automation.

**Live Site:** [abdullah-ai.com](https://abdullah-ai.com)

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router, SSR, and SEO optimization |
| **Vanilla CSS** | Custom design system with CSS variables, animations, and responsive breakpoints |
| **Web3Forms API** | Contact form submissions sent directly to email |
| **Vercel** | Deployment and hosting |

---

## 📁 Project Structure

```
src/app/
├── page.js                    # Homepage — hero, stats, testimonials, video demos, blog preview
├── services/page.js           # Services — 3 service tiers with detailed breakdowns
├── case-studies/page.js       # Case studies — real project results
├── gulf-real-estate-ai/page.js # Gulf Real Estate AI — dedicated landing page
├── pricing/page.js            # Pricing — 3 tiers, ROI calculator
├── about/page.js              # About — bio, expertise, track record
├── faq/page.js                # FAQ — 20+ questions with FAQPage schema
├── blog/
│   ├── page.js                # Blog index — featured + grid layout
│   ├── data.js                # Blog content (all posts)
│   └── [slug]/page.js         # Dynamic blog post pages
├── contact/
│   ├── page.js                # Contact — SEO metadata (server component)
│   └── ContactPageClient.js   # Contact form (client component, Web3Forms)
├── Navbar.js                  # Client-side navigation with active states
├── layout.js                  # Root layout — metadata, schema, footer
├── globals.css                # Full design system
├── sitemap.js                 # Dynamic sitemap generator
└── videos-data.js             # Video demo data (add new videos here)

public/
├── llms.txt                   # AI crawler optimization file
├── robots.txt                 # Search engine + AI crawler rules
├── og-image.png               # Open Graph social sharing image
├── me.jpg                     # Profile photo
├── videos/                    # Compressed demo videos (MP4)
│   ├── kuwait-real-estate-demo.mp4
│   └── timeline-1-demo.mp4
└── blog-*.png                 # Blog post cover images
```

---

## ✨ Features

### SEO & AI Optimization
- **Schema.org markup** — Person, ProfessionalService, FAQPage, Service, WebSite
- **llms.txt** — Structured file for AI model discovery (ChatGPT, Claude, Perplexity)
- **robots.txt** — Explicitly allows GPTBot, Claude-Web, PerplexityBot, Google-Extended
- **Dynamic sitemap** — Auto-generated from pages and blog posts
- **Open Graph + Twitter Cards** — Branded social sharing images

### Pages
- **Homepage** — Hero, stats, process flow, case studies, testimonials, video demos, blog preview
- **Services** — 3 service tiers with detailed use cases, tech stacks, timelines, and pricing
- **Gulf Real Estate AI** — Dedicated landing page targeting Kuwait, UAE, Saudi Arabia, Bahrain, Qatar, Oman
- **Pricing** — 3 packages, add-ons, ROI calculator with real Gulf example
- **About** — Bio, expertise grid, track record, working style
- **FAQ** — 20+ questions across 5 categories with FAQPage schema
- **Blog** — 8 long-form articles with AI-generated cover images
- **Case Studies** — Real project results with metrics
- **Contact** — Working form (Web3Forms) + WhatsApp + email

### Design
- Dark theme with purple-to-teal gradient accents
- Smooth reveal animations (CSS-only, no JS dependencies)
- Fully responsive (desktop → tablet → mobile)
- Custom favicon (hexagonal "A" brand icon)

---

## 🛠 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ai-with-abdullah/PortfolioPro.git
cd PortfolioPro

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Setup

**Contact Form (Web3Forms):**
1. Go to [web3forms.com](https://web3forms.com) and create a free access key
2. Update the key in `src/app/contact/ContactPageClient.js` (line 18)

---

## 📹 Adding New Videos

1. Place your `.mov` or `.mp4` file in the project root
2. Convert to optimized MP4:
   ```bash
   ffmpeg -i "Your Video.mov" -c:v libx264 -preset slow -crf 26 -c:a aac -movflags +faststart -vf "scale=1280:-2" public/videos/your-video.mp4
   ```
3. Add an entry in `src/app/videos-data.js`:
   ```js
   {
     id: "your-video-id",
     title: "Your Video Title",
     description: "Short description of the video.",
     src: "/videos/your-video.mp4",
     tag: "Demo",
     client: "Client Name",
     flag: "🇰🇼",
   },
   ```
4. The video automatically appears on the homepage.

---

## 📝 Adding New Blog Posts

Add a new entry to `src/app/blog/data.js`:

```js
{
  slug: "your-post-slug",
  title: "Your Post Title",
  desc: "Short description for the card.",
  tag: "Category",
  date: "May 2026",
  readTime: "8 min read",
  coverImage: "/blog-your-post.png",
  content: `Your full blog post content in HTML...`,
}
```

The post automatically gets a page at `/blog/your-post-slug` and appears in the sitemap.

---

## 🌐 Deployment

The site is optimized for **Vercel** deployment:

```bash
# Build for production
npm run build

# Or deploy directly via Vercel CLI
npx vercel --prod
```

---

## 📄 License

This project is proprietary. All rights reserved.

---

**Built by [Abdullah AI](https://abdullah-ai.com) — AI Agent Engineer**
