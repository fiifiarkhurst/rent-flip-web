/* This example requires Tailwind CSS v2.0+ */
import { Fragment, lazy, Suspense, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { navigation } from "./util";
import { classNames } from "../../components/className";
import { SideNavComponentProp } from "./types";
import { XIcon } from "@heroicons/react/outline";
import { Link, useHistory, useLocation } from "react-router-dom";
import { TopLoader } from "../loader";
import { LOGIN } from "../../navigation/constants";
import Logo from "../../assets/logotext.png";
import Profile from "../../assets/male.jpeg";

const LogoutModal = lazy(() => import("../logout"));

export default function SideNav({
  setSidebarOpen,
  sidebarOpen,
}: SideNavComponentProp) {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [isLogoutShown, setIsLogoutShown] = useState<boolean>(false);

  function handleLogout() {
    push(LOGIN);
  }
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img className="h-8 w-auto" src={Logo} alt="Workflow" />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href[0]}
                        className={classNames(
                          item.href.includes(pathname)
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.href.includes(pathname)
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <div className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src={Profile}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          Fiifi Arkhurst
                        </p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64  md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col  min-h-0 border-r border-gray-200 bg-green-600 ">
            <div className="flex-1 flex flex-col pt-6 pb-5 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 justify-center">
                <img className="h-20 w-auto" src={Logo} alt="Workflow" />
              </div>
              <nav className="mt-5 flex-1 px-8 bg-green-600  space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href[0]}
                    className={classNames(
                      [item.href[0].charAt(1)].includes(pathname.charAt(1))
                        ? "bg-green-700 text-gray-100"
                        : "text-gray-300 ",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        [item.href[0].charAt(1)].includes(pathname.charAt(1))
                          ? "text-gray-100"
                          : "text-gray-300",
                        "mr-3 flex-shrink-0 h-5 w-5"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-6">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src={Profile}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium -mb-2 text-gray-100 ">
                      Fiifi Arkhurst
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsLogoutShown(true)}
                      className="text-xs font-medium text-gray-200 focus:outline-none"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={TopLoader()}>
        <LogoutModal
          show={isLogoutShown}
          setShow={setIsLogoutShown}
          handleLogout={handleLogout}
        />
      </Suspense>
    </>
  );
}
