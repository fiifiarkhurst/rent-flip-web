import { Status } from "../applications/types";
import { Property } from "../properties/types";

export interface ApplicationDetails {
  _id: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  property: Property;
  idType: string;
  idPhoto: string;
  paySlips: string[];
  status: Status;
  startDate: Date;
  createdAt: Date;
  createdBy: any;
  endDate: Date;
}

export interface GetApplicationDetailsOutputProp {
  success: boolean;
  payload: ApplicationDetails;
}
