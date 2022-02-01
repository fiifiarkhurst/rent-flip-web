import { Application } from "../types";

export interface CardComponentProp {
  application: Application;
  onAccept: () => void;
  onReject: () => void;
  onView: () => void;
}

export interface DateViewComponentProp {
  onAccept: (dataFromView: Application) => void;
  onReject: (dataFromView: Application) => void;
  onView: (dataFromView: Application) => void;
  applications: Application[];
}
