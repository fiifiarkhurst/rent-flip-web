import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { CURRENT_ADMIN } from "../../constants/constants";
import { get } from "../transport";

export interface IGetCurrentUserResponse {
  payload: any;
}

export const useGetCurrentUser = () =>
  useMutation<any, any, any, AxiosResponse<IGetCurrentUserResponse>>(() =>
    get(CURRENT_ADMIN)
  );

//manipulate context
export const Manipulator = (prevState: any, action: any) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.userToken,
        isLoading: false,
        data: action.data,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.userToken,
        data: action.data,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isLoading: false,
        userToken: null,
        isSignout: true,
        data: null,
      };
    default:
      return prevState;
  }
};

export interface ContextState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: object;
}

export interface authContextControllerProps {
  signIn: Function;
  signOut: Function;
}
