import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-buttom/CustomButton";

const SignIn = () => {
  const [cred, setCred] = useState({ email: "", password: "" });
  //   const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setCred({ email: "", password: "" });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setCred({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={cred.email}
          label="Email"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={cred.password}
          label="Password"
          required
          onChange={handleChange}
        />
        <CustomButton type="submit">Sign In </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
