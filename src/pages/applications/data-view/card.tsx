import { CardComponentProp } from "./types";
import { XIcon } from "@heroicons/react/outline";
import MalePng from "../../../assets/male.png";
import moment from "moment";

function Card({ application, onReject, onAccept }: CardComponentProp) {
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src={MalePng}
                alt={application?.name}
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {application?.name}
              </div>
              <div className="text-sm text-gray-500">{application?.email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{application?.phone}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {application?.idType}
          </span>
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
              type="button"
              onClick={onAccept}
              className="px-2 inline-flex text-xs focus:outline-none leading-5 font-semibold rounded-full bg-green-100 text-green-800 cursor-pointer hover:text-green-700"
            >
              <div>Accept</div>
            </button>
            <button
              type="button"
              className="focus:outline-none"
              onClick={onReject}
            >
              <XIcon className="text-red-600 hover:text-red-500 h-4 w-4 cursor-pointer" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export { Card };
