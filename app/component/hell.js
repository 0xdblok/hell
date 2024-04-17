import React from "react";
import Image from "next/image";
import hell from "../asset/hell.png";
export default function Hell() {
  return (
    <div className="flex justify-center">
      {" "}
      <Image src={hell} alt="hero" width={250} height={250} />
    </div>
  );
}
