"use client";
import Image from "next/image";
import React, { useState } from "react";
import ToolTip from "./ToolTip";
type props = {
  name: string;
  validation: boolean;
  setValidation: React.Dispatch<React.SetStateAction<boolean>>;
};
function InputName({ name, validation, setValidation }: props) {
  const [nameState, setNameState] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
    const nameRegex = /^[a-z]/;
    const isValidName = nameRegex.test(nameState);
    if (isValidName) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label
        htmlFor={name}
        className="text-xl font-medium ml-2 flex  items-center justify-between"
      >
        <div className="">
          Enter your {name}
          <span className="text-red-600"> *</span>
        </div>
        {validation ? (
          <Image
            src={"/landingImages/correct.png"}
            width={16}
            height={16}
            alt="info png"
          />
        ) : (
          <Image
            src={"/landingImages/wrong.png"}
            width={16}
            height={16}
            alt="info png"
          />
        )}

        <ToolTip text="ss das asdad" />
      </label>
      <input
        type={"text"}
        name={name}
        id={name}
        required
        placeholder={name}
        value={nameState}
        onChange={onChangeName}
        className="border px-6 py-2 outline-none rounded-2xl text-lg w-[100%]"
      />
    </div>
  );
}

export default InputName;
