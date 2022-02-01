import React from "react";
import { PlusSmIcon } from "@heroicons/react/outline";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { EmptyState, ErrorState } from "../../components/alert";
import { GET_PROPERITES } from "../../constants/constants";
import { ADD_PROPERTY } from "../../navigation/constants";
import { get } from "../../services/transport";
import { SecondaryLoader } from "../../shared/loader";
import { DataView } from "./data-view";
import { GetPropertiesOutpuProp } from "./types";
import { siteTitle } from "../../constants/appName";

function MainComponent() {
  const { data, isLoading, refetch } = useQuery<
    any,
    any,
    AxiosResponse<GetPropertiesOutpuProp>
  >("properties", () => get(GET_PROPERITES));

  React.useEffect(() => {
    document.title = "Properties | " + siteTitle;
  }, []);

  return (
    <>
      <section>
        <div className="relative  items-center  w-full px-5 py-12  mx-auto   md:px-12  lg:px-16  max-w-7xl">
          <div className="pb-5 border-b border-black flex flex-row items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-neutral-600">
              {" "}
              List of Properties{" "}
            </h3>
            <Link
              to={ADD_PROPERTY}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-none text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
            >
              <PlusSmIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Add Property
            </Link>
          </div>
          {/* body */}
          {isLoading ? (
            <>
              <div
                style={{
                  marginTop: "10vh",
                }}
                className="flex justify-center items-center"
              >
                <SecondaryLoader
                  size="w-12 h-12"
                  color="border-green-600"
                  border="border-2 "
                />
              </div>
            </>
          ) : (
            <>
              {data?.data?.success ? (
                <>
                  {data?.data?.payload?.length === 0 ? (
                    <>
                      <div
                        style={{
                          marginTop: "10vh",
                        }}
                      >
                        <EmptyState
                          model="properties"
                          message="Get started by creating properties for your clients."
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <DataView properties={data?.data?.payload} />
                    </>
                  )}
                </>
              ) : (
                <>
                  <div
                    style={{
                      marginTop: "10vh",
                    }}
                  >
                    <ErrorState model="properties" canReload reload={refetch} />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default MainComponent;
