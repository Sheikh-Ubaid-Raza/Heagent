# Heagent Website — Edit & Fix PRD
## Based on Full Site Analysis | April 2026

This document lists every required change to heagent.vercel.app — organized by priority.
Give this directly to your developer or Claude Code agent.

---

## PRIORITY 0 — Critical Fixes (Site is Broken Without These)

### 0.1 — Remove MDCAT Mentor from Products

**File:** `app/products/page.tsx` or wherever products data is stored (likely a JSON/TS array)

**Action:** Delete the MDCAT Mentor product entry entirely.

```
Product to remove:
- Name: "MDCAT Mentor"
- Description: "A fully personalized AI tutor that guides MDCAT students 
  through their entire preparation journey"
- Target Users: MDCAT Students, FSc Students, Pre-med Students
```

**Reason:** This is an EdTech product, not a healthcare AI product. It is out of scope and 
damages brand credibility with clinical and hospital audiences.

---

### 0.2 — Fix All Broken Navigation Links

**Navbar "Get Started" button:**
```
Current: href="#" or no href
Fix:     href="/contact"
```

**Homepage "Request Demo →" button:**
```
Current: href="#" or no href  
Fix:     href="/contact#demo"
```

**Homepage "View Products" button:**
```
Current: href="#" or no href
Fix:     href="/products"
```

**Homepage product cards "Learn more →":**
```
Current: href="#"
Fix:     href="/products"  (until individual pages exist)
```

**Homepage "View All Products" button:**
```
Current: href="#"
Fix:     href="/products"
```

**Products page "View details →" on all cards:**
```
Current: href="#"
Fix (temporary): href="/contact?product=[product-name]"
Fix (permanent): href="/products/[slug]" (requires creating detail pages)
```

**Products page "Contact Us →" button:**
```
Current: href="#"
Fix:     href="/contact"
```

**Footer "Privacy Policy" link:**
```
Current: href="/privacy-policy" (page doesn't exist)
Fix:     Create the page (see 0.4 below)
```

**Footer "Terms of Service" link:**
```
Current: href="/terms-of-service" (page doesn't exist)  
Fix:     Create the page (see 0.5 below)
```

**Contact page "Schedule a Demo" button:**
```
Current: href="#" or no href
Fix:     href="https://calendly.com/[your-link]"  ← Add your Calendly URL
         OR href="/contact" if no Calendly yet
```

**Footer social icons:**
```
Email icon:    href="mailto:info@heagent.site"  (verify this email is active)
LinkedIn icon: href="https://linkedin.com/company/heagent"  ← Add real URL
GitHub icon:   href="https://github.com/Sheikh-Ubaid-Raza/Heagent"
```

---

### 0.3 — Make Contact Form Functional

**File:** `app/contact/page.tsx` + create `app/api/contact/route.ts`

**Option A — Formspree (Zero code, 5 minutes):**
1. Go to formspree.io, create free account
2. Create a new form, get your form ID (looks like "xpzgkwrb")
3. Update form action:

```tsx
// In contact form component
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
>
  {/* existing fields */}
  {/* Add hidden redirect field */}
  <input type="hidden" name="_next" value="https://heagent.vercel.app/contact?sent=true" />
</form>
```

**Option B — Next.js API Route + Resend (Recommended, proper solution):**

Install Resend: `npm install resend`

