import Image from "next/image";
import Hero from "./component/hero";
import Tokenomics from "./component/tokenomics";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="bg-[#F1E0CE] px-12">
      <Hero />
      <Tokenomics />

      <Footer />
    </div>
  );
}
