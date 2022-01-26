import React from "react";

export interface RejectComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
