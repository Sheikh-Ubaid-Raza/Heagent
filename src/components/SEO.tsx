import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.heagent.site";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

interface SEOProps {
  title: string;
  description: string;
  /** Relative path, e.g. "/about". Omit for home page. */
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SEOProps) => {
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Heagent" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Heagent - Healthcare AI Automation" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Heagent - Healthcare AI Automation" />
    </Helmet>
  );
};
