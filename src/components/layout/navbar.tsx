import React from "react";
import { Marquee } from "../magicui/marquee";

export default function navbar() {
  return (
    <div className="flex bg-white text-black">
      <div>
        <Marquee>
          For I know the plans I have for you, declares the Lord, plans to
          prosper you and not to harm you, plans to give you hope and a future.
          – Jeremiah 29:11 (NIV)
        </Marquee>
      </div>
    </div>
  );
}
