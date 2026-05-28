export type ToolStatus = "live" | "beta" | "soon";

export type Tool = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: ToolStatus;
  /** Tile background color (solid hex). One per tool. */
  bg: string;
  /** Foreground used for hero text inside the tile. */
  fg: string;
  cta: string;
};

export const tools: Tool[] = [
  {
    id: "visual-generator",
    name: "Visual Generator",
    tagline: "Panel & session announcement graphics",
    description:
      "Template builder for panel, chat, and partner session graphics. Drop in headshots, pick a format, export.",
    href: "https://tbbqvisualgen.vercel.app/",
    status: "live",
    bg: "#5B4BFF",
    fg: "#ffffff",
    cta: "Open tool",
  },
  {
    id: "personal-kit",
    name: "Personal Kit",
    tagline: "Share-ready TechBBQ promo cards",
    description:
      "Pick your role, add a photo and your details, and export a personalized TechBBQ card to share.",
    href: "https://personalkit.vercel.app/",
    status: "live",
    bg: "#E8476B",
    fg: "#ffffff",
    cta: "Open tool",
  },
  {
    id: "email-responder",
    name: "Email Responder",
    tagline: "AI Gmail replies in your tone",
    description:
      "Chrome extension that drafts Gmail replies in your personal tone of voice. Multi-provider AI.",
    href: "http://emailresponder.online/",
    status: "live",
    bg: "#0EA371",
    fg: "#ffffff",
    cta: "Get extension",
  },
  {
    id: "signature",
    name: "Email Signature",
    tagline: "On-brand Gmail signatures in seconds",
    description:
      "Generate a TechBBQ-styled email signature with your details — copy straight into Gmail.",
    href: "https://auridevcourse.github.io/signaturegenerator/",
    status: "live",
    bg: "#FF6A3D",
    fg: "#ffffff",
    cta: "Open tool",
  },
  {
    id: "tone-of-voice",
    name: "Tone of Voice",
    tagline: "TechBBQ writing voice, on tap",
    description:
      "Rewrite or generate copy that matches the TechBBQ tone of voice across channels.",
    href: "https://toneofv.vercel.app/",
    status: "live",
    bg: "#0F172A",
    fg: "#ffffff",
    cta: "Open tool",
  },
];
