import { useState } from "react";

type props = {
  setPasswordsMatch: React.Dispatch<React.SetStateAction<boolean>>;
  passwordsMatch: boolean;
};
const Password = ({ passwordsMatch, setPasswordsMatch }: props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-xl font-medium ml-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="Password"
          value={password}
          placeholder="password"
          onChange={handlePasswordChange}
          required
          className="border px-6 py-2 outline-none rounded-2xl text-lg w-[100%]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="text-xl font-medium ml-2">
          Confirm Password
          <span
            className={`text-red-600  ${
              passwordsMatch ? "opacity-0" : "opacity-100"
            }`}
          >
            X
          </span>
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          className="border px-6 py-2 outline-none rounded-2xl text-lg w-[100%]"
        />
      </div>
    </div>
  );
};

export default Password;
