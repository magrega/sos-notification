import { SosResponse } from "types/FetchInterfaces";
import { SetFormStateType } from "types/SosTypes";

export const getYYYYMMDDfromIso = (date?: string) =>
  (date ? new Date(date) : new Date()).toISOString().split("T")[0];

export const calculateDaysBetweenDates = (startDate: string) => {
  const firstDate = new Date(startDate);
  const secondDate = new Date();

  const firstDateInMs = firstDate.getTime();
  const secondDateInMs = secondDate.getTime();

  const differenceBtwDates = secondDateInMs - firstDateInMs;

  const aDayInMs = 24 * 60 * 60 * 1000;

  const daysDiff = Math.round(differenceBtwDates / aDayInMs);

  return daysDiff;
};

export function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-privacytab-${index}`,
  };
}

export const setFormData = (data: object): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key === "attachments" && value)
      for (const file of value as File[]) formData.append("attachments", file);
    else formData.append(key, String(value));
  });

  return formData;
};

export const getNotificationId = (
  { country, plant, button, protocol }: SetFormStateType,
  formData: SosResponse
) => {
  if (!country || !plant || !button || !protocol) return null;

  const plantData = formData[country].find(
    ({ plant_id }) => plant_id === plant.plant_id
  );
  if (!plantData) return null;

  const buttonData = plantData.buttons.find(
    ({ button_id }) => button_id === button.button_id
  );
  if (!buttonData) return null;

  const protocolData = buttonData.protocols.find(
    ({ protocol_id }) => protocol_id === protocol.protocol_id
  );
  return protocolData ? protocolData.notification_id : null;
};
