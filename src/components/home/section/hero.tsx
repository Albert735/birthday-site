import React from "react";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

interface Photo {
  photos: string;
  alt?: string;
}

const birthdayImages: Photo[] = [
  { photos: "/assets/maquee1.jpeg", alt: "Birthday moment 1" },
  { photos: "/assets/daddy-1.jpeg", alt: "Birthday moment 2" },
  { photos: "/assets/daddy-2.jpeg", alt: "Birthday moment 3" },
  { photos: "/assets/tagoe-jnr-fav.jpeg", alt: "Birthday moment 4" },
  { photos: "/assets/daddy-3.jpeg", alt: "Birthday moment 5" },
];

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center  w-full px-4 py-20 h-full">
      {/* Main Birthday Content */}
      <div className="flex flex-col items-center text-center gap-12 mb-16">
        <SparklesText sparklesCount={20} className="text-center mb-10">
          <AnimatedGradientText
            speed={2}
            colorFrom="#fbc2eb" // soft pink
            colorTo="#a6c1ee" // light periwinkle
            className="pacifico text-4xl md:text-[11rem] font-bold tracking-tight"
          >
            Happy Birthday!
          </AnimatedGradientText>
        </SparklesText>

        <p className="pacifico text-3xl sm:text-4xl font-bold font-sans ">
          Mr. Patrick Collins Tagoe (P.C Tagoe)
        </p>
        <p className="pacifico text-2xl md:text-8xl sm:text-3xl font-medium font-sans ">
          @64
        </p>
      </div>

      {/* Image Marquee */}
      <div className="w-full mb-16">
        <Marquee pauseOnHover className="py-4">
          {birthdayImages.map((image, index) => (
            <div
              key={index}
              className="mx-4 relative h-100 w-100 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.photos}
                alt={image.alt || `Birthday image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
