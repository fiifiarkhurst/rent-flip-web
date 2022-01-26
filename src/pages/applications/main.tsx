import React from "react";
import { TopLoader } from "../../shared/loader";
import { DataView } from "./data-view";

const AcceptApplication = React.lazy(() => import("./accept"));
const RejectApplication = React.lazy(() => import("./reject"));

function MainComponent() {
  const [isAcceptShown, setIsAcceptShown] = React.useState(false);
  const [isRejectShown, setIsRejectShown] = React.useState(false);

  return (
    <>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="pb-5 border-b border-black flex flex-row items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-neutral-600">
              {" "}
              List of Applications{" "}
            </h3>
          </div>
          <DataView
            onReject={() => {
              setIsRejectShown(true);
            }}
            onAccept={() => {
              setIsAcceptShown(true);
            }}
          />
        </div>
      </section>
      <React.Suspense fallback={TopLoader()}>
        <AcceptApplication show={isAcceptShown} setShow={setIsAcceptShown} />
        <RejectApplication show={isRejectShown} setShow={setIsRejectShown} />
      </React.Suspense>
    </>
  );
}

export default MainComponent;
