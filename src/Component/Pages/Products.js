import React from "react";
import HeroSection from "../HeroSection";
import Pricing from "../Pricing";
import { homeObjFive, homeObjSeven } from "./Homepage/Data";

export default function Products() {
  return (
    <>
      <div className='products'>
        <Pricing />
        <HeroSection {...homeObjFive} />
        <HeroSection {...homeObjSeven} />
      </div>
    </>
  );
}
