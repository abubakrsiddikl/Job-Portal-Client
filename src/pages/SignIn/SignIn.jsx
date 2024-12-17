import React, { useContext } from "react";
import RegisterAnimation from "../../assets/Lottie/Animation - 1734241042060.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || "/";
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
    // create usre
    signInUser(email, password)
      .then((result) => {
        console.log("sign in user",result.user);
        navigate(from)
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={RegisterAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="m-4 mt-1">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
