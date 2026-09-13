export type RegionCode = "OLY" | "VAL" | "GAL" | "JEZ" | "ELY";
export type Availability = "available" | "selected" | "reserved";
export type GiftMode = "self" | "gift";

export interface MarsRegion {
  slug: string;
  code: RegionCode;
  name: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  referenceCoordinates: { latitude: number; longitude: number; label: string };
  collection: string;
  startingPrice: number;
  availabilityLabel: string;
  facts: { label: string; value: string }[];
  mapPosition: { x: number; y: number };
  imagePosition: string;
}

export interface RegistryDesignation {
  id: string;
  regionCode: RegionCode;
  sector: string;
  block: string;
  plot: number;
  latitude: number;
  longitude: number;
  symbolicArea: string;
  status: Exclude<Availability, "selected">;
}

export interface RegistryPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  featured: boolean;
  includes: string[];
}

export interface Personalization {
  giftMode: GiftMode;
  recipient: string;
  giftedBy: string;
  message: string;
  occasion: string;
  certificateDate: string;
  publicDisplay: boolean;
}

export interface JourneyState {
  regionSlug?: string;
  designation?: RegistryDesignation;
  packageId?: string;
  personalization: Personalization;
}