Create file `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, organization, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
  }

  try {
    // Email to you
    await resend.emails.send({
      from: 'Heagent Website <noreply@heagent.site>',
      to: 'info@heagent.site',
      subject: `New inquiry from ${name} — ${organization || 'No org'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: 'Heagent <info@heagent.site>',
      to: email,
      subject: 'We received your message — Heagent',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to Heagent. We have received your message 
        and will get back to you within 1 business day.</p>
        <p>Best regards,<br/>Ubaid Raza<br/>Founder, Heagent</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

Update `.env.local` (and Vercel environment variables):
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Update contact form to call the API:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');
  
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, organization, message }),
  });
  
  setStatus(res.ok ? 'sent' : 'error');
};
```

---

### 0.4 — Create Privacy Policy Page

Create file: `app/privacy-policy/page.tsx`

```tsx
export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Last updated: April 2026</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="text-gray-300">We collect information you provide directly to us through our 
        contact form, including your name, email address, and organization name. We do not collect 
        any patient health information (PHI) through this website.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-300">Contact form submissions are used solely to respond to your 
        inquiry. We do not sell your information to third parties. We may use your email to send 
        newsletter updates if you have subscribed.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Data Security</h2>
        <p className="text-gray-300">We take reasonable measures to protect your information. 
        Our website uses HTTPS encryption. Contact form data is transmitted securely.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Healthcare Data</h2>
        <p className="text-gray-300">Heagent's AI products are designed with healthcare data 
        compliance in mind. This website does not process, store, or transmit any protected 
        health information (PHI). Our products maintain compliance with applicable healthcare 
        data regulations.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
        <p className="text-gray-300">For privacy-related questions, contact us at: 
        <a href="mailto:info@heagent.site" className="text-teal-400 ml-1">info@heagent.site</a>
        </p>
      </section>
    </div>
  );
}
```

---

### 0.5 — Create Terms of Service Page

Create file: `app/terms-of-service/page.tsx`

```tsx
export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-400 mb-8">Last updated: April 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-300">By accessing heagent.vercel.app (the "Website"), you agree 
        to these Terms of Service. If you do not agree, do not use this Website.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Website Use</h2>
        <p className="text-gray-300">This Website is for informational purposes about Heagent's 
        AI healthcare products. The content does not constitute medical advice. No clinical 
        decisions should be made based solely on information from this Website.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
        <p className="text-gray-300">All content on this Website, including text, graphics, 
        logos, and product descriptions, is the property of Heagent and protected by copyright.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Limitation of Liability</h2>
        <p className="text-gray-300">Heagent provides this Website "as is." We make no warranties 
        regarding accuracy or completeness of content. Heagent is not liable for any damages 
        arising from use of this Website.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
        <p className="text-gray-300">Questions about these Terms: 
        <a href="mailto:info@heagent.site" className="text-teal-400 ml-1">info@heagent.site</a>
        </p>
      </section>
    </div>
  );
}
```

---

## PRIORITY 1 — Important Content Fixes

### 1.1 — Fix Homepage Stats

**File:** `app/page.tsx` or stats component

```
CHANGE 1:
  From:  "2+"  label "AI Products"
  To:    "9+"  label "AI Solutions in Development"

CHANGE 2:
  From:  "70%" label "Time Saved"
  To:    EITHER remove this stat entirely
         OR change to: "24/7" label "AI Availability"

CHANGE 3:
  From:  "100%" label "Healthcare Focused"
  To:    EITHER remove
         OR change to: "3" label "Healthcare Domains" 
         (Lab, Clinical, Medication — based on your products)
```

---

### 1.2 — Remove Duplicate Team & Medical Network from Homepage

**File:** `app/page.tsx`

The following two sections appear on BOTH the homepage AND the About page. Remove both from the homepage:

1. **"Our Team"** section (with Ubaid Raza and Canon Yousuf cards) — DELETE from homepage only
2. **"Our Medical Network"** section (8 boxes: Doctors, Nurses, etc.) — DELETE from homepage only

Keep both sections on the About page (`app/about/page.tsx`) — they belong there.

The space freed on the homepage should be left empty or used for the new section in Priority 2.

---

### 1.3 — Fix "Response Time" Text on Contact Page

**File:** `app/contact/page.tsx`

```
From:  "We typically respond within 24–48 hours"
To:    "We typically respond within 1 business day"
```

---

### 1.4 — Fix "Worldwide" Claim in Contact Page

**File:** `app/contact/page.tsx`

```
From:  "Remote-first company
        Serving healthcare worldwide"

