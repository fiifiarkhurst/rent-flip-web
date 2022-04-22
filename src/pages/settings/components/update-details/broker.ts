import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { UPDATE_DETAILS } from "../../../../constants/constants";
import { put } from "../../../../services/transport";

export interface UpdateDetailsInputProps {
  name: string;
}

export const useUpdateDetails = () =>
  useMutation<any, any, UpdateDetailsInputProps, AxiosResponse<any>>(
    (data: UpdateDetailsInputProps) => put(UPDATE_DETAILS, data)
  );
