import { Status } from "../applications/types";
import { Property } from "../properties/types";

export interface PropertyDetails {
  _id: string;
  address: string;
  description: string;
  price: number;
  type: string;
  otherImages: string[];
  name: string;
  featuredBigImage: string;
  featuredSmallImage: string;
  gpsAddress: string;
  code: string;
  location: {
    latitude: number;
    longitude: number;
  };
  meta: {
    numberOfBathrooms: number;
    numberOfBedrooms: number;
    numberOfKitchens: number;
    parkingPremiseAvailable: boolean;
  };
  createdAt: Date;
  createdBy: any;
}

export interface GetPrpertyDetailsOutputProp {
  success: boolean;
  payload: PropertyDetails;
}
