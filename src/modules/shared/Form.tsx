import React from "react";
import Input from "../../components/Input";

const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-1/3 border-gradient rounded-lg text-center">
      <div className="bg-[#27292D] px-6 py-10 rounded-lg">
        <h6 className="text-subtitle uppercase text-sm">welcome back</h6>
        <h1 className="text-white text-lg mt-2 mb-10">Log into your account</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email or Username"
            placeholder="Enter your email or username"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            className="mt-4"
            type="password"
            action={{
                actionText: 'Forgot password?',
                callback: () => {}
            }}
          />
          <button
            type="submit"
            className="mt-5 w-full bg-[#4A96FF] py-2 text-white rounded"
          >
            Login Now
          </button>
        </form>
        <div className="text-subtitle mt-3 text-start">
          Not registered yet?{" "}
          <span>
            <button className="text-white">Register &rarr;</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
