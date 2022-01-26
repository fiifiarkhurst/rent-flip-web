import React from "react";

export interface ISecondaryLoader {
  size: string;
  color: string;
}

export interface ILogoutComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
}
