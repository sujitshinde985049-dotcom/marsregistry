"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { marsRegions } from "@/data/mars-regions";

export function MarsMap(){const [selected,setSelected]=useState(marsRegions[0].slug);const active=marsRegions.find(r=>r.slug===selected)!;return <div className="map-wrap"><div className="mars-map"><Image src="/images/mars-map.png" alt="Original cartographic illustration of the Martian surface" fill sizes="(max-width: 900px) 100vw, 1200px"/><div className="map-grid" aria-hidden="true"/>{marsRegions.map(region=><button key={region.slug} className={`map-marker ${selected===region.slug?"selected":""}`} style={{left:`${region.mapPosition.x}%`,top:`${region.mapPosition.y}%`}} onClick={()=>setSelected(region.slug)} aria-label={`Select ${region.name}`} aria-pressed={selected===region.slug}><i/><span>{region.code}</span></button>)}</div><div className="map-selection" aria-live="polite"><div><p className="eyebrow">SELECTED REGION · {active.code}</p><h3>{active.name}</h3><p>{active.referenceCoordinates.label} · {active.collection}</p></div><Link className="button button-primary" href={`/explore/${active.slug}`}>EXPLORE REGION ↗</Link></div></div>}
