/* This example requires Tailwind CSS v2.0+ */
import { RefreshIcon } from "@heroicons/react/solid";
import { ErrorStateComponentProp } from "./types";

function ErrorState({
  canReload,
  model,
  message,
  reload,
}: ErrorStateComponentProp) {
  return (
    <div className="text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-12 w-12 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        Can't fetch {model}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
      {canReload && (
        <>
          <div className="mt-6">
            <button
              type="button"
              onClick={reload}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
            >
              <RefreshIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Reload
            </button>
          </div>
        </>
      )}
    </div>
  );
}

ErrorState.defaultProps = {
  message: "An error occured trying to fetch this page.",
};

export { ErrorState };
