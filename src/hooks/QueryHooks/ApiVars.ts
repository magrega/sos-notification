export const BASE_API =
  process.env.NODE_ENV === "production"
    ? "https://jsonapi.metabroadcast.ru"
    : "http://localhost:3001";
export const USERS = `${BASE_API}/users`;
export const LOGIN = `${BASE_API}/login`;
export const GET_SOS = `${BASE_API}/660/sos`;
export const LOGS = `${BASE_API}/660/logs`;
export const ANNOUNCEMENT = `${BASE_API}/660/announcement`;
export const CHANGELOGS = `${BASE_API}/660/changelogs`;
