import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      {/* <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" /> */}
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change How Your Online Business Sells Goods</span>
        <span>
          <b>Penafy Tiers</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="Basic" text="Basic Tier includes Penafy models for 1 product."/>
        <Feature icon="music icon" title="Standard" text="Standard Tier includes Penafy models for up to 5 products."/>
        <Feature icon="Group 4" title="Premium" text="Premium Tier includes Penafy models for all product, promotion on our featured page and emails to customers on new products."/>
      </div>
    </div>
  );
}

export default Experience;
