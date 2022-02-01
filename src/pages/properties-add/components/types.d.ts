import React from "react";
import { Type } from "../types";

export interface TypeComponentProp {
  selected: StateTypes;
  setSelected: React.Dispatch<React.SetStateAction<StateTypes>>;
}

export interface StateTypes {
  id: number;
  value: Type;
}

export interface OtherImagesModalComponentProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FeaturedImageLargeComponentProp {
  setImages: React.Dispatch<SetStateAction<string[]>>;
}
