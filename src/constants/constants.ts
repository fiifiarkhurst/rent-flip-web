export const USER_TOKEN_IDENTIFIER = "@rent_flip";

export const GET_APPLICATIONS = "/request";
export const ACCEPT_APPLICATION = (id: string) => `/request/accept/${id}`;
export const REJECT_APPLICATION = (id: string) => `/request/reject/${id}`;
