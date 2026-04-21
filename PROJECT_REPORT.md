# PROJECT OVERVIEW

- **Tech Stack:** Vite + React (TypeScript), Tailwind CSS, Shadcn UI, React Router, Zod (Form Validation), React Hook Form.
- **Backend/API:** Vercel Serverless Functions (Node.js) + Resend API.
- **Hosting Platform:** Vercel (Recommended).
- **Repo URL:** https://github.com/heagent-site
- **Live URL:** (Pending Deployment)

---

# PAGES INVENTORY

| Route | Title | Sections | Status |
|-------|-------|----------|--------|
| `/` | Heagent \| AI-Powered Healthcare Automation | Hero, How It Works, Why Heagent, Products Section, Newsletter CTA | Functional |
| `/about` | About Heagent \| Healthcare AI Co-Founders | Hero, Team Section, Mission & Values, Mentors | Static |
| `/products` | Healthcare AI Products \| Heagent | Hero, Products Filter, Products Grid, Product Detail Modal, Contact CTA | Functional |
| `/products/lab-tester-ai` | Lab Tester AI \| Heagent | Hero, Target Users, Features, Status & Waitlist Form, Contact CTA | Functional |
| `/contact` | Contact Heagent \| Request a Demo | Hero, Contact Form, Contact Information, Schedule a Demo CTA | Functional |
| `/privacy-policy` | Privacy Policy \| Heagent | Legal content formatting | Static |
| `/terms-of-service` | Terms of Service \| Heagent | Legal content formatting | Static |
| `*` (404) | Page Not Found \| Heagent | 404 message, Back to Home CTA | Functional |

---

# FUNCTIONALITY STATUS

- **Contact form:** Working via **Resend API** (Vercel Serverless Function at `/api/contact`).
- **Newsletter subscribe:** Working via **Resend API** (Vercel Serverless Function at `/api/subscribe`).
- **Lab Tester AI waitlist:** Working via **Resend API** (Vercel Serverless Function at `/api/subscribe`).
- **Dark/light mode toggle:** Working. Integrated into Navbar with local storage persistence.
- **Products filter:** Working. Filters dynamically based on `All`, `Idea`, `Building`, `Launched` statuses.
- **All navigation links:** Working.
- **All CTA buttons:** 
  - "Request Demo" / "Schedule a Demo" → Calendly (`https://calendly.com/heagent-site/15-min-meeting`).
  - "Get Started" / "Contact Us" / "Inquire About This Product" → `/contact`.
  - "View Details" on Lab Tester AI → `/products/lab-tester-ai`.
  - "View Details" on other products → Opens Product Detail Modal.
- **Footer links:** Working. Internal links properly routed. External links use target `_blank`.
- **Social links:** 
  - Email: `mailto:contact@heagent.site`
  - LinkedIn: `https://www.linkedin.com/company/heagent`
  - GitHub: `https://github.com/heagent-site`

---

# COMPLETE WORKFLOW

### a) A visitor submits the contact form
1. The visitor fills out the `/contact` form and clicks "Send Message".
2. The frontend validates the fields locally using Zod.
3. If valid, an asynchronous POST request is sent to the `/api/contact` serverless endpoint with the form data. A hidden honeypot field prevents basic bot spam.
4. The serverless function utilizes the Resend API to send two emails:
   - A detailed HTML notification email sent to `contact@heagent.site`.
   - An auto-reply confirmation email sent to the visitor's provided email.
5. Upon successful execution, the frontend displays a green success message thanking the user.

### b) A visitor subscribes to the newsletter
1. The visitor enters their email in the footer/homepage Newsletter CTA and clicks "Subscribe".
2. The email is validated locally.
3. An asynchronous POST request is sent to the `/api/subscribe` endpoint.
4. The serverless function utilizes the Resend API to send a notification email to `contact@heagent.site` containing the new subscriber's email.
5. The frontend displays a success state confirming the subscription.

### c) A visitor clicks "Schedule a Demo"
1. The visitor clicks the "Schedule a Demo" button (located on the Contact page, or "Request Demo" on the Homepage).
2. A new browser tab opens, directing the user directly to the Calendly scheduling page: `https://calendly.com/heagent-site/15-min-meeting`.

### d) A visitor clicks "View Details" on a product
1. The visitor clicks a product card on the `/products` page.
2. If the product is **Lab Tester AI**, the application navigates to its dedicated page at `/products/lab-tester-ai`.
3. For **any other product**, a sleek Modal overlay opens, displaying the expanded description, key features, target users, and a CTA button linking to the contact page.

---

# ENVIRONMENT VARIABLES

| Variable Name | What it does | Where to get it | Required |
|---------------|--------------|-----------------|----------|
| `RESEND_API_KEY` | Authenticates backend API requests to Resend to send notification and auto-reply emails. | Resend Dashboard → API Keys | **Required** |
| `RESEND_AUDIENCE_ID` | Directs newsletter subscribers to a specific Audience list (Optional future integration). | Resend Dashboard → Audiences | Optional |

---

# DEPLOYMENT CHECKLIST

- **Environment Variables:** In the Vercel Dashboard, navigate to Project Settings -> Environment Variables and add `RESEND_API_KEY`.
- **DNS Settings:** Configure the `.site` domain in Vercel. Ensure DNS A/CNAME records correctly point to Vercel's nameservers/IPs.
- **Resend Domain Verification:** Verify your domain (`heagent.site`) in Resend to authenticate sending emails from `noreply@heagent.site` and `contact@heagent.site`. This requires adding specific TXT/MX records to your DNS settings. Without this, emails may land in spam or fail to send.
- **Third-Party Accounts:** 
  - Vercel Account.
  - Resend Account.
  - Calendly Account.
- **Manual Steps:** No manual build steps are required. Pushing to the main branch of the GitHub repository will trigger an automatic Vercel build and deployment.

---

# KNOWN ISSUES / REMAINING TASKS

- **Image Compression (Optional):** The images in `public/images` (`canon.png` and `ubaid.png`) are relatively large (~1.3MB and ~500KB). Consider compressing them for optimal loading performance. No immediate action is required as they function normally.
- **Domain Authentication:** Action Required — Configure DNS records for Resend to verify domain sending authority.

---

# LINKS REFERENCE

- **Email Support / Inquiries:** `contact@heagent.site`
- **Mailto Links:** `mailto:contact@heagent.site`
- **GitHub:** `https://github.com/heagent-site`
- **LinkedIn:** `https://www.linkedin.com/company/heagent`
- **Calendly:** `https://calendly.com/heagent-site/15-min-meeting`
