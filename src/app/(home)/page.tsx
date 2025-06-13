import Hero from "@/components/home/section/hero";
import Messages from "@/components/home/section/messages";
import { ConfettiSideCannons } from "@/components/magicui/confettisidecannons";
import Navbar from "@/components/layout/navbar";
// import RevealMessage from "@/components/home/section/reveal-message";

export default function Home() {
  return (
    <div className=" w-full my-gradient text-white">
      <Navbar />
      <Hero />
      <Messages />
      <ConfettiSideCannons />
    </div>
  );
}
