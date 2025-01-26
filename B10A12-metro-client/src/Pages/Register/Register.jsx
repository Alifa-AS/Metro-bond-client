import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TextInput, Card } from "flowbite-react";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photoURL = formData.get("photoURL");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ name, photoURL, email, password });
  };
  return (
    <div>
      <ToastContainer />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 p-5">
          <div className="text-center lg:text-left w-96">
            {/* <Lottie animationData={registerLottie} /> */}
          </div>
          <Card className="w-full max-w-sm shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-5">
              Register now!
            </h1>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700">Name</label>
                <TextInput
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Email</label>
                <TextInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Photo URL</label>
                <TextInput
                  type="url"
                  placeholder="Photo URL"
                  name="photo"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Password</label>
                <TextInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full mt-4 bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-pink-400"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green-500 font-bold underline"
                >
                  Login
                </Link>{" "}
                Now!
              </p>
            </div>
            <div className="mt-4">{/* <SocialLogin /> */}</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
