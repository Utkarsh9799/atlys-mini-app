import Form from "../shared/Form";

import LoginAsset from "./assets/login-logo.png";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src={LoginAsset} alt="Login" width={40} className="mb-12" />
      <div className="w-1/3">
        <Form isLoginFlow />
      </div>
    </div>
  );
};

export default Login;
