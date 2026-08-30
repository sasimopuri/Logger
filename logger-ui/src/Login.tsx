import { useState } from "react";
import type { FormProps, SignUpObject } from "./types";
import React from "react";

const LoginForm = ({ setIsLogin }: FormProps): React.JSX.Element => {
    const [loginDetails, setLoginDetails] = useState<SignUpObject>()
    function setLoginForm(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email') as string
        const password = form.get('password') as string
        setLoginDetails({email,password})
        console.log(email,password)
    }
  return (
    <form onSubmit={setLoginForm}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" name="email" required/>

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" name="password" required/>
        <button className="btn btn-neutral mt-4">Login</button>
        <button
          className="btn btn-link"
          onClick={() => {
            setIsLogin(false);
          }}
          type="button"
        >
          New here? Sign Up Now!
        </button>
      </fieldset>
    </form>
  );
};
const SignUpForm = ({ setIsLogin }: FormProps): React.JSX.Element => {
  const [signUpDetails, setSignUpDetails] = useState<SignUpObject>({
    parentName: "",
    password: "",
    email: "",
  });
  function setSignUpForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const parentName = formData.get("parentName") as string
    const password = formData.get("password") as string
    const email = formData.get("email") as string
    setSignUpDetails({parentName, password, email})
    console.log(parentName, password, email);
  }
  return (
    <>
      <form onSubmit={setSignUpForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Sign Up</legend>

          <label className="label">Parent Name</label>
          <input
            type="input"
            name="parentName"
            className="input"
            placeholder="Parent Name"
            required
          />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="email" required />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <button
            className="btn btn-neutral mt-4"
            type="submit"
          >
            Sign Up
          </button>
          <button
            className="btn btn-link"
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Already registered? Login Now!
          </button>
        </fieldset>
      </form>
    </>
  );
};

const Login = (): React.JSX.Element => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <>      
      <div className="flex justify-center mt-[60%] lg:mt-[10%]">
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignUpForm setIsLogin={setIsLogin} />
        )}
      </div>
    </>
  );
};

export default Login;
