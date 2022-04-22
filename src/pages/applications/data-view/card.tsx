import { CardComponentProp } from "./types";
import { CheckIcon, EyeIcon, XIcon } from "@heroicons/react/outline";
import MalePng from "../../../assets/male.png";
import moment from "moment";

const truncate = (text: string, length: number = 0) => {
  return text.length > length ? `${text.slice(0, length)}...` : text;
};
function Card({ application, onReject, onAccept, onView }: CardComponentProp) {
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src={application?.photo || MalePng}
                alt={application?.name}
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {truncate(application?.createdBy?.name, 15)}
              </div>
              <div className="text-sm text-gray-500">{application?.code}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">
            {truncate(application?.createdBy?.email, 10)}
          </div>
          <div className="text-sm text-gray-500">
            {application?.createdBy?.phone}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {application.status === "Pending" ? (
            <>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                {application?.status}
              </span>
            </>
          ) : application.status === "Rejected" ? (
            <>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                {application?.status}
              </span>
            </>
          ) : (
            <>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {application?.status}
              </span>
            </>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {moment(application?.startDate).format("MMMM Do YYYY")}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {moment(application?.endDate).format("MMMM Do YYYY")}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
          <div className="flex flex-row item-center justify-between">
            <button
              title="view"
              type="button"
              onClick={onView}
              className="flex h-6 w-6 rounded-full justify-center items-center focus:outline-none leading-5 font-semibold  bg-gray-100 text-gray-800 cursor-pointer hover:text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
            </button>
            {application.status === "Pending" ? (
              <>
                <button
                  type="button"
                  title="accept"
                  onClick={onAccept}
                  className="flex h-6 w-6 rounded-full justify-center items-center focus:outline-none leading-5 font-semibold  bg-gray-100 text-gray-800 cursor-pointer hover:text-gray-700"
                >
                  <CheckIcon className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  className="flex h-6 w-6 opacity-60 rounded-full justify-center items-center focus:outline-none leading-5 font-semibold  bg-gray-100 text-gray-800 cursor-not-allowed "
                >
                  <CheckIcon className="h-4 w-4" />
                </button>
              </>
            )}

            {application.status === "Pending" ? (
              <>
                <button
                  type="button"
                  title="reject"
                  className="flex h-6 w-6 opacity-60 rounded-full justify-center items-center focus:outline-none leading-5 font-semibold  bg-gray-100 text-gray-800 cursor-pointer hover:text-gray-700"
                  onClick={onReject}
                >
                  <XIcon className="h-4 w-4 " />
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  type="button"
                  disabled
                  className="flex h-6 w-6 rounded-full justify-center items-center focus:outline-none leading-5 font-semibold  bg-gray-100 text-gray-800 cursor-not-allowed "
                  onClick={onReject}
                >
                  <XIcon className="h-4 w-4 " />
                </button>
              </>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}

export { Card };
