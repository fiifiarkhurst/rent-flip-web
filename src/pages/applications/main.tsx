import React from "react";
import { useQuery } from "react-query";
import { SecondaryLoader, TopLoader } from "../../shared/loader";
import { DataView } from "./data-view";
import { Application, GetApplicationsOutpuProp } from "./types";
import { AxiosResponse } from "axios";
import { get } from "../../services/transport";
import { GET_APPLICATIONS } from "../../constants/constants";
import { ErrorState, EmptyState } from "../../components/alert";
import { useHistory } from "react-router-dom";
import { siteTitle } from "../../constants/appName";

const AcceptApplication = React.lazy(() => import("./accept"));
const RejectApplication = React.lazy(() => import("./reject"));

function MainComponent() {
  const [isAcceptShown, setIsAcceptShown] = React.useState(false);
  const [isRejectShown, setIsRejectShown] = React.useState(false);
  const [selectedApplication, setSelectedApplication] =
    React.useState<Application>();

  const { push } = useHistory();

  const { data, isLoading, refetch } = useQuery<
    any,
    any,
    AxiosResponse<GetApplicationsOutpuProp>
  >("applications", () => get(GET_APPLICATIONS));

  React.useEffect(() => {
    document.title = "Applications | " + siteTitle;
  }, []);

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
                  {data?.data?.payload?.length === 0 ? (
                    <>
                      <div
                        style={{
                          marginTop: "10vh",
                        }}
                      >
                        <EmptyState
                          model="applications"
                          message="You don't have any applications from your clients yet."
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <DataView
                        applications={data?.data?.payload}
                        onReject={(dataFromView: Application) => {
                          setSelectedApplication(dataFromView);
                          setIsRejectShown(true);
                        }}
                        onView={(dataFromView: Application) => {
                          push(`/application/${dataFromView._id}`);
                        }}
                        onAccept={(dataFromView: Application) => {
                          setSelectedApplication(dataFromView);
                          setIsAcceptShown(true);
                        }}
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  <div
                    style={{
                      marginTop: "10vh",
                    }}
                  >
                    <ErrorState
                      model="applications"
                      canReload
                      reload={refetch}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
      <React.Suspense fallback={TopLoader()}>
        <AcceptApplication
          show={isAcceptShown}
          setShow={setIsAcceptShown}
          application={selectedApplication}
          refetch={refetch}
        />
        <RejectApplication
          show={isRejectShown}
          setShow={setIsRejectShown}
          application={selectedApplication}
          refetch={refetch}
        />
      </React.Suspense>
    </>
  );
}

export default MainComponent;
