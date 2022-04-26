import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { GetApplicationDetailsOutputProp } from "./typed";
import { get } from "../../services/transport";
import { GET_SINGLE_APPLICATION } from "../../constants/constants";
import { SecondaryLoader, TopLoader } from "../../shared/loader";
import { ErrorState } from "../../components/alert";
import { DetailsCard } from "./data-view";
import { Application } from "../applications/types";
import { siteTitle } from "../../constants/appName";

const AcceptApplicationComponent = React.lazy(
  () => import("../applications/accept")
);
const RejectApplicationComponent = React.lazy(
  () => import("../applications/reject")
);

function MainComponent() {
  const params: { id: string } = useParams();

  const [selected] = React.useState<Application>();
  const [showAccept, setShowAccept] = React.useState(false);
  const [showReject, setShowReject] = React.useState(false);

  const { data, isLoading, refetch } = useQuery<
    any,
    any,
    AxiosResponse<GetApplicationDetailsOutputProp>
  >(`${params.id}`, () => get(GET_SINGLE_APPLICATION(params.id)));

  React.useEffect(() => {
    document.title = "Application Details | " + siteTitle;
  }, []);

  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 sm:py-12 lg:px-8">
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
                <DetailsCard details={data?.data?.payload} refetch={refetch} />
              </>
            ) : (
              <>
                <ErrorState
                  model="application details"
                  canReload
                  reload={refetch}
                />
              </>
            )}
          </>
        )}
      </main>
      <React.Suspense fallback={TopLoader()}>
        <AcceptApplicationComponent
          show={showAccept}
          setShow={setShowAccept}
          application={selected}
          refetch={refetch}
        />
        <RejectApplicationComponent
          show={showReject}
          setShow={setShowReject}
          application={selected}
          refetch={refetch}
        />
      </React.Suspense>
    </>
  );
}

export default MainComponent;
