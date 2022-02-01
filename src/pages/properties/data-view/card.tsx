import { LocationMarkerIcon } from "@heroicons/react/solid";
import { CardComponentProp } from "./types";
import numeral from "numeral";

function Card({ property }: CardComponentProp) {
  return (
    <>
      <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
        <a href="/blog-post">
          <div className="flex-shrink-0">
            <img
              className="object-cover w-full h-48 rounded-lg"
              src={property?.featuredBigImage}
              alt={property.name}
            />
          </div>
        </a>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex-1">
            <div className="flex flex-row pt-6 items-center justify-between">
              <div className="flex  space-x-1 text-sm font-light text-gray-800">
                <LocationMarkerIcon className="text-green-600 h-4 w-4 pt-0.5" />
                <span> {property?.address} </span>
              </div>
              <div className="text-gray-800 font-light text-sm">
                GH₵ {numeral(property?.price).format("0,0")}
              </div>
            </div>
            <div className="block mt-2 space-y-5">
              <div className="flex flex-row items-center space-x-2">
                <h3 className="text-2xl font-semibold leading-none  tracking-tighter   text-neutral-600">
                  {" "}
                  {property?.name}
                </h3>
                {property.type === "Rent" ? (
                  <>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      {property?.type}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      {property?.type}
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm line-clamp-3 font-normal text-gray-600">
                {" "}
                {property?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card };