To:    "Remote-first company
        Building for global healthcare"
```

---

### 1.5 — Fix Homepage Hero Subtext

**File:** `app/page.tsx`

```
From:  "Deploy intelligent AI agents to handle repetitive tasks, lab operations, 
        and data management. Save time, reduce errors, and focus entirely on 
        patient care."

To:    "From lab diagnostics to clinical documentation — Heagent builds AI 
        agents that give healthcare professionals their time back."
```

---

### 1.6 — Fix "How It Works" Step 2 Description

**File:** `app/page.tsx` or HowItWorks component

```
From:  "Our agentic AI systems learn and adapt to automate these tasks 
        intelligently, maintaining accuracy and compliance."

To:    "We deploy custom AI agents trained on your specific workflows, 
        ensuring accuracy, compliance, and seamless integration."
```

---

### 1.7 — Fix "About Heagent" Hero Subtitle

**File:** `app/about/page.tsx`

```
From:  "Medical professionals building AI solutions for healthcare"

To:    "Built by clinicians. Powered by AI. Designed for healthcare."
```

---

### 1.8 — Make Newsletter Subscribe Functional

**File:** Homepage newsletter section

**Option A — Mailchimp Embed (Free, easiest):**
1. Create free Mailchimp account
2. Create an audience/list
3. Get embedded form code
4. Replace static email input with Mailchimp embed

**Option B — Next.js API + Resend Audience (Clean):**
```typescript
// app/api/subscribe/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();
  
  // Add to Resend audience (they have a contacts/audience API)
  await resend.contacts.create({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID,
    unsubscribed: false,
  });
  
  return Response.json({ success: true });
}
```

---

## PRIORITY 2 — Add Missing Content

### 2.1 — Add "Why Heagent?" Section on Homepage

Add this section AFTER "How It Works" and BEFORE "Our Products":

```
Section Title: "Why Heagent?"
Subtitle: "Healthcare AI built differently"

4 cards:
1. Icon: Stethoscope  | Title: "Built by Medical Professionals"
   Text: "Our founders have pre-medical backgrounds. 
          We understand clinical workflows from the inside."

2. Icon: Shield        | Title: "Compliance-First Design"
   Text: "Every product is built with healthcare data 
          regulations in mind from day one."

3. Icon: Brain         | Title: "Agentic, Not Just Chatbots"
   Text: "Our AI agents take actions, not just answer 
          questions — automating complete workflows."

4. Icon: Network       | Title: "Guided by Real Clinicians"
   Text: "Our Medical Network of doctors, nurses, and 
          specialists validates every solution we build."
```

---

### 2.2 — Create Lab Tester AI Detail Page

Since Lab Tester AI is the only "Building" status product, it needs a real page.

Create file: `app/products/lab-tester-ai/page.tsx`

Minimum content:
```
Hero: "Lab Tester AI" | Status badge: "Building"
Subtext: "Flagship AI agent for automated lab diagnostics, 
          result interpretation, and intelligent report generation"

Target Users: Pathologists, Lab Technicians, Hospitals, Diagnostic Centers

What It Does (3 features):
1. Automated Diagnostics — AI reads lab samples and generates preliminary analysis
2. Result Interpretation — Intelligent flagging of abnormal values with clinical context  
3. Report Generation — Structured, professional reports in seconds

Status section: "Currently in development. Join our early access list."
CTA: Email input → "Join Waitlist" button (connects to newsletter/Resend)

"Interested in a demo?" → Link to /contact
```

Update "View details →" on Lab Tester AI card to point to `/products/lab-tester-ai`

---

### 2.3 — Add "Inquiry Type" Dropdown to Contact Form

**File:** `app/contact/page.tsx`

Add this field between "Organization" and "Message":

```tsx
<div>
  <label htmlFor="inquiry">Inquiry Type</label>
  <select name="inquiry" id="inquiry">
    <option value="">Select inquiry type</option>
    <option value="demo">Request a Demo</option>
    <option value="partnership">Partnership</option>
    <option value="investment">Investment / Media</option>
    <option value="general">General Question</option>
    <option value="career">Career Opportunity</option>
  </select>
