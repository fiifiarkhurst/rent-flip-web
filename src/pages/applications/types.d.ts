export interface Application {
  _id: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  property: string;
  idType: string;
  idPhoto: string;
  paySlips: string[];
  status: Status;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}

declare enum ApplicationStatus {
  Reject,
  Accepted,
}

export type Status = keyof typeof ApplicationStatus;

export interface GetApplicationsOutpuProp {
  success: boolean;
  payload: Application[];
}

export interface IRejectApplicationInputProp {
  reason?: string;
}
