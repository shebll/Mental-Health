"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Input from "./_components/Input";
import Password from "./_components/Passoword";

function SignUp() {
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);

  const submitHandle = async (e: FormData) => {
    // e.preventDefault();
    // const bodyData = {
    //   firstName: e.get("FirstName"),
    //   lastName: e.get("LastName"),
    //   email: e.get("Email"),
    //   password: e.get("Password"),
    //   birthDate: e.get("BirthDate"),
    //   gender: e.get("Gender"),
    // };
    // if (passwordsMatch) {
    //   const res = await fetch(
    //     "http://mentalmediator.somee.com/api/auth/register",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(bodyData),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   console.log(res);
    // }
  };
  return (
    <div className="container mx-auto px-4 min-h-[90vh] flex justify-between items-center gap-40 md:pt-[100px]">
      <div className="hidden lg:flex flex-col gap-10 items-start flex-1">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#4CAF50] text-2xl md:text-5xl font-bold ">
            Welcome to our Mentality Wellness Community
          </h1>
          <p className="text-gray-600">
            We&apos; re delighted to see you here. Sign in to unlock a world of
            support, encouragement, and resources designed to uplift your mental
            well-being.
          </p>
        </div>
        <div className="">
          <Image
            src={"/landingImages/login.png"}
            width={350}
            height={350}
            priority
            alt="login"
            className="w-auto h-auto"
          />
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-lg px-6 py-6 md:px-12 md:py-10 flex-1 flex flex-col gap-10">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">
            Welcome to <span className="text-[#4CAF50]">Mentality</span>
          </p>
          <p>
            Have an Account ?{" "}
            <Link href={"/login"} className="text-[#4CAF50]">
              Sign in
            </Link>
          </p>
        </div>
        <h1 className="text-5xl font-bold">Sign Up</h1>
        {/* <button className="w-full text-center py-4 bg-[#E9F1FF] rounded-2xl text-[#4285F4] font-medium">
          Sign in with Google
        </button> */}
        <form action={submitHandle} className="flex flex-col gap-6">
          <div className="flex flex-row gap-8 ">
            <Input name="FirstName" inputType="text" />
            <Input name="LastName" inputType="text" />
          </div>
          <div className="flex flex-row gap-8 ">
            <Input name="Gender" inputType="radio" />
            <Input name="BirthDate" inputType="date" />
          </div>
          <Input name="Email" inputType="email" />
          <Password
            passwordsMatch={passwordsMatch}
            setPasswordsMatch={setPasswordsMatch}
          />
          <button
            type="submit"
            className="bg-[#4CAF50] text-white font-medium text-lg w-full text-center py-4 rounded-2xl"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
