import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import facebook from "../../assets/icons/social/facebook.png";
import linkedin from "../../assets/icons/social/linkedin.png";
import google from "../../assets/icons/social/google.png";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInWithGoogle, userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("jsonWebToken", data.token);
            navigate(from, { replace: true });
            toast.success("Successfully login");
            form.reset();
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // google Sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
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
          <h1 className="text-5xl text-center font-bold pt-12">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
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
                placeholder="Your password"
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
                className="btn bg-[#ff3811] border-none text-white capitalize"
                type="submit"
                value="Login"
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
              Are your new?{" "}
              <Link
                className="text-[#ff3811] font-semibold hover:underline"
                to="/signup"
              >
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
