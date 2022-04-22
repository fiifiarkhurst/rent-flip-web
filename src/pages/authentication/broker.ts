import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { LOGIN } from "../../constants/constants";
import { post } from "../../services/transport";

export interface LoginInputProps {
  email: string;
  password: string;
}

export interface LoginOutputProps {
  data: string;
  token: string;
}

export const useLogin = () =>
  useMutation<any, any, LoginInputProps, AxiosResponse<LoginOutputProps>>(
    (data: LoginInputProps) => post(LOGIN, data)
  );
