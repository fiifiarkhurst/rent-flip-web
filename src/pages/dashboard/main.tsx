import React from "react";
import { classNames } from "../../components/className";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { siteTitle } from "../../constants/appName";

const stats = [
  {
    name: "Total Properties",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Applications Rate",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Avg. Click Rate",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
];

function MainComponent() {
  React.useEffect(() => {
    document.title = "Dashboard | " + siteTitle;
  }, []);
  return (
    <>
      <div className="relative  items-center  w-full px-5 py-12  mx-auto   md:px-12  lg:px-16  max-w-7xl">
        {/* <div className="pb-5 border-b border-black flex flex-row items-center justify-between"> */}
        <h3 className="text-lg font-medium leading-6 text-neutral-600">
          Dashboard & Stats
        </h3>
        {/* </div> */}

        <dl className="mt-8 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow-sm  border divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-normal text-gray-900">{item.name}</dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  {item.stat}
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    from {item.previousStat}
                  </span>
                </div>

                <div
                  className={classNames(
                    item.changeType === "increase"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800",
                    "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowSmUpIcon
                      className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowSmDownIcon
                      className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                    by
                  </span>
                  {item.change}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
export default MainComponent;
