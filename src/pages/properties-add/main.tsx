import React from "react";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { UploadSvg } from "../../components/svgs/upload";
import { useHistory } from "react-router-dom";
import { PROPERTIES } from "../../navigation/constants";
import LocationSearchInput from "../../components/location/location";

function MainComponent() {
  const [longitude, setLongitude] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [address, setAddress] = React.useState("");

  const { push } = useHistory();
  return (
    <>
      <div className="relative  items-center  w-full px-5 py-12  mx-auto   md:px-12  lg:px-16  max-w-5xl">
        <div className="pb-5 border-b border-black flex flex-row items-center justify-between mr-20">
          {" "}
          <h3 className="text-lg font-medium leading-6 text-neutral-600">
            {" "}
            Add a property
          </h3>
          <button
            onClick={() => push(PROPERTIES)}
            type="button"
            className="focus:outline-none"
          >
            <XIcon className="h-7 w-7 text-gray-500" />
          </button>
        </div>
        <div className=" mt-8 rounded-lg">
          <div className="flex flex-row items-center space-x-1">
            <h2 className="text-lg font-medium text-neutral-600">
              Property Info
            </h2>
            <button
              type="button"
              className="px-2 space-x-1 flex items-center justify-center text-xs focus:outline-none leading-5 font-medium rounded-full bg-gray-100 text-gray-800 cursor-pointer hover:text-gray-700"
            >
              <PencilIcon className="h-3 w-3" />
              <div>Draft</div>
            </button>
          </div>
          <form>
            <div className="mt-6 grid grid-cols-5 gap-6">
              <div className="col-span-5 sm:col-span-4 space-y-2">
                <label
                  htmlFor="location"
                  className="block text-xs font-medium text-gray-600"
                >
                  Location <span>*</span>
                </label>
                <LocationSearchInput
                  address={address}
                  setLong={setLongitude}
                  setLat={setLatitude}
                  setAddress={setAddress}
                />
              </div>
              <div className="col-span-5 sm:col-span-4 space-y-2">
                <label
                  htmlFor="location"
                  className="block text-xs font-medium text-gray-600"
                >
                  Notes{" "}
                  <span className="font-normal text-gray-500">
                    * Must be 50 characters or less with spaces. The first
                    letter of each word must be capitalize.
                  </span>
                </label>

                <textarea
                  rows={4}
                  name="notes"
                  id="notes"
                  className="block w-full px-5 py-2 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
              <div className="col-span-1 sm:col-span-1 space-y-2" />
              <div className="col-span-5 sm:col-span-1 space-y-2">
                <label
                  htmlFor="price"
                  className="block text-xs font-medium text-gray-600"
                >
                  Price <span>*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="block w-full px-5 py-2 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>

              <div className="col-span-5 sm:col-span-1 space-y-2">
                <label
                  htmlFor="room"
                  className="block text-xs font-medium text-gray-600"
                >
                  Number of rooms <span>*</span>
                </label>
                <input
                  type="number"
                  name="rooms"
                  id="rooms"
                  className="block w-full px-5 py-2 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
              <div className="col-span-3 sm:col-span-3 space-y-2" />

              <div className="col-span-2 sm:col-span-2 space-y-3">
                <label
                  htmlFor="images"
                  className="block text-xs font-medium text-gray-600"
                >
                  Property Images <span>*</span>
                </label>

                <button
                  type="button"
                  className="relative block w-full border-2 h-48 border-gray-300 border-dashed rounded-lg p-2 text-center hover:border-gray-400 focus:outline-none focus:ring-0"
                >
                  <UploadSvg className="mx-auto h-16 w-16 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-400" />
                  <span className="mt-2 block text-xs font-medium text-gray-600">
                    Upload
                  </span>{" "}
                  <label
                    htmlFor="report-file"
                    className="absolute inset-0 w-full h-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-medium text-white"
                  >
                    <input
                      type="file"
                      id="report-file"
                      name="report-file"
                      accept={"image/*"}
                      //   onChange={onFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </label>
                </button>
                <p className="block text-xs font-normal  text-gray-400">
                  Main image. The image must be 1440x810
                </p>
              </div>
              <div className="col-span-3 sm:col-span-3">
                <div className="w-1/2  space-y-3">
                  <label
                    htmlFor="images"
                    className="block text-sm mt-8 font-medium text-gray-600"
                  />

                  <button
                    type="button"
                    className="relative block w-full border-2 h-48 border-gray-300 border-dashed rounded-lg p-2 text-center hover:border-gray-400 focus:outline-none focus:ring-0"
                  >
                    <UploadSvg className="mx-auto h-16 w-16 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-400" />
                    <span className="mt-2 block text-xs font-medium text-gray-600">
                      Upload
                    </span>{" "}
                    <label
                      htmlFor="report-file"
                      className="absolute inset-0 w-full h-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-medium text-white"
                    >
                      <input
                        type="file"
                        id="report-file"
                        name="report-file"
                        accept={"image/*"}
                        //   onChange={onFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </label>
                  </button>
                  <p className="block text-xs font-normal  text-gray-400">
                    Sub image. The image must be 320x320
                  </p>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1 my-5">
                <button
                  type="submit"
                  className="bg-green-600 w-full border border-transparent rounded-md shadow-sm py-3 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
                >
                  Save
                </button>
              </div>
              <div className="col-span-1 sm:col-span-1 my-5">
                <button
                  type="button"
                  onClick={() => push(PROPERTIES)}
                  className="bg-gray-100 w-full border border-transparent rounded-md shadow-sm py-3 px-4 inline-flex justify-center text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-offset-0"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
