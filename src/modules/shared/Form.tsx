import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Cross, EyeIcon } from "./assets/icons";

import Input from "../../components/Input";
import Button from "../../components/Button";

interface FormProps {
  isLoginFlow?: boolean;
  authPage?: boolean;
  closeForm?: () => void;
}

const Form: React.FC<FormProps> = (props) => {
  const { isLoginFlow = false, authPage = false, closeForm } = props;
  const [loginFlow, setLoginFlow] = useState(isLoginFlow);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authPage) {
      navigate("/home");
    } else {
      closeForm?.();
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-full border-gradient rounded-lg text-center">
      {closeForm ? (
        <button
          className="absolute top-4 right-4 h-8 w-8 rounded-full bg-[#131319] flex justify-center items-center"
          onClick={closeForm}
        >
          <Cross />
        </button>
      ) : null}
      <div className="bg-[#27292D] px-6 py-10 rounded-lg">
        <h6 className="text-subtitle uppercase text-sm tracking-wider">
          {loginFlow ? "Welcome back" : "Sign up"}
        </h6>
        <h5 className="text-white text-lg mt-2 mb-10">
          {loginFlow
            ? "Log into your account"
            : "Create an account to continue"}
        </h5>
        <form onSubmit={handleSubmit}>
          {loginFlow ? (
            <Input
              label="Email or Username"
              placeholder="Enter your email or username"
            />
          ) : (
            <React.Fragment>
              <Input label="Email" placeholder="Enter your email" />
              <Input
                className="mt-4"
                label="Username"
                placeholder="Choose a preferred username"
              />
            </React.Fragment>
          )}
          <div className="mt-4 relative">
            <Input
              label="Password"
              placeholder={
                loginFlow ? "Enter your password" : "Choose a strong password"
              }
              type={showPassword ? "text" : "password"}
              action={
                loginFlow
                  ? {
                      actionText: "Forgot password?",
                      callback: () => {
                        // Handle pswd reset here
                      },
                    }
                  : undefined
              }
            />
            <div
              className="absolute top-10 right-3 hover:cursor-pointer"
              onClick={handlePasswordToggle}
            >
              <EyeIcon />
            </div>
          </div>
          <Button fullWidth type="submit" className="mt-5">
            {loginFlow ? "Login Now" : "Continue"}
          </Button>
        </form>
        <div className="text-subtitle mt-3 text-start text-sm">
          {loginFlow ? "Not registered yet? " : "Already have an account? "}
          <button
            className="text-title"
            onClick={() => setLoginFlow((prev) => !prev)}
          >
            {loginFlow ? "Register" : "Login"} &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
