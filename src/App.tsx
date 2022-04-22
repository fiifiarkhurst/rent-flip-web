import {
  ToastProvider,
  ReactQueryConfigurationProvider,
} from "./services/context";
import AppNavigator from "./navigation/router-config";
import { AuthProvider } from "./services/context/auth";

function App() {
  return (
    <>
      <ToastProvider>
        <ReactQueryConfigurationProvider>
          <AuthProvider>
            <AppNavigator />
          </AuthProvider>
        </ReactQueryConfigurationProvider>
      </ToastProvider>
    </>
  );
}

export default App;
