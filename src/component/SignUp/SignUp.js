import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { createUsersEmail, updateUser, googleRegister } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignUp = () => {
    googleRegister(provider).then((res) => {
      const user = res.user;
      console.log(user);
    });
  };

  const onSubmit = (data) => {
    const userInfo = {
      displayName: data.fullName,
    };
    createUsersEmail(data.email, data.password).then((res) => {
      const user = res.user;
      console.log(user);

      updateUser(userInfo).then((res) => {});
    });
  };

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-4xl text-center font-bold">Mobile Masters</h2>

            <p
              href="#"
              className="text-center mt-5 text-xl font-medium  text-emerald-500"
            >
              If You New in This Platform You Sign Up
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
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  {...register("fullName", { required: true })}
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="fullName"
                  required
                  className="p-3 rounded-md relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  placeholder="Type Your Full Name"
                />
              </div>
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
                  className="p-3 rounded-md relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
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
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <button
              onClick={handleGoogleSignUp}
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-slate-200 py-2 px-3 text-sm font-semibold hover:text-white hover:bg-slate-300 focus-visible:outline border-spacing-2 focus-visible:outline-2 focus-visible:outline-offset-2 text-black"
            >
              <FcGoogle className="text-2xl"></FcGoogle>
              <p className="mx-2">Google</p>{" "}
            </button>
          </div>
          <p className="text-center">
            OR You Can{" "}
            <Link to="/login" className="text-emerald-300 font-semibold">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
