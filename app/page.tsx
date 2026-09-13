import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { packages, regions, steps, trustPoints } from "@/data/site";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-image" src="/images/mars-hero.png" alt="Cinematic view of Mars illuminated along its cratered horizon" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <Header />
        <div className="hero-content shell">
          <p className="eyebrow">PRIVATE COMMEMORATIVE REGISTRY · MARS</p>
          <h1 id="hero-title">YOUR PLACE<br />ON THE<br /><em>RED PLANET.</em></h1>
          <p className="hero-copy">Create a personalized symbolic designation on Mars, preserved with unique coordinates, a registry ID and a beautifully designed certificate.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/explore">EXPLORE MARS <Arrow /></Link><Link className="button button-ghost" href="/explore">GIFT A PLACE ON MARS</Link></div>
        </div>
        <div className="trust-strip"><span>Symbolic commemorative registry</span><span>Personalized certificate</span><span>Verifiable registry ID</span></div>
      </section>

      <section className="intro section shell"><p className="eyebrow">A PLACE BEYOND THE ORDINARY</p><h2>A lasting gesture,<br /><em>charted on Mars.</em></h2><p className="lead">Not just a certificate. A personal space-themed keepsake created for the people, dates and stories that deserve a place in the universe.</p></section>

      <section className="steps section shell" id="how-it-works"><div className="section-heading"><div><p className="eyebrow">THE JOURNEY</p><h2>How it works</h2></div><Link className="text-link" href="#regions">START EXPLORING <Arrow /></Link></div><div className="step-grid">{steps.map((step) => <article className="step" key={step.number}><span>{step.number}</span><div className="orbit-icon" aria-hidden="true"><i /></div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>

      <section className="regions section" id="regions"><div className="shell section-heading"><div><p className="eyebrow">REGISTRY COLLECTIONS</p><h2>Explore <em>Mars</em></h2></div><p className="section-note">Each collection is inspired by a remarkable Martian region and contains a finite series of private registry designations.</p></div><div className="region-rail shell">{regions.map((region, index) => <article className="region-card" key={region.code}><div className={`region-art region-art-${index + 1}`}><span>{region.code}</span><div className="planet-disc" /></div><div className="region-body"><div className="availability"><i /> {region.availability}</div><h3>{region.name}</h3><p>{region.description}</p><div className="region-meta"><span>{region.sector}</span><span>From {region.price}</span></div><Link href={`/explore/${region.slug}`} aria-label={`Explore ${region.name}`}>EXPLORE COLLECTION <Arrow /></Link></div></article>)}</div></section>

      <section className="packages section shell" id="packages"><div className="section-heading"><div><p className="eyebrow">CHOOSE YOUR EDITION</p><h2>Made to be <em>remembered.</em></h2></div><p className="section-note">From an instant digital keepsake to a presentation-ready heirloom.</p></div><div className="package-grid">{packages.map((item) => <article className={`package ${item.featured ? "featured" : ""}`} key={item.name}>{item.featured && <span className="popular">MOST CHOSEN</span>}<p className="eyebrow">{item.name}</p><div className="price"><sup>₹</sup>{item.price}<small>one time</small></div><ul>{item.includes.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul><Link className="button button-package" href="/explore">CHOOSE {item.name} <Arrow /></Link></article>)}</div><p className="fulfilment-note">Physical editions are shown for preview. Shipping and fulfillment will be enabled before launch.</p></section>

      <section className="certificate section shell"><div className="certificate-copy"><p className="eyebrow">YOUR REGISTRY KEEPSAKE</p><h2>Designed to hold<br /><em>a singular story.</em></h2><p>Every record is paired with an original certificate featuring its designation, coordinates, recipient and verification details.</p><Link className="button button-primary" href="#packages">CREATE YOURS <Arrow /></Link></div><div className="certificate-frame" aria-label="Sample certificate preview"><div className="cert-inner"><span className="cert-mark">RPR</span><p>RED PLANET REGISTRY</p><h3>CERTIFICATE<br /><em>OF SYMBOLIC DESIGNATION</em></h3><div className="cert-rule" /><small>THIS COMMEMORATIVE RECORD IS CREATED FOR</small><strong>ARJUN MEHRA</strong><div className="cert-details"><span>RPR-OLY-A12-0001847<br /><small>REGISTRY ID</small></span><span>18.65°N, 226.2°E<br /><small>COORDINATES</small></span></div><p className="cert-legal">A symbolic designation in a privately maintained registry. This certificate does not convey legal ownership of Mars.</p></div></div></section>

      <section className="trust section shell"><div><p className="eyebrow">BUILT ON CLARITY</p><h2>A registry you can<br /><em>understand and trust.</em></h2></div><div className="trust-grid">{trustPoints.map((point) => <article key={point.title}><span>{point.number}</span><h3>{point.title}</h3><p>{point.description}</p></article>)}</div><aside><strong>IMPORTANT DISCLOSURE</strong><p>This product represents a symbolic/commemorative designation recorded in the privately maintained Red Planet Registry. It does not constitute legal title, ownership, sovereignty, mineral rights, habitation rights, or any other legally recognized property interest in Mars or any celestial body.</p></aside></section>

      <section className="closing"><div className="shell"><p className="eyebrow">A GIFT WITH A WIDER HORIZON</p><h2>Some moments<br />deserve <em>a planet.</em></h2><Link className="button button-light" href="#regions">EXPLORE MARS <Arrow /></Link></div></section>
      <Footer />
    </main>
  );
}
