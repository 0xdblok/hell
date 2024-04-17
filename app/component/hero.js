import React from "react";
import Image from "next/image";
import logo from "../asset/logo.png";
export default function Hero() {
  return (
    <div>
      <h1 className="text-center font-mono font-bold text-2xl pt-12">
        HELLVING ON BASE IS NOT THAT FAR MFER
      </h1>
      <div className="flex justify-center pt-6">
        {" "}
        <Image
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
          src={logo}
          alt="hero"
          width={350}
          height={350}
        />{" "}
      </div>
    </div>
  );
}
