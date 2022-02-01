import { PaperClipIcon, XIcon } from "@heroicons/react/outline";
import { APPLICATIONS } from "../../../navigation/constants";
import { useHistory } from "react-router-dom";
import { CardDetailsComponentProp } from "./type";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Profile from "../../../assets/male.png";
import moment from "moment";
import numeral from "numeral";

function DetailsCard({
  details,
  onAccept,
  onReject,
}: CardDetailsComponentProp) {
  const { push } = useHistory();

  return (
    <>
      <h1 className="text-xl font-bold tracking-tight text-gray-900">
        Application Details
      </h1>

      <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
        <dl className="flex">
          <dt className="text-gray-500">Application number&nbsp;</dt>
          <dd className="font-medium text-gray-900">{details?.code}</dd>
          <dt>
            <span className="sr-only">Date</span>
            <span className="text-gray-400 mx-2" aria-hidden="true">
              &middot;
            </span>
          </dt>
          <dd className="font-medium text-gray-900">
            <time dateTime="2021-03-22">
              {moment(details?.createdAt).format("MMMM Do YYYY")}
            </time>
          </dd>
        </dl>
        <button
          onClick={() => push(APPLICATIONS)}
          type="button"
          className="focus:outline-none -mt-4"
        >
          <XIcon className="h-7 w-7 text-gray-500" />
        </button>
      </div>

      <section aria-labelledby="property-heading" className="mt-8">
        <h2 id="property-heading" className="sr-only">
          Property purchased
        </h2>

        <div className="space-y-24">
          <div className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
            <div className="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
              <div className="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={details?.property?.featuredBigImage}
                  alt={"alt"}
                  className="object-center object-cover"
                />
              </div>
            </div>
            <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
              <h3 className="text-lg font-medium text-gray-900">
                <div> {details?.property?.name}</div>
              </h3>
              <div className="flex flex-row pt-3 items-center justify-between">
                <div className="flex  space-x-1 text-sm font-light text-gray-800">
                  <LocationMarkerIcon className="text-green-600 h-4 w-4 pt-0.5" />
                  <span> {details.property?.address} </span>
                </div>
                <div className="text-gray-800 font-light text-sm">
                  GH₵ {numeral(details.property?.price).format("0,0")}
                </div>
              </div>
              <p className="text-gray-500 mt-3">
                {details?.property?.description}
              </p>
            </div>
            <div className="sm:col-span-12 md:col-span-7">
              <dl className="grid grid-cols-1 gap-y-4 border-b py-8 border-gray-200 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                <div>
                  <dt className="font-medium text-gray-900">User details</dt>
                  <dd className="mt-3 text-gray-500">
                    <div className="flex flex-row items-center space-x-2">
                      <img
                        src={details.photo || Profile}
                        alt="profile"
                        className="h-12 w-12 rounded-full"
                      />
                      <div>
                        <span className="block text-gray-800">
                          {details?.name}
                        </span>
                        {details.status === "Pending" ? (
                          <>
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              {details?.status}
                            </span>
                          </>
                        ) : details.status === "Rejected" ? (
                          <>
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              {details?.status}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {details?.status}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">User contact</dt>
                  <dd className="mt-3 text-gray-500 space-y-1">
                    <p className="">{details.email}</p>
                    <p>{details.phone}</p>
                  </dd>
                </div>
              </dl>
              <div className="flex flex-row  mt-6 md:mt-8 space-x-3">
                {details?.status === "Pending" ? (
                  <>
                    <button
                      type="button"
                      onClick={onAccept}
                      className="inline-flex items-center px-4 py-2 border-none  shadow-none text-sm font-medium rounded-md text-green-800 bg-green-50 hover:bg-green-100 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      onClick={onReject}
                      className="inline-flex items-center px-4 py-2 border-none shadow-none text-sm font-medium rounded-md text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center px-4 py-2 border-none  shadow-none text-sm font-medium rounded-md text-green-800 bg-green-50 cursor-not-allowed opacity-60  focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center px-4 py-2 border-none shadow-none text-sm font-medium rounded-md text-red-700 bg-red-50 cursor-not-allowed opacity-60  focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="attachments-heading" className="mt-14">
        <h2 id="attachments-heading" className="sr-only">
          Attachments
        </h2>

        <dt className="text-sm font-medium text-gray-500">Attachments</dt>
        <dd className="mt-3 text-sm text-gray-900">
          <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {[
              "national_id_card_new.pdf",
              "pay_slip_confirmation_1.pdf",
              "pay_slip_confirmation_2.pdf",
            ].map((attachment) => (
              <li
                key={attachment}
                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
              >
                <div className="w-0 flex-1 flex items-center">
                  <PaperClipIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2 flex-1 w-0 truncate">{attachment}</span>
                </div>
                <div className="ml-4 flex-shrink-0 bg-gray-100 py-1 rounded-full px-3">
                  <div className="font-medium text-xs text-gray-600 hover:text-gray-500">
                    View
                  </div>
                </div>
              </li>
            ))}
          </div>
        </dd>
      </section>
    </>
  );
}

export { DetailsCard };
