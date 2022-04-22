import React from "react";
import { siteTitle } from "../../constants/appName";
import { UpdateDetails } from "./components/update-details";
import { UpdatePassword } from "./components/update-password";

function MainComponent() {
  React.useEffect(() => {
    document.title = "Settings | " + siteTitle;
  }, []);
  return (
    <>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-5xl">
          <div className="pb-5 border-b border-black flex flex-row items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-neutral-600">
              Settings & Security
            </h3>
          </div>
          <div>
            <UpdateDetails />
          </div>
          <div>
            <UpdatePassword />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainComponent;
