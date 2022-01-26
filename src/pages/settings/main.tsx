function MainComponent() {
  return (
    <>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="pb-5 border-b border-black flex flex-row items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-neutral-600">
              {" "}
              Settings & Security
            </h3>
          </div>
          <form>
            <div className="mt-8">
              <div className=" py-6">
                <div>
                  <h2
                    id="payment-details-heading"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Your details
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Update your information. Please note that updating your
                    information could take something to take effect.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-6">
                  <div className="col-span-4 sm:col-span-2 space-y-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-600"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full px-5 py-3 text-base  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600 bg-gray-50 focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2 space-y-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block w-full px-5 py-3 text-base  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600 bg-gray-50 focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2 space-y-2">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-600 space-y-2"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      className="block w-full px-5 py-3 text-base  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600 bg-gray-50 focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2 space-y-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-600 space-y-2"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="user-name"
                      id="user-name"
                      className="block w-full px-5 py-3 text-base  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600 bg-gray-50 focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2 space-y-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password-code"
                      id="password-code"
                      className="focus:ring-offset-gray-300 focus:ring-offset-2 focus:ring-2 focus:border-transparent focus:outline-none bg-gray-50 text-gray-600 rounded-lg border border-transparent transform  ease-in-out duration-500 block w-full px-5 py-3 text-base placeholder-gray-300  transition"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2 space-y-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm-code"
                      id="confirm-code"
                      className="focus:ring-offset-gray-300 focus:ring-offset-2 focus:ring-2 focus:border-transparent focus:outline-none bg-gray-50 text-gray-600 rounded-lg border border-transparent transform  ease-in-out duration-500 block w-full px-5 py-3 text-base placeholder-gray-300  transition"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
                >
                  Update Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default MainComponent;
