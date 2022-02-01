import React from "react";
import { BasicModal } from "../../../components/modal";
import { AcceptComponentProp } from "./types";
import { useAcceptApplication } from "../broker";
import { AxiosError } from "axios";
import { SecondaryLoader } from "../../../shared/loader";
import { classNames } from "../../../components/className";
import toast from "react-hot-toast";

function MainComponent({
  setShow,
  show,
  application,
  refetch,
}: AcceptComponentProp) {
  const { mutateAsync, isLoading } = useAcceptApplication(
    application?._id as string
  );

  function onAccept(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    mutateAsync()
      .then(() => {
        refetch();
        toast.success("Application accepted successfully");
        setShow(false);
      })
      .catch((e: AxiosError) => {
        console.log(e);

        toast.error(e.response?.data?.message || e?.message);
      });
  }
  return (
    <>
      <BasicModal show={show} setShow={setShow} size={24}>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left  transform transition-all sm:my-5 sm:align-middle sm:max-w-sm sm:w-full sm:p-7">
          <div>
            {/* <LogoutSvg className="h-24 w-24 " aria-hidden="true" /> */}
            <div className="mt-3 text-left sm:mt-0">
              <h3 className="text-lg leading-0 font-medium text-gray-900">
                Accept application?
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur amet labore.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 space-y-2">
            <button
              type="button"
              onClick={onAccept}
              disabled={isLoading}
              className={classNames(
                isLoading ? "opacity-70 cursor-wait" : "hover:bg-green-500 ",
                "flex items-center justify-center w-full h-10 rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white  focus:outline-none focus:ring-0 focus:ring-offset-0 sm:text-sm"
              )}
            >
              {isLoading ? (
                <>
                  <SecondaryLoader
                    size="w-5 h-5"
                    color="border-white"
                    border="border-2 "
                  />
                </>
              ) : (
                <>Yes, accept.</>
              )}
            </button>
            <button
              type="button"
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

export default MainComponent;
