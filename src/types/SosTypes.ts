import { Dispatch, SetStateAction } from "react";
import { Button, Plant, Protocol, SosResponse } from "./FetchInterfaces";

export interface ISosForm {
  isLoading: boolean;
  sosFormData: SosResponse;
}

export type LogStatusesType =
  | "Зарегистрировано"
  | "В процессе"
  | "Решено"
  | "Ошибочно"
  | "Ожидание";

export type SetFormStateType = {
  country: string;
  plant: Plant;
  button: Button;
  protocol: Protocol;
  comment: string;
  attachments: File[];
};

export type setOptionsType = {
  countries: string[];
  plants: Plant[];
  buttons: Button[];
  protocols: Protocol[];
};

export type SettersType = {
  setOptions: Dispatch<SetStateAction<setOptionsType>>;
  setFormState: Dispatch<SetStateAction<SetFormStateType>>;
};

export type SelectScreenButtonsType = "SOS" | "Logs";
export type LegalType = "terms" | "oss" | "privacy";
