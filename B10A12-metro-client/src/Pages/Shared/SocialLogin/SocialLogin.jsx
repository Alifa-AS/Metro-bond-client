import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Button onClick={handleGoogleSignIn} outline gradientDuoTone="pinkToOrange">
       <div className="flex justify-center items-center w-8"><FcGoogle /></div>
        Google
      </Button>
    </div>
  );
};

export default SocialLogin;
