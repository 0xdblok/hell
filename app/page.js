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
      <h1 className="text-center pt-16 font-semibold  font-mono ">CA : </h1>
      <Hell />

      <Footer />
    </div>
  );
}
