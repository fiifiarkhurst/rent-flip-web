export const USER_TOKEN_IDENTIFIER = "@rent_flip";

export const GET_APPLICATIONS = "/request";
export const GET_SINGLE_APPLICATION = (id: string) => `/request/${id}`;
export const ACCEPT_APPLICATION = (id: string) => `/request/${id}/accept`;
export const REJECT_APPLICATION = (id: string) => `/request/${id}/reject`;

export const GET_PROPERITES = "/property";

export const LOGIN = "/admin/login";
export const CURRENT_ADMIN = "/admin/current";
