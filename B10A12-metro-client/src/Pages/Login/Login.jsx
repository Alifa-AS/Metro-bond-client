import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Card, Label, TextInput, Button } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lottie/login.json";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);
  const captchaRef = useRef(null); 
  const navigate = useNavigate();
  const location = useLocation();

  const form = location.state?.form?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Log in", user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      alert("Captcha Matched! You can now login.");
    } else {
      setDisabled(true);
      alert("Captcha did not match! Please try again.");
      // captchaRef.current.value = "";
      if (captchaRef.current) {
        captchaRef.current.value = "";
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Metro || Login</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* Lottie Animation */}
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={loginLottie} />
          </div>

          {/* Login Form */}
          <Card className="w-full max-w-md shadow-2xl">
            <h1 className="text-4xl font-bold text-center mt-4 text-gray-800">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="p-6">
              <div className="mb-4">
                <Label htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" value="Password" />
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  required
                />
                <div className="mt-1">
                  <Link
                    to="#"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              {/* captcha */}
              <div className="mb-4">
                <Label htmlFor="captcha" />
                <LoadCanvasTemplate />
                <TextInput
                  ref={captchaRef}
                  onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder="type the captcha above"
                  name="captcha"
                  required
                />
                <Button size="xs" color="pink" className="my-2 w-full">
                  Validate
                </Button>
              </div>
              <div className="mt-6">
                <button
                  disabled={disabled}
                  type="submit"
                  className={`w-full mt-4 py-2 px-4 rounded-lg transition-all ${
                    disabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-yellow-400 text-white hover:bg-pink-400"
                  }`}
                >
                  Login
                </button>
              </div>
              <div className="mt-4 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-red-600 font-bold underline"
                  >
                    Register
                  </Link>{" "}
                  Now!
                </p>
              </div>
            </form>
            <div className="my-2 mx-6">
              <SocialLogin />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
