import { t } from "i18next";
import { Plant } from "types/FetchInterfaces";
import { SettersType } from "types/SosTypes";
import BaseSelect from "./BaseSelect";

interface PlantSelectProps {
  selected: Plant;
  options: Plant[];
  setters: SettersType;
}

const PlantSelect = ({ selected, options, setters }: PlantSelectProps) => {
  const handlePlantState = (option: Plant) => {
    setters.setFormState((prev) => ({
      ...prev,
      plant: option,
      button: option.buttons[0],
      protocol: option.buttons[0].protocols[0],
    }));
    setters.setOptions((prev) => ({
      ...prev,
      buttons: option.buttons,
      protocols: option.buttons[0].protocols,
    }));
  };
  return (
    <BaseSelect
      selected={selected}
      options={options}
      handleState={handlePlantState}
      propertyName="plant_name"
      label={t("sosForm.select.organization")}
      name="plant"
      sx={{ flexBasis: { xs: "70%", md: "70%" } }}
    />
  );
};

export default PlantSelect;
