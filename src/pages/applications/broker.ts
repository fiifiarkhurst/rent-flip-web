import { useMutation } from "react-query";
import {
  ACCEPT_APPLICATION,
  REJECT_APPLICATION,
} from "../../constants/constants";
import { IRejectApplicationInputProp } from "./types";
import { put } from "../../services/transport";

export function useAcceptApplication(id: string) {
  return useMutation(() => put(ACCEPT_APPLICATION(id), ""));
}

export function useRejectApplication(id: string) {
  return useMutation<any, IRejectApplicationInputProp, any>((formData) =>
    put<IRejectApplicationInputProp>(REJECT_APPLICATION(id), formData)
  );
}
