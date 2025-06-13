import Hero from "@/components/home/section/hero";
import Messages from "@/components/home/section/messages";
import { ConfettiSideCannons } from "@/components/magicui/confettisidecannons";
import Navbar from "@/components/layout/navbar";
// import RevealMessage from "@/components/home/section/reveal-message";

export default function Home() {
  return (
    <div className=" w-full bg-gradient-to-t from-[#1e3c72] via-[#1e3c72] to-[#2a5298] text-white">
      <Navbar />
      <Hero />
      <Messages />
      {/* <RevealMessage /> */}
      <ConfettiSideCannons />
    </div>
  );
}
