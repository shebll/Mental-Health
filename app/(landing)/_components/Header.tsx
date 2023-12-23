import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="text-gray-700">
      <section className="container mx-auto p-4 flex justify-between items-center overflow-hidden">
        <Logo />
        <ul className="hidden md:flex gap-4 items-center justify-center ">
          <Link href={"#About"}>
            <li className="hover:text-gray-700 transition-all md:text-xl">
              About
            </li>
          </Link>
          <Link href={"#Services"}>
            <li className="hover:text-gray-700 transition-all md:text-xl">
              Services
            </li>
          </Link>
          <Link href={"#Doctors"}>
            <li className="hover:text-gray-700 transition-all md:text-xl">
              Doctors
            </li>
          </Link>
          <Link href={"#Articles"}>
            <li className="hover:text-gray-700 transition-all md:text-xl">
              Articles
            </li>
          </Link>
        </ul>
        <div className="hidden md:flex gap-4">
          <Link href={"/login"}>
            <button className="border-2 border-[#e4ffe5] text-black font-medium px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105 hover:bg-[#b8ddb9]">
              Login
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="bg-[#1d491f] text-white font-medium px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105 hover:bg-[#143116]">
              Get Start
            </button>
          </Link>
        </div>
        {/* <NavBar /> */}
      </section>
    </header>
  );
}

export default Header;
