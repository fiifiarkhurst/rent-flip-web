import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { UPDATE_PASSWORD } from "../../../../constants/constants";
import { put } from "../../../../services/transport";

export interface UpdatePasswordInputProps {
  oldPassword: string;
  newPassword: string;
}

export const useUpdatePassword = () =>
  useMutation<any, any, UpdatePasswordInputProps, AxiosResponse<any>>(
    (data: UpdatePasswordInputProps) => put(UPDATE_PASSWORD, data)
  );
