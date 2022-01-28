import { Application } from "../types";

export interface CardComponentProp {
  application: Application;
  onAccept: () => void;
  onReject: () => void;
}

export interface DateViewComponentProp {
  onAccept: (dataFromView: any) => void;
  onReject: (dataFromView: any) => void;
  applications: Application[];
}
