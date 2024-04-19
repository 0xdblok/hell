import Image from "next/image";
import Hero from "./component/hero";
import Tokenomics from "./component/tokenomics";
import Footer from "./component/footer";
import Hell from "./component/hell";

export default function Home() {
  return (
    <div className="bg-[#F1E0CE] px-12">
      <Hero />
      <Tokenomics />
      <h1 className="text-center pt-16 font-semibold  font-mono ">
        CA : 0xF2EAa9Cf7b4Ca7B7dC8ADc6A899a6261C907FcC6
      </h1>
      <Hell />

      <Footer />
    </div>
  );
}
