import React from "react";
import Image from "next/image";
import hell from "../asset/hell.png";
import based from "../asset/based.png";
import helving from "../asset/helving.png";
export default function Hell() {
  return (
    <div>
      <div className="flex  gap-6 pt-16 justify-center">
        {" "}
        <Image
          className="w-[150px] h-[150px] md:w-[350px] md:h-[350px]"
          src={helving}
          alt="hero"
          width={250}
          height={250}
        />
        <Image
          className="w-[150px] h-[150px] md:w-[350px] md:h-[350px]"
          src={based}
          alt="hero"
          width={250}
          height={250}
        />
      </div>
      <div className="text-center font-medium text-sm pt-28">
        <div className="p-8 rounded-xl text-slate-700 bg-red-300">
          <h1>HOW TO BUY</h1>
          <p>1/ADD BASE TO YOUR WALLET</p>
          <p>VISIT CHAINLIST TO ADD THE BASE CHAIN NETWORK TO YOUR WALLET.</p>
        </div>
        <div className="mt-8 p-8 rounded-xl text-slate-700 bg-red-300">
          <h1>2/ADD BASE</h1>
          <p>ACQUIRING BASE ETH (ETH)</p>
          <p>THERE ARE A FEW WAYS TO GET BASE ETH:</p>
        </div>
        <div className="mt-8 p-8 rounded-xl text-slate-700 bg-red-300">
          <p>
            1.WITHDRAW ETH TO YOUR BASE WALLET FROM COINBASE, BINANCE, BYIT OR
            OKX, MAKE SURE TO SELECT BASE AS THE WITHDRAWAL NETWORK!
          </p>
          <p className="pt-4">
            2.BRIDGE ETH TO BASE FROM ANOTHER CHAIN USING THESE A BRIDGE WE
            RECOMMEND CHANGENOW.
          </p>
        </div>{" "}
        <div className="mt-8 p-8 rounded-xl text-slate-700 bg-red-300">
          <h1>3/BRIDGE TO BASE</h1>
          <p>BUY $HELLV</p>
          <p>
            ENSURE YOUR WALLETS NETWORK IS SET TO BASE AND USE A DEX THAT
            SUPPORTS BASE TO EXCHANGE YOUR ETH FOR $HELLV.
          </p>
          <p className="pt-4">
            {" "}
            ENTER THE AMOUNT OF ETH YOU WOULD LIKE TO EXCHANGE AND IN THE "TO"
            FIELD ENTER THE $HELL CONTRACT ADDRESS
          </p>
        </div>
      </div>
    </div>
  );
}
