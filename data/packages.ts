import type { RegistryPackage } from "@/types/registry";
export const registryPackages: RegistryPackage[] = [
  {id:"starter",name:"STARTER",price:699,description:"A refined digital beginning.",featured:false,includes:["Digital personalized certificate","Unique registry designation","Mars coordinates","Verification-ready record"]},
  {id:"pioneer",name:"PIONEER",price:1499,description:"Our signature personalized edition.",featured:true,includes:["Everything in Starter","Premium certificate","Personal dedication","Digital Mars location card","Shareable gift card"]},
  {id:"explorer-gift",name:"EXPLORER GIFT",price:2999,description:"A presentation-ready physical gift.",featured:false,includes:["Everything in Pioneer","Printed premium certificate","Gift presentation","Physical registry pack"]},
  {id:"legacy",name:"LEGACY",price:5999,description:"A lasting framed keepsake.",featured:false,includes:["Everything in Explorer Gift","Premium framed certificate","Luxury presentation box","Special keepsake pack"]},
];
export const getPackage = (id?: string) => registryPackages.find((item) => item.id === id);
export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
