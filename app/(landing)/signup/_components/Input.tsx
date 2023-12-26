"use client";
import React from "react";
import Tooltip from "./ToolTip";

type props = {
  name: string;
  inputType: string;
};
function Input({ name, inputType }: props) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      {name == "Gender" ? (
        <>
          <h3 className="text-xl font-medium ml-2 flex items-center justify-between">
            <div className="">
              Enter your {name}
              <span className="text-red-600"> *</span>
            </div>
            <Tooltip text="Should Select your Gender" />
          </h3>
          <div className="flex justify-between">
            <div className=" flex gap-4">
              <label htmlFor="male" className="text-lg ml-2 text-gray-500">
                Male
              </label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
              />
              <label htmlFor="female" className="text-lg ml-2 text-gray-500">
                Female
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                required
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <label
            htmlFor={name}
            className="text-xl font-medium ml-2 flex  items-center justify-between"
          >
            <div className="">
              Enter your {name}
              <span className="text-red-600"> *</span>
            </div>
            <Tooltip text="ss das asdad" />
          </label>
          <input
            type={inputType}
            name={name}
            id={name}
            required
            placeholder={name}
            className="border px-6 py-2 outline-none rounded-2xl text-lg w-[100%]"
          />
        </>
      )}
    </div>
  );
}

export default Input;
