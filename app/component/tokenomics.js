import React from "react";

export default function Tokenomics() {
  return (
    <div className="flex font-mono justify-around   w-full ">
      <div className="flex pt-16   gap-16 lg:gap-48 ">
        <div className="text-center">
          <h1 className=" text-2xl font-semibold  ">Tokenomics</h1>
          <p className="pt-6 text-xl">80% LP</p>

          <p className="text-xl ">10% MARKETING</p>
          <p className="text-xl"> 5% COMMUNITY</p>
          <p className="text-xl"> 5% TEAM</p>
        </div>
        <div className="text-center">
          {" "}
          <h1 className=" text-2xl font-semibold">TOTAL SUPPLY</h1>
          <p className="text-xl pt-6">10,000,000,000</p>
        </div>
      </div>
    </div>
  );
}
