import Link from "next/link";
const steps=[{label:"PLACE",href:"/explore"},{label:"PACKAGE",href:"/register/package"},{label:"PERSONALIZE",href:"/register/personalize"},{label:"REVIEW",href:"/register/review"}];
export function Progress({current}:{current:number}){return <nav className="flow-progress" aria-label="Registration progress">{steps.map((step,index)=><Link href={step.href} key={step.label} aria-current={index+1===current?"step":undefined} className={index+1<=current?"active":""}><span>0{index+1}</span>{step.label}</Link>)}</nav>}
