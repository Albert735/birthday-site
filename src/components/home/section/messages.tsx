import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface MessagesProps {
  name: string;
  message: string;
  avatar: string;
  favoritepicture: string;
}

const messages: MessagesProps[] = [
  {
    name: "Miss Emelia Tagoe (Mama)",
    message: `Happy Birthday, My Gift from God ❤️
I thank God every day for blessing me with a husband like you.
Your faith, strength, and heart inspire me endlessly.
May God continue to guide your steps, grant you good health, and fulfill the desires of your heart.
You are deeply loved by me and by Him.
Have a peaceful, joyful, and grace-filled birthday. 🙏  `,
    avatar: "/assets/mama-1.jpg",
    favoritepicture: "/assets/mama-fav.png",
  },
  {
    name: "Mr. Francis Allotey",
    message: `🎉 Happy Birthday, Mr. Patrick Collins Tagoe! 🎉
Wishing you a day filled with joy, laughter, and all the things that make your heart smile. 

May this year bring you new adventures, meaningful moments, and endless blessings. Keep shining, keep inspiring — the world is better with you in it.

Here’s to another incredible year ahead! 🌟`,
    avatar: "/assets/mr-allotey.jpeg",
    favoritepicture: "/assets/mr-allotey-fav.jpeg",
  },
  {
    name: "Mr & Ms Tagoe Jnr.",
    message: `Happy Birthday, Daddy!
Wishing you a day filled with love, laughter, and all the happiness your heart can hold. Your wisdom, strength, and kindness have been such a blessing to our family. I’m truly grateful for your support and the wonderful example you set. May this year bring you good health, peace, and countless moments of joy.

Have a fantastic celebration—you deserve it! 🎉🎂💙
`,
    avatar: "/assets/tagoe-jnr.jpeg",
    favoritepicture: "/assets/tagoe-jnr-fav.jpeg",
  },
  {
    name: "Clement Tetteh",
    message: `A day worth celebrating a day full of joy and gladness. A day befitting a king and a champion. Happy birthday daddy. More grace more blessings is all we ask of God this wonderful day. 
As the blessings of God came down to the family of Joseph through Joseph so shall we all your family experience God blessings through you this day. 
We love you daddy and we are proud to call you our daddy. Happy happy happy birthday 🎉🎁🎊🎂. Enjoy your day SIR.
`,
    avatar: "/assets/Clement.JPG",
    favoritepicture: "/assets/clement-fav.jpg",
  },
  {
    name: "Nii Tetteh Tagoe (Tyzo)",
    message: `Happy Bathday Daddy 🎉
Thank you for the life you've given me, For showing me strength and how to be free.
You've taught me my worth and to stand tall, To work hard, be patient, and give my all.
And showed me where respect belongs.The way you love Mom is what I'll seek too. A future built on love, because of you.
`,
    avatar: "/assets/tyzo.JPG",
    favoritepicture: "/assets/tyzo-fav.jpeg",
  },
  {
    name: "Nii Teiko Tagoe",
    message: `Happy Birthday, Daddy!🎉
Thank you for always being my rock, my guide, and my biggest supporter. Your strength, wisdom, and love have shaped who I am today. I’m so grateful for everything you’ve done and continue to do. Wishing you a day filled with joy, laughter, and all the things that make you happiest. You deserve the world—today and always.

Love you so much old man 😂🎉
`,
    avatar: "/assets/tk.JPG",
    favoritepicture: "/assets/tk-fav.jpeg",
  },
  {
    name: "Naa Ameley Tagoe",
    message: `Happy Birthday, Daddy!🎉
Thank you for always being my rock, my guide, and my biggest supporter. Your strength, wisdom, and love have shaped who I am today. I’m so grateful for everything you’ve done and continue to do. Wishing you a day filled with joy, laughter, and all the things that make you happiest. You deserve the world—today and always.

Love you so much old man 😂🎉
`,
    avatar: "/assets/ameley.jpeg",
    favoritepicture: "/assets/tk-fav.jpeg",
  },
  {
    name: "Awuley",
    message: `🎉 Happy Birthday, Mr. Patrick Collins Tagoe! 🎉
Wishing you a day filled with joy, laughter, and all the things that make your heart smile. 
May this year bring you new adventures, meaningful moments, and endless blessings. 
Keep shining, keep inspiring — the world is better with you in it.
Here’s to another incredible year ahead! 🌟`,
    avatar: "/assets/awuley.jpeg",
    favoritepicture: "/assets/connie-fav.jpeg",
  },

  {
    name: "Comfort Offor",
    message: `🎉 Happy Birthday, Mr. Patrick Collins Tagoe! 🎉
Wishing you a day filled with joy, laughter, and all the things that make your heart smile. 
May this year bring you new adventures, meaningful moments, and endless blessings. 
Keep shining, keep inspiring — the world is better with you in it.
Here’s to another incredible year ahead! 🌟`,
    avatar: "/assets/connie-profile.jpeg",
    favoritepicture: "/assets/connie-fav.jpeg",
  },
];

export default function Messages() {
  return (
    <div className="min-h-screen w-full max-w-screen-xl mx-auto p-6 flex justify-center text-white ">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        <div className="text-center py-4 ">
          <h1 className="pacifico   text-7xl font-bold mb-10 ">
            Family Wishes
          </h1>
          <p className=" text-lg">Heartfelt messages from your loved ones</p>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.name}
            className=" p-8  flex flex-col gap-[5rem] w-full border rounded-2xl border-white/20 hover:rotate-1 shadow-md"
          >
            <div className="flex flex-col gap-5">
              <h1 className="pacifico   text-3xl font-bold ">
                My Message to You:
              </h1>
              <p className="whitespace-pre-line  leading-relaxed text-lg">
                {msg.message}
              </p>

              <div className="flex items-center gap-4 mt-2">
                <div className="relative w-20 h-20">
                  <Image
                    src={msg.avatar}
                    alt={`${msg.name}'s avatar`}
                    width={80}
                    height={80}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>

                <h2 className="text-xl font-semibold ">{msg.name}</h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="flex items-center gap-3  text-lg font-medium">
                <p>My Favorite Picture</p>
                <FaArrowRight size={20} />
              </span>

              <Image
                src={msg.favoritepicture}
                alt="Favorite Picture"
                width={480}
                height={480}
                className="rounded-xl object-cover w-full max-w-[30rem] h-[20rem] sm:h-[25rem] md:h-[30rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
