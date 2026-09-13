import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://redplanetregistry.com"; return ["","/about","/faq","/verify","/contact","/terms","/privacy","/refund-policy","/disclaimer","/registry-terms"].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.6})); }
