import { PlusSmIcon } from "@heroicons/react/outline";

/* eslint-disable jsx-a11y/anchor-is-valid */
function MainComponent() {
  return (
    <>
      <section>
        <div className="relative  items-center  w-full px-5 py-12  mx-auto   md:px-12  lg:px-16  max-w-7xl">
          <div className="pb-5 border-b border-black flex flex-row items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-neutral-600">
              {" "}
              List of Properties{" "}
            </h3>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-none text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
            >
              <PlusSmIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Add Property
            </button>
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
              <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                <a href="/blog-post">
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-full h-48 rounded-lg"
                      src="https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2024&amp;q=80"
                      alt=""
                    />
                  </div>
                </a>
                <div className="flex flex-col justify-between flex-1">
                  <a href="/blog-post"> </a>
                  <div className="flex-1">
                    <a href="/blog-post">
                      <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                        <time> Mar 10, 2020 </time>
                        <span aria-hidden="true"> · </span>
                        <span> 4 min read </span>
                      </div>
                    </a>
                    <a href="#" className="block mt-2 space-y-6">
                      <h3
                        className="
                        text-2xl
                        font-semibold
                        leading-none
                        tracking-tighter
                        text-neutral-600
                      "
                      >
                        {" "}
                        Typography on app.{" "}
                      </h3>

                      <p className="text-sm font-normal text-gray-500">
                        {" "}
                        Filling text so you can see how it looks like with text.
                        Did I said text?{" "}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                <a href="/blog-post">
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-full h-48 rounded-lg"
                      src="https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                      alt=""
                    />
                  </div>
                </a>
                <div className="flex flex-col justify-between flex-1">
                  <a href="/blog-post"> </a>
                  <div className="flex-1">
                    <a href="/blog-post">
                      <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                        <time> Mar 10, 2020 </time>
                        <span aria-hidden="true"> · </span>
                        <span> 4 min read </span>
                      </div>
                    </a>
                    <a href="#" className="block mt-2 space-y-6">
                      <h3
                        className="
                        text-2xl
                        font-semibold
                        leading-none
                        tracking-tighter
                        text-neutral-600
                      "
                      >
                        {" "}
                        Typography on app.{" "}
                      </h3>
                      <p className="text-sm font-normal text-gray-500">
                        {" "}
                        Filling text so you can see how it looks like with text.
                        Did I said text?{" "}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                <a href="/blog-post">
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-full h-48 rounded-lg"
                      src="https://images.unsplash.com/photo-1561654791-00316c79efa8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                      alt=""
                    />
                  </div>
                </a>
                <div className="flex flex-col justify-between flex-1">
                  <a href="/blog-post"> </a>
                  <div className="flex-1">
                    <a href="/blog-post">
                      <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                        <time> Mar 10, 2020 </time>
                        <span aria-hidden="true"> · </span>
                        <span> 4 min read </span>
                      </div>
                    </a>
                    <a href="#" className="block mt-2 space-y-6">
                      <h3
                        className="
                        text-2xl
                        font-semibold
                        leading-none
                        tracking-tighter
                        text-neutral-600
                      "
                      >
                        {" "}
                        Typography on app.{" "}
                      </h3>
                      <p className="text-sm font-normal text-gray-500">
                        {" "}
                        Filling text so you can see how it looks like with text.
                        Did I said text?{" "}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainComponent;
