import { getRegion } from "@/data/mars-regions";
import type { RegistryDesignation } from "@/types/registry";

// Development-only deterministic inventory. Phase 3 replaces this adapter with
// transactionally reserved PostgreSQL records; client values are never authoritative.
export function getMockDesignations(regionSlug: string): RegistryDesignation[] {
  const region = getRegion(regionSlug);
  if (!region) return [];
  return Array.from({length:18},(_,index)=>{
    const row=Math.floor(index/6), col=index%6, plot=1841+index;
    return {id:`RPR-${region.code}-A${12+row}-${String(plot).padStart(7,"0")}`,regionCode:region.code,sector:`A${12+row}`,block:String(col+1).padStart(2,"0"),plot,latitude:Number((region.referenceCoordinates.latitude+(row-1)*.06).toFixed(2)),longitude:Number((region.referenceCoordinates.longitude+(col-2.5)*.07).toFixed(2)),symbolicArea:`${120+index*4} m² commemorative grid`,status:[4,10,15].includes(index)?"reserved":"available"};
  });
}
