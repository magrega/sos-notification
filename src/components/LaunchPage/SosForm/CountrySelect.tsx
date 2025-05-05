import { t } from "i18next";
import { Country } from "types/FetchInterfaces";
import { SettersType } from "types/SosTypes";
import BaseSelect from "./BaseSelect";

interface CountrySelectProps {
  selected: string;
  options: string[];
  setters: SettersType;
  disabled: boolean;
}

const CountrySelect = ({
  selected,
  options,
  setters,
  disabled,
}: CountrySelectProps) => {
  const selectedCountry = { country: selected };
  const countryOptions = options.map((country) => ({ country }));
  const handleCountryState = (option: Country) => {
    setters.setFormState((prev) => ({ ...prev, country: option.country }));
  };
  return (
    <BaseSelect
      selected={selectedCountry}
      options={countryOptions}
      handleState={handleCountryState}
      propertyName="country"
      name="country"
      label={t("sosForm.select.country")}
      sx={{ flexBasis: { xs: "30%", md: "30%" } }}
      disabled={disabled}
    />
  );
};

export default CountrySelect;
