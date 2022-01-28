import React from "react";
import { Application } from "../types";

export interface AcceptComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
  application?: Application;
}
