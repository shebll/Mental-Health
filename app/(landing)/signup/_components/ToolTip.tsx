"use client";
import Image from "next/image";
import React, { useState } from "react";

type props = {
  text: string;
};
function ToolTip({ text }: props) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="toolTip w-fit relative">
      <Image
        src={"/landingImages/info.png"}
        width={20}
        height={20}
        alt="info png"
        className="cursor-pointer"
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      />
      <span
        className={`tooTip p-2 bg-gray-200 rounded-md shadow-sm bottom-[calc(100%+10px)] left-0 absolute transition-all text-center max-w-fit ${
          toggle
            ? " opacity-100 visible translate-y-0"
            : " opacity-0 invisible -translate-y-4"
        } `}
      >
        {text}
      </span>
    </div>
  );
}

export default ToolTip;
