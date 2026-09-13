import Image from "next/image";
import Link from "next/link";
import type { MarsRegion } from "@/types/registry";
import { formatPrice } from "@/data/packages";
export function RegionCard({region,index}:{region:MarsRegion;index:number}){return <article className="explore-card"><div className="explore-card-art"><Image src="/images/mars-map.png" alt={`Cartographic view associated with ${region.name}`} fill sizes="(max-width: 700px) 90vw, 40vw" style={{objectPosition:region.imagePosition}}/><span>{String(index+1).padStart(2,"0")} / {region.code}</span></div><div className="explore-card-body"><p className="eyebrow">{region.subtitle}</p><h3>{region.name}</h3><p>{region.shortDescription}</p><div><span>{region.referenceCoordinates.label}</span><strong>FROM {formatPrice(region.startingPrice)}</strong></div><Link href={`/explore/${region.slug}`}>VIEW COLLECTION <span>↗</span></Link></div></article>}
