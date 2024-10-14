import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-1/2 md:h-24 p-4 lg:px-20 xl:p-40 to-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold  text-xl "></Link>
    </div>
  );
};

export default Footer;
