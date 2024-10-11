import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black h-screen  flex flex-col md:flex-row">
      <div className="flex-1">
        <h1 className=""></h1>
        <p className=""></p>
        <button className=""></button>
      </div>
      <div className="flex-1 w-full relative">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
