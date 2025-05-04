import { useState } from "react";
import { SosResponse } from "types/FetchInterfaces";
import { SetFormStateType, setOptionsType } from "types/SosTypes";

export const useSosForm = (sosFormData: SosResponse) => {
  const countries = Object.keys(sosFormData);
  const plants = sosFormData[countries[0]];
  const buttons = plants[0].buttons;
  const protocols = buttons[0].protocols;

  const [options, setOptions] = useState<setOptionsType>({
    countries,
    plants,
    buttons,
    protocols,
  });

  const [formState, setFormState] = useState<SetFormStateType>({
    country: countries[0],
    plant: plants[0],
    button: buttons[0],
    protocol: protocols[0],
    comment: "",
    attachments: [],
  });

  const setters = { setOptions, setFormState };
  const setComment = (comment: string) =>
    setFormState((prev) => ({ ...prev, comment }));

  return {
    formState,
    setters,
    options,
    setComment,
  };
};
