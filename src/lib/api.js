const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export async function fetchAPI(endpoint) {
  try {
    const url = `${API_URL}/api${endpoint}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn("⚠️ API erreur:", res.status, endpoint);
      return null;
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Fetch API Error:", error);
    return null;
  }
}

export function getStrapiMedia(url) {
  if (url == null) return null;
  if (typeof url !== "string") return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${API_URL}${url}`;
}

export function normalizeStrapiImage(media) {
  if (!media) return null;

  if (typeof media === "string") {
    return media.startsWith("http") ? media : `${API_URL}${media}`;
  }

  if (Array.isArray(media) && media.length > 0) {
    return normalizeStrapiImage(media[0]);
  }

  if (typeof media === "object") {
    // ✅ Strapi 5 — url directe
    if (typeof media.url === "string") {
      return media.url.startsWith("http")
        ? media.url
        : `${API_URL}${media.url}`;
    }
    // Strapi 4 — { data: { attributes: { url } } }
    if (media.data?.attributes?.url) {
      const u = media.data.attributes.url;
      return u.startsWith("http") ? u : `${API_URL}${u}`;
    }
    // Strapi 4 — { data: { url } }
    if (media.data?.url) {
      const u = media.data.url;
      return u.startsWith("http") ? u : `${API_URL}${u}`;
    }
  }

  return null;
}

export function normalizeRichText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return item;
        if (typeof item === "object") {
          if (typeof item.text === "string") return item.text;
          if (Array.isArray(item.children)) {
            return item.children
              .map((c) => (typeof c === "string" ? c : c.text || ""))
              .join(" ");
          }
        }
        return "";
      })
      .join(" ")
      .trim();
  }
  if (typeof value === "object") {
    if (typeof value.text === "string") return value.text;
    if (Array.isArray(value.children)) {
      return value.children
        .map((c) => (typeof c === "string" ? c : c.text || ""))
        .join(" ");
    }
  }
  return "";
}

export function normalizeIntro(value) {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return item.trim();
        if (item?.children && Array.isArray(item.children)) {
          return item.children
            .map((c) => c.text || "")
            .join("")
            .trim();
        }
        if (typeof item === "object") {
          return normalizeRichText(item.text ?? item.value ?? item);
        }
        return String(item ?? "").trim();
      })
      .filter(Boolean);
  }
  return [normalizeRichText(value)].filter(Boolean);
}

export function normalizeStrapiBlocks(blocks = []) {
  if (!Array.isArray(blocks)) return [];

  return blocks
    .map((block) => {
      if (!block) return null;

      if (block.__component === "sections.section") {
        return {
          type: "section",
          title: block.title || "",
          text: normalizeRichText(block.text),
        };
      }

      if (block.__component === "sections.image-block") {
        const src = normalizeStrapiImage(block.image);
        return {
          type: "image",
          src,
          alt: block.caption || "Illustration",
        };
      }

      if (block.__component === "sections.cta-block") {
        return {
          type: "cta",
          title: block.title || "",
          buttonText: block.buttonText || "Nous contacter",
          buttonLink: block.buttonLink || "/contact",
        };
      }

      return null;
    })
    .filter(Boolean);
}

export function normalizeActualite(item = {}) {
  const intro = normalizeIntro(item.intro || item.description || []);
  const img = normalizeStrapiImage(item.image);
  return {
    id: item.id || item.slug,
    slug: item.slug,
    title: item.title || "",
    description: item.description || "",
    image: img,
    imageUrl: img,
    date: item.date
      ? new Date(item.date).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "",
    readTime: item.readTime || "",
    author: item.author || "",
    intro,
    content: normalizeStrapiBlocks(item.content || []),
    isPromo: Boolean(item.isPromo),
  };
}

export function normalizeProjet(item = {}) {
  const img = normalizeStrapiImage(item.heroImage || item.image);
  const categories = Array.isArray(item.categories)
    ? item.categories
    : item.categories
      ? [item.categories]
      : [];
  return {
    id: item.id || item.slug,
    slug: item.slug,
    title: item.title || "",
    description: item.description || "",
    categories,
    heroImage: img,
    image: img,
    intro: normalizeIntro(item.intro || []),
    content: normalizeStrapiBlocks(item.content || []),
  };
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export async function submitContactForm({
  fullName,
  email,
  message,
  interests,
}) {
  try {
    const res = await fetch(`${API_URL}/api/contact-messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          fullName,
          email,
          message,
          interests,
        },
      }),
    });

    if (!res.ok) {
      console.error("Erreur envoi contact:", res.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Submit Contact Error:", error);
    return false;
  }
}

// ─── FETCH ────────────────────────────────────────────────────────────────────
export const getProjets = () => fetchAPI("/projets?populate[heroImage]=true");
export const getActualites = () => fetchAPI("/actualites?populate[image]=true");
export const getProjet = (slug) => fetchAPI(`/projets/slug/${slug}`);
export const getActualite = (slug) => fetchAPI(`/actualites/slug/${slug}`);

export const getHomePage = () => fetchAPI("/home-page?populate=*");
export const getAboutPage = () => fetchAPI("/about-page?populate=*");
export const getSiteSettings = () => fetchAPI("/site-setting?populate=*");
export const getApproachCards = () => fetchAPI("/approach-cards?populate=*");
export const getExpertises = () => fetchAPI("/expertises?populate=*");
export const getValues = () => fetchAPI("/values?populate=*");
export const getTestimonials = () => fetchAPI("/testimonials?populate=*");
export const getNewsletterItems = () =>
  fetchAPI("/newsletter-items?populate=*");
