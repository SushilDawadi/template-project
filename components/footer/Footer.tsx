import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[50px] md:flex md:justify-between md:items-center text-center pl-5 pr-5 ">
      <div>&copy;2023 Template. All rights reserved.</div>
      <div className="flex items-center justify-center gap-[12px]">
        <Image
          src="/facebook.png"
          width={20}
          height={20}
          alt="facebook"
          className=" object-contain opacity-70 hover:opacity-100 cursor-pointer"
        />
        <Image
          src="/youtube.png"
          width={20}
          height={20}
          alt="youtube"
          className=" object-contain opacity-70 hover:opacity-100 cursor-pointer"
        />
        <Image
          src="/insta.png"
          width={20}
          height={20}
          alt="instagram"
          className=" object-contain opacity-70 hover:opacity-100 cursor-pointer"
        />
        <Image
          src="/twitter.png"
          width={20}
          height={20}
          alt="twitter"
          className=" object-contain opacity-70 hover:opacity-100 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
