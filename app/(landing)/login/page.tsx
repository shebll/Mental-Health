import Image from "next/image";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="container mx-auto px-4 h-[90vh] flex justify-between items-center gap-40">
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
            height={300}
            alt="login"
          />
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-lg px-6 py-6 md:px-12 md:py-10 flex-1 flex flex-col gap-10">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">
            Welcome to <span className="text-[#4CAF50]">Mentality</span>
          </p>
          <p>
            No Account ?{" "}
            <Link href={"/signup"} className="text-[#4CAF50]">
              Sign up
            </Link>
          </p>
        </div>
        <h1 className="text-5xl font-bold">Sign in</h1>
        <button className="w-full text-center py-4 bg-[#E9F1FF] rounded-2xl text-[#4285F4] font-medium">
          Sign in with Google
        </button>
        <form action="" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 ">
            <label htmlFor="email" className="text-xl font-medium">
              Enter your username or email address
            </label>
            <input
              type="text"
              id="email"
              required
              placeholder="Username or email address"
              className="border px-6 py-4 outline-none rounded-2xl text-lg w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <label htmlFor="password" className="text-xl font-medium">
              Enter your Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Password"
              className="border px-6 py-4 outline-none rounded-2xl text-lg w-[100%]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#4CAF50] text-white font-medium text-lg w-full text-center py-4 rounded-2xl"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
