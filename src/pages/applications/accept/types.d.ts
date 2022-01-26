import React from "react";

export interface AcceptComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
