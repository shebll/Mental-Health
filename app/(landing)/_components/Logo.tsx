import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
        <span className="text-white">M</span>entality
      </h1>
    </Link>
  );
}

export default Logo;
