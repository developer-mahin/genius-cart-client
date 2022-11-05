import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import facebook from "../../assets/icons/social/facebook.png";
import linkedin from "../../assets/icons/social/linkedin.png";
import google from "../../assets/icons/social/google.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateName, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //update name
        updateName(name)
          .then(() => {})
          .catch((error) => {
            toast.error(error.message);
          });
        toast.success("Successfully registered!");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  // google Sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="hero pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full">
          <img src={loginImg} className="w-11/12" alt="" />
        </div>
        <div className="card w-full shadow-2xl border">
          <h1 className="text-5xl text-center font-bold pt-12">Sign Up</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#ff3811] border-none capitalize text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <div className="px-8">
            <p className="text-center capitalize"> Or sing in with </p>
            <div className="flex justify-center items-center gap-5 mt-5">
              <button className="p-2 border rounded-full bg-gray-200">
                <img className="w-6" src={facebook} alt="" />
              </button>
              <button className="p-2 border rounded-full bg-gray-200">
                <img className="w-6" src={linkedin} alt="" />
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="p-2 border rounded-full bg-gray-200"
              >
                <img className="w-6" src={google} alt="" />
              </button>
            </div>
          </div>
          <div className="px-8 text-center mt-4 pb-16">
            <p>
              Already have an account?{" "}
              <Link
                className="text-[#ff3811] font-semibold hover:underline"
                to="/login"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
