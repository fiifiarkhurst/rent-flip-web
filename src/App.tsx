import { Toaster } from "react-hot-toast";
import { ReactQueryConfigurationProvider } from "./services/react-query-config";
import AppNavigator from "./navigation/router-config";

function App() {
  return (
    <>
      <Toaster
        position={"bottom-right"}
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            margin: "40px",
            background: "#1A202C",
            color: "#fff",
            zIndex: 1,
          },
          duration: 5000,
          success: {
            duration: 8000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            style: {
              background: "#f44336",
            },
            duration: 8000,
          },
        }}
      />
      <ReactQueryConfigurationProvider>
        <AppNavigator />
      </ReactQueryConfigurationProvider>
    </>
  );
}

export default App;
