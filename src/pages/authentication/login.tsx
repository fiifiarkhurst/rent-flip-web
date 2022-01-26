/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { useHistory } from "react-router-dom";
import { DASHBOARD } from "../../navigation/constants";

function Login() {
  const { push } = useHistory();

  function onLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    push(DASHBOARD);
  }
  return (
    <>
      <section>
        <div className="flex min-h-screen overflow-hidden">
          <div
            className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24
          "
          >
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <a href="/" className="text-green-600 font-bold text-lg">
                  RentFlip
                </a>
                <sup className={"font-bold text-green-600 text-xs"}>TM</sup>

                <h2 className="mt-6 text-3xl font-extrabold text-gray-600">
                  {" "}
                  Sign in to your account.{" "}
                </h2>
              </div>
              <div className="mt-8">
                <div className="mt-6">
                  <form className="space-y-6" onSubmit={onLogin}>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required={true}
                          placeholder="Your Email"
                          className="block w-full px-5 py-3 text-base  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600 bg-gray-50 focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-600">
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required={true}
                          placeholder="Your Password"
                          className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          text-gray-600
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          placeholder="Your password"
                          className="
                          w-4
                          h-4
                          text-blue-600
                          border-gray-200
                          rounded
                          focus:ring-blue-500
                        "
                        />
                        <label className="block ml-2 text-sm text-gray-600">
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          {" "}
                          Forgot your password?{" "}
                        </a>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="
                        flex
                        items-center
                        justify-center
                        w-full
                        px-10
                        py-4
                        text-base
                        font-medium
                        text-center text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        bg-green-600
                        rounded-xl
                        hover:bg-green-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-green-500
                      "
                      >
                        {" "}
                        Sign in{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
