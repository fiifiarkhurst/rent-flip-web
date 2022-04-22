import { LocationMarkerIcon, XIcon } from "@heroicons/react/outline";
import { AxiosResponse } from "axios";
import numeral from "numeral";
import React from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { ErrorState } from "../../components/alert";
import { siteTitle } from "../../constants/appName";
import { GET_SINGLE_PROPERTY } from "../../constants/constants";
import { PROPERTIES } from "../../navigation/constants";
import { get } from "../../services/transport";
import { SecondaryLoader } from "../../shared/loader";
import { GetPrpertyDetailsOutputProp } from "./typed";

const PropertiesDetails = () => {
  const { push } = useHistory();
  const params: { id: string } = useParams();

  const { data, isLoading, refetch } = useQuery<
    any,
    any,
    AxiosResponse<GetPrpertyDetailsOutputProp>
  >(`${params.id}`, () => get(GET_SINGLE_PROPERTY(params.id)));

  React.useEffect(() => {
    document.title = "Property Details | " + siteTitle;
  }, []);

  console.log(data);
  const property = data?.data?.payload;

  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 sm:py-12 lg:px-8">
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
                <h1 className="text-xl font-bold tracking-tight text-gray-900">
                  {property?.name}{" "}
                  {property?.type === "Rent" ? (
                    <>
                      <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        {property?.type}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {property?.type}
                      </span>
                    </>
                  )}
                </h1>
                <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
                  <dl className="flex">
                    <dt className="text-gray-500">
                      Property Code:&nbsp; &nbsp;
                    </dt>
                    <dd className="font-medium text-gray-900">
                      {property?.code}
                    </dd>
                  </dl>
                  <button
                    onClick={() => push(PROPERTIES)}
                    type="button"
                    className="focus:outline-none -mt-4"
                  >
                    <XIcon className="h-7 w-7 text-gray-500" />
                  </button>
                </div>
                <section aria-labelledby="property-heading" className="mt-8">
                  <div className="space-y-24">
                    <div className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
                      <div className="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
                        <div className="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
                          <img
                            src={property?.featuredBigImage}
                            alt={"alt"}
                            className="object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                        <div className="flex flex-row pt-3 items-center justify-between">
                          <div className="flex  space-x-1 text-sm font-light text-gray-800">
                            <LocationMarkerIcon className="text-green-600 h-4 w-4 pt-0.5" />
                            <span> {property?.address} </span>
                          </div>
                          <div className="text-gray-800 font-bold text-lg">
                            GH₵ {numeral(property?.price).format("0,0")}
                          </div>
                        </div>
                        <p className="text-gray-500 mt-5">
                          {property?.description}
                        </p>
                        <div className="mt-10 grid grid-cols-2 ">
                          <dl className="flex">
                            <dt className="text-gray-500">
                              Number Of Bathrooms:&nbsp; &nbsp;
                            </dt>
                            <dd className="font-medium text-gray-900">
                              {property?.meta?.numberOfBathrooms}
                            </dd>
                          </dl>
                          <dl className="flex">
                            <dt className="text-gray-500">
                              Number Of Bedrooms:&nbsp; &nbsp;
                            </dt>
                            <dd className="font-medium text-gray-900">
                              {property?.meta?.numberOfBedrooms}
                            </dd>
                          </dl>
                          <dl className="flex mt-5">
                            <dt className="text-gray-500">
                              Number Of Kitchens:&nbsp; &nbsp;
                            </dt>
                            <dd className="font-medium text-gray-900">
                              {property?.meta?.numberOfKitchens}
                            </dd>
                          </dl>
                          <dl className="flex mt-5">
                            <dt className="text-gray-500">
                              Parking Premise Availability?:&nbsp; &nbsp;
                            </dt>
                            <dd className="font-medium text-gray-900">
                              {property?.meta?.parkingPremiseAvailable
                                ? "Yes"
                                : "No"}
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  {data?.data?.payload?.otherImages?.map((img) => (
                    <img alt={"skjcbs"} src={img} className="h-5 w-5" />
                  ))}
                </section>
              </>
            ) : (
              <>
                <ErrorState
                  model="property details"
                  canReload
                  reload={refetch}
                />
              </>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default PropertiesDetails;
