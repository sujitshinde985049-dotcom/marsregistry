"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { journeySchema } from "@/lib/journey-schema";
import type { JourneyState } from "@/types/registry";

const initialState: JourneyState={personalization:{giftMode:"gift",recipient:"",giftedBy:"",message:"",occasion:"Birthday",certificateDate:"",publicDisplay:true}};
type ContextValue={state:JourneyState;ready:boolean;update:(patch:Partial<JourneyState>)=>void;reset:()=>void};
const JourneyContext=createContext<ContextValue|null>(null);
const STORAGE_KEY="rpr-journey-v2";

export function JourneyProvider({children}:{children:React.ReactNode}){
  const [state,setState]=useState<JourneyState>(initialState); const [ready,setReady]=useState(false);
  useEffect(()=>{const timer=window.setTimeout(()=>{try{const saved=localStorage.getItem(STORAGE_KEY);if(saved){const parsed=journeySchema.safeParse(JSON.parse(saved));if(parsed.success)setState(parsed.data)}}catch{/* Ignore corrupt/unavailable client storage. */}finally{setReady(true)}},0);return()=>window.clearTimeout(timer)},[]);
  useEffect(()=>{if(ready)localStorage.setItem(STORAGE_KEY,JSON.stringify(state))},[state,ready]);
  const update=useCallback((patch:Partial<JourneyState>)=>setState(current=>({...current,...patch})),[]);const reset=useCallback(()=>setState(initialState),[]);
  const value=useMemo(()=>({state,ready,update,reset}),[state,ready,update,reset]);
  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}
export function useJourney(){const value=useContext(JourneyContext);if(!value)throw new Error("useJourney must be used inside JourneyProvider");return value}
