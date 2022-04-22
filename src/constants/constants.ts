export const USER_TOKEN_IDENTIFIER = "@rent_flip";

export const GET_APPLICATIONS = "/request";
export const GET_SINGLE_APPLICATION = (id: string) => `/request/${id}`;
export const ACCEPT_APPLICATION = (id: string) => `/request/${id}/accept`;
export const REJECT_APPLICATION = (id: string) => `/request/${id}/reject`;

export const GET_PROPERITES = "/property";
export const GET_SINGLE_PROPERTY = (id: string) => `/property/${id}`;

export const LOGIN = "/admin/login";
export const CURRENT_ADMIN = "/admin/current";
export const UPDATE_DETAILS = "/admin";
export const UPDATE_PASSWORD = "/admin/update-password";
