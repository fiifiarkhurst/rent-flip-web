import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { SideNav } from "../side-nav";
import { TopLoader } from "../loader";
import { routes } from "../../navigation";
import { Route } from "react-router-dom";
import { RouteProp } from "../../navigation/types";

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <SideNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1">
          <React.Suspense fallback={TopLoader()}>
            {routes.map((route: RouteProp, i: number) => {
              return (
                <React.Fragment key={i}>
                  <Route
                    path={route.path}
                    component={route.component as any}
                    exact={route.exact}
                  />
                </React.Fragment>
              );
            })}
          </React.Suspense>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