</div>
```

Also update the "Send Message" button on the API side to include this field in the notification email.

---

### 2.4 — Add 404 Page

Create file: `app/not-found.tsx`

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-teal-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8">
        The page you're looking for doesn't exist yet.
      </p>
      <Link href="/" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">
        Back to Home
      </Link>
    </div>
  );
}
```

---

## PRIORITY 3 — Minor Polish

### 3.1 — "Get Started" Button Behavior
Current: In navbar, says "Get Started" — links nowhere.
Action: Link to `/contact` with optional scroll to `#form` anchor.

### 3.2 — Products Page "Interested in Our Products?" CTA Text
```
From:  "Get in touch to learn more about how our AI solutions 
        can help your healthcare organization"
        
To:    "Interested in early access to Lab Tester AI or want to 
        collaborate on our upcoming products? Let's connect."
```

### 3.3 — Footer — "Resources" column
Currently only has "Home" in Resources column.
Either:
- Add more links: Privacy Policy, Terms of Service, Contact
- OR rename "Resources" to "Legal" and keep Privacy Policy + Terms only

### 3.4 — Verify Dark/Light Mode Toggle Works
The sun icon in navbar should toggle between dark and light mode.
Test it. If broken, fix or remove the icon.

### 3.5 — Add "Company" Field to Contact Form Email Notification
Currently Organization field says "Your hospital or organization (optional)".
Make sure this value is included when the notification email is sent to you.

---

## SUMMARY TABLE

| # | Change | File | Priority | Time Estimate |
|---|--------|------|----------|---------------|
| 0.1 | Remove MDCAT Mentor | products data | P0 | 5 min |
| 0.2 | Fix all broken links | multiple | P0 | 30 min |
| 0.3 | Make contact form work | contact + api/contact | P0 | 1-2 hrs |
| 0.4 | Create Privacy Policy page | app/privacy-policy | P0 | 20 min |
| 0.5 | Create Terms of Service page | app/terms-of-service | P0 | 20 min |
| 1.1 | Fix homepage stats | app/page.tsx | P1 | 10 min |
| 1.2 | Remove duplicate sections from home | app/page.tsx | P1 | 15 min |
| 1.3 | Fix response time text | app/contact | P1 | 2 min |
| 1.4 | Fix "worldwide" text | app/contact | P1 | 2 min |
| 1.5 | Fix hero subtext | app/page.tsx | P1 | 5 min |
| 1.6 | Fix How It Works Step 2 | app/page.tsx | P1 | 5 min |
| 1.7 | Fix About page subtitle | app/about | P1 | 2 min |
| 1.8 | Newsletter functionality | api/subscribe | P1 | 1 hr |
| 2.1 | Add "Why Heagent?" section | app/page.tsx | P2 | 1-2 hrs |
| 2.2 | Lab Tester AI detail page | app/products/lab-tester-ai | P2 | 2-3 hrs |
| 2.3 | Add inquiry type dropdown | app/contact | P2 | 15 min |
| 2.4 | Add 404 page | app/not-found.tsx | P2 | 15 min |
| 3.1 | "Get Started" link | navbar | P3 | 2 min |
| 3.2 | Products page CTA text | app/products | P3 | 5 min |
| 3.3 | Footer Resources column | footer component | P3 | 10 min |
| 3.4 | Verify dark mode toggle | layout | P3 | 10 min |

---

## TOTAL EFFORT ESTIMATE
- P0 (Critical): ~2-3 hours
- P1 (Important): ~2 hours  
- P2 (Additions): ~4-5 hours
- P3 (Polish): ~30 minutes
- **Total: ~1-2 focused days of work**

---

*End of Heagent Website Edit PRD*
