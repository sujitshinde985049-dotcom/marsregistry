import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
export function InnerPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) { return <main className="inner-page"><Header/><section className="inner-hero shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><article className="prose shell">{children}</article><Footer/></main> }
