import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log("Eroor", err);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-neutral w-full ">Google</button>
    </div>
  );
};

export default SocialLogin;
