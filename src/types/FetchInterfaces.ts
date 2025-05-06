import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { LogStatusesType } from "./SosTypes";

export type ILog = {
  plant: string | number | null;
  protocol: string | null;
  status: LogStatusesType;
  comment: string | null;
  time_create: string;
  pc_name: string | undefined;
  email_copy_list?: string | null;
  attach?: boolean | string | null;
  start_date?: number | Date | string;
  end_date?: number | Date | string;
  id: number;
  email_list?: string | null;
  edit?: string | null;
};

export type user = {
  id: number;
  username: string;
  email: string;
  auth_type: string;
  otp: string;
  realPassword: string;
  isTermsApprovalRequired: string;
};

export type loginResponse = { accessToken: string } & user;

export type LogsResponse = ILog[];

export interface SosResponse {
  [key: string]: Plant[];
}

export interface Protocol {
  protocol_id: number;
  protocol_name: string;
  extra_fields: boolean;
  notification_id: string;
}

export interface Button {
  button_id: number;
  button_title: string;
  protocols: Protocol[];
}

export interface Plant {
  plant_id: number;
  plant_name: string;
  buttons: Button[];
}

export interface Country {
  country: string;
}

export interface UserResponse {
  termsAcceptedOn: string;
  termsAcceptedVersion: string;
  username: string;
  isTermsApprovalRequired: boolean;
  emergency_notification: number;
}

export interface TermsAndPrivacy {
  date_from: string;
  text: string;
  version: string;
}

interface Oss {
  library: string;
  license: string;
  link: string;
  modified_on: string;
  text: string;
  version: string;
}

export interface OssResponse {
  results: Oss[];
}

export interface Announcement {
  id: number;
  valid_from: string;
  valid_to: string;
  style: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
  text: string;
  tab: null;
  country: null;
}

export interface Changelog {
  id: number;
  major_version: number;
  minor_version: number;
  revision: number;
  version: string;
  content: string;
  sprint: number;
  released: boolean;
  story_points: number;
  date: string;
}

export interface CheckLoginResponse {
  auth_type: string;
  username: string;
}

export interface OssLegalItem {
  library: string;
  version: string;
  license: string;
  link: string;
  text: string;
}

export interface OssLegalData {
  results: OssLegalItem[];
}

export interface TermsOrPrivacyLegalData {
  text: string;
}

export type LegalData = OssLegalData | TermsOrPrivacyLegalData;
