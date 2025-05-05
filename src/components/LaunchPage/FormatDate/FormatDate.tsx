import { useTranslation } from "react-i18next";
import { FormatDateProps } from "./FormatDate.props";

const getDateString = (value: string | number | Date) => {
  if (!value) return undefined;

  try {
    const valueAsDate = new Date(value);

    return valueAsDate.toISOString();
  } catch {
    return undefined;
  }
};

const safelyFormatValue = (
  formatter: Intl.DateTimeFormat,
  value: string | number | Date
): string => {
  if (!value) return "";

  try {
    const dateFromValue = new Date(value);
    return formatter.format(dateFromValue);
  } catch {
    return "";
  }
};

const FormatDate = ({
  hour,
  minute,
  day,
  month,
  year,
  second,
  timeStart,
  timeEnd,
  timeZoneName,
  locale = "default",
  isDateRange = false,
  ...props
}: FormatDateProps) => {
  const { i18n } = useTranslation();

  const isSameDates =
    isDateRange &&
    timeEnd &&
    new Date(timeStart).toDateString() === new Date(timeEnd).toDateString();

  const dateFormatter = new Intl.DateTimeFormat(i18n?.language || locale, {
    hour,
    minute,
    day,
    month,
    year,
    second,
    timeZoneName,
  });

  return (
    <>
      <time dateTime={getDateString(timeStart)} {...props}>
        {safelyFormatValue(dateFormatter, timeStart)}
      </time>
      {timeEnd && !isSameDates && (
        <time dateTime={getDateString(timeEnd)} {...props}>
          {" - "}
          {safelyFormatValue(dateFormatter, timeEnd)}
        </time>
      )}
    </>
  );
};

export default FormatDate;
