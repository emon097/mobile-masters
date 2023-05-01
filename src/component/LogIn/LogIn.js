import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const LogIn = () => {
  const { loginUser, googleRegister } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handlegoogleSignIn = () => {
    googleRegister(provider).then((res) => {
      const user = res.user;
      if (user.uid) {
        navigate("/");
      }
    });
  };
  const onSubmit = (data) => {
    loginUser(data.email, data.password).then((res) => {
      const user = res.user;
      if (user.uid) {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-4xl text-center font-bold">Mobile Masters</h2>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              If You Have Already an Account Please LogIn Now
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or <p href="#" className="font-medium  text-emerald-500"></p>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  {...register("email", { required: true })}
                  type="email"
                  autoComplete="email"
                  required
                  className="p-3 rounded-md relative block w-full rounded-t-md border-0 py-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-3 rounded-md relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-emerald-600 py-2 px-3 text-sm font-semibold text-white hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                onClick={handlegoogleSignIn}
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-slate-200 py-2 px-3 text-sm font-semibold hover:text-white hover:bg-slate-300 focus-visible:outline border-spacing-2 focus-visible:outline-2 focus-visible:outline-offset-2 text-black"
              >
                <FcGoogle className="text-2xl"></FcGoogle>
                <p className="mx-2">Google</p>{" "}
              </button>
            </div>
            <p className="text-center">
              OR You Can{" "}
              <Link to="/signup" className="text-emerald-300 font-semibold">
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
