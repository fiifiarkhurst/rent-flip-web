/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { useHistory } from "react-router-dom";
import { siteTitle } from "../../constants/appName";
import { DASHBOARD } from "../../navigation/constants";
import { SecondaryLoader } from "../../shared/loader";
import Logo from "../../assets/logo.png";

function Login() {
  const { push } = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    document.title = "Login | " + siteTitle;
  }, []);

  // simulate loader
  function simulateLoader(timeout: number) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }

  function onLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    simulateLoader(4000).then(() => {
      setIsLoading(false);
      push(DASHBOARD);
    });
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
                <img src={Logo} className="h-16 w-16" alt="" />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-600">
                  {" "}
                  Sign in to your account.{" "}
                </h2>
              </div>
              <div className="mt-8">
                <div className="mt-6">
                  <form className="space-y-6" onSubmit={onLogin}>
                    <div>
                      <label className="block text-xs font-medium text-gray-600">
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
                          className="block w-full px-5 py-3 text-base  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-gray-600">
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
                          className="block focus:ring-offset-gray-300  focus:ring-offset-2 focus:ring-white   focus:ring-2  w-full focus:border-transparent  focus:outline-none   text-gray-600  rounded-lg  border border-transparent transform ease-in-out  px-5  py-3 text-base placeholder-gray-300 transition    duration-500 "
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
                          className="  w-4   h-4  text-green-600   border-gray-200 rounded   focus:ring-green-500"
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
                        className="flex ease-in-out focus:ring-green-500 focus:ring-offset-0 focus:ring-0 focus:outline-none hover:bg-green-500 rounded-xl bg-green-600 transform duration-500 items-center  justify-center transition text-center text-white   font-medium   text-base   py-4   w-full     px-10"
                      >
                        {isLoading ? (
                          <>
                            <SecondaryLoader
                              size="w-6 h-6"
                              color="border-white"
                              border="border-2 "
                            />
                          </>
                        ) : (
                          <>Sign in </>
                        )}{" "}
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
