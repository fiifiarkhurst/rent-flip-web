import { BasicModal } from "../components/modal";
// import { LogoutSvg } from "../components/svgs/logout";
import { ILogoutComponentProp } from "./types";

function Logout({ setShow, show, handleLogout }: ILogoutComponentProp) {
  return (
    <>
      <BasicModal setShow={setShow} show={show} size={24}>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left  transform transition-all sm:my-5 sm:align-middle sm:max-w-sm sm:w-full sm:p-7">
          <div>
            {/* <LogoutSvg className="h-24 w-24 " aria-hidden="true" /> */}
            <div className="mt-3 text-left sm:mt-0">
              <h3 className="text-lg leading-0 font-medium text-gray-900">
                Are your sure you want to logout?
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur amet labore.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-0 focus:ring-offset-0 sm:text-sm"
              onClick={handleLogout}
            >
              Yes, Logout.
            </button>
          </div>
        </div>
      </BasicModal>
    </>
  );
}

export default Logout;
