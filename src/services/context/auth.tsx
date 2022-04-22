import {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  FC,
  useContext,
} from "react";
import {
  IGetCurrentUserResponse,
  Manipulator,
  ContextState,
  authContextControllerProps,
} from "./broker";
import Cookie from "../cookies.config";
import { useGetCurrentUser } from "./broker";
import { AxiosResponse } from "axios";
import { SecondaryLoader } from "../../shared/loader";

export const AuthContext = createContext(
  [] as (ContextState | authContextControllerProps | any)[]
);

export const AuthProvider: FC = ({ children }) => {
  const { mutateAsync, isLoading: loading } = useGetCurrentUser();
  const [state, dispatch] = useReducer(Manipulator, {
    isLoading: true,
    isSignout: false,
    userToken: null,
    data: null,
  });

  useEffect(() => {
    let userToken = Cookie.getCipher();
    let data = null;
    if (userToken) {
      // make request for data
      mutateAsync({})
        .then((res: AxiosResponse<IGetCurrentUserResponse>) => {
          dispatch({
            type: "RESTORE_TOKEN",
            userToken,
            data: res?.data?.payload,
          });
        })
        .catch((e) => {
          dispatch({
            type: "RESTORE_TOKEN",
            data: null,
            userData: null,
          });
        });
    } else {
      dispatch({
        type: "RESTORE_TOKEN",
        data: null,
        userData: null,
      });
    }
    dispatch({ type: "RESTORE_TOKEN", userToken: data });
  }, [mutateAsync]);

  //control the sign in and sign out of the system
  const authContextController = useMemo(
    () => ({
      signIn: async ({
        token,
        data,
      }: {
        token: string;
        data: any;
      }): Promise<boolean> => {
        return new Promise((resolve, reject) => {
          Cookie.setCipher(token);
          dispatch({ type: "SIGN_IN", userToken: token, data });
          resolve(true);
        });
      },
      signOut: (): void => {
        Cookie.clearCipher();
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  return (
    <>
      {loading ? (
        <div
          style={{ height: "100vh" }}
          className="bg-gray-50 w-screen flex justify-center items-center"
        >
          <SecondaryLoader
            size="w-6 h-6"
            color="border-green-500"
            border="border-2 "
          />
        </div>
      ) : (
        <AuthContext.Provider value={[authContextController, state]}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

export const useCurrentUser = () => useContext(AuthContext);
