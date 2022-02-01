import React from "react";
import { BasicModal } from "../../../components/modal";
import { OtherImagesModalComponentProp } from "./types";
import { PlusIcon } from "@heroicons/react/solid";
import { UploadSvg } from "../../../components/svgs/upload";

export const OtherImages = () => {
  const [showOtherImages, setShowOtherImages] = React.useState(false);
  return (
    <>
      <div className="w-full  bg-gray-50 rounded-lg space-y-3">
        <label className="block text-sm mt-8 font-medium text-gray-600" />
        <button
          type="button"
          onClick={() => setShowOtherImages(true)}
          className="relative flex justify-center items-center w-full h-44 p-2 text-center focus:outline-none focus:ring-0"
        >
          <PlusIcon className="h-14 w-14 text-green-600" />
        </button>
      </div>
      <p className="block text-xs pt-3 font-normal text-center text-gray-400">
        Add other images
      </p>
      <OtherImagesModal show={showOtherImages} setShow={setShowOtherImages} />
    </>
  );
};

function OtherImagesModal({ show, setShow }: OtherImagesModalComponentProp) {
  return (
    <>
      <BasicModal show={show} setShow={setShow} size={35}>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-2 pb-4 text-left  transform transition-all sm:my-0 sm:align-middle  sm:w-full sm:p-7">
          <div>
            {/* <LogoutSvg className="h-24 w-24 " aria-hidden="true" /> */}
            <div className="mt-3 text-left sm:mt-0">
              <h3 className="text-lg leading-0 font-medium text-gray-900">
                Upload other images
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-3 ">
            {[1, 2, 3, 4, 5, 6].map((val) => (
              <React.Fragment key={val}>
                <div className="col-span-2 sm:col-span-2">
                  <div className="w-full  space-y-2">
                    <label
                      htmlFor="images"
                      className="block text-sm mt-4 font-medium text-gray-600"
                    />

                    <button
                      type="button"
                      className="relative block w-full border-2 h-36 border-gray-300 border-dashed rounded-lg p-2 text-center hover:border-gray-400 focus:outline-none focus:ring-0"
                    >
                      <UploadSvg className="mx-auto h-14 w-14 sm:h-14 sm:w-14 md:h-16 md:w-16 text-gray-400" />
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
                    <p className="block text-xs font-normal text-center text-gray-400">
                      other image - {val} (small)
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-8 space-x-2 flex flex-row items-end">
            <button
              type="button"
              className={
                "flex items-center justify-center w-full h-10 rounded-md border hover:bg-gray-300  border-transparent shadow-sm px-4 py-2 bg-gray-200 text-base font-medium text-gray-800  focus:outline-none focus:ring-0 focus:ring-offset-0 sm:text-sm"
              }
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setShow(false)}
              className="flex items-center h-10 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-500  focus:outline-none focus:ring-0 focus:ring-offset-0 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </BasicModal>
    </>
  );
}
