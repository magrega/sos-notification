export interface FormatDateProps {
  fractionalSecondDigits?: 1 | 3 | 2 | undefined;
  hour?: "numeric" | "2-digit" | undefined;
  minute?: "numeric" | "2-digit" | undefined;
  day?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  year?: "numeric" | "2-digit" | undefined;
  second?: "numeric" | "2-digit" | undefined;
  timeStart: string | number | Date;
  timeEnd?: string | number | Date;
  timeZoneName?:
    | "long"
    | "short"
    | "shortOffset"
    | "longOffset"
    | "shortGeneric"
    | "longGeneric"
    | undefined;
  locale?: string;
  isDateRange?: boolean;
}
