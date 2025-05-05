import { t } from "i18next";
import { Button } from "types/FetchInterfaces";
import { SettersType } from "types/SosTypes";
import BaseSelect from "./BaseSelect";

interface ButtonSelectProps {
  selected: Button;
  options: Button[];
  setters: SettersType;
}

const ButtonSelect = ({ selected, options, setters }: ButtonSelectProps) => {
  const handleButtonState = (option: Button) => {
    setters.setFormState((prev) => ({
      ...prev,
      button: option,
      protocol: option.protocols[0],
    }));
    setters.setOptions((prev) => ({ ...prev, protocols: option.protocols }));
  };
  return (
    <BaseSelect
      selected={selected}
      options={options}
      handleState={handleButtonState}
      propertyName="button_title"
      label={t("sosForm.select.button")}
      name="button"
      fullWidth
    />
  );
};

export default ButtonSelect;
