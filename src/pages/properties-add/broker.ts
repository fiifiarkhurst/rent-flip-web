import { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { AddPropertyInputProp, AddPropertyOutputProp } from "./types";
import { post } from "../../services/transport";
import { GET_PROPERITES as CREATE_PROPERTY } from "../../constants/constants";

export const useAddProperty = () => {
  const queryClient = useQueryClient();
  return useMutation<
    any,
    any,
    AddPropertyInputProp,
    AxiosResponse<AddPropertyOutputProp>
  >((formData) => post<AddPropertyInputProp>(CREATE_PROPERTY, formData), {
    onSuccess: () => {
      queryClient?.invalidateQueries("properties");
    },
  });
};
