import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Button, Plant, Protocol } from "types/FetchInterfaces";
import { SetFormStateType, setOptionsType } from "types/SosTypes";
import ButtonSelect from "./ButtonSelect";
import CountrySelect from "./CountrySelect";
import PlantSelect from "./PlantSelect";
import ProtocolSelect from "./ProtocolSelect";

type SettersType = {
  setOptions: Dispatch<SetStateAction<setOptionsType>>;
  setFormState: Dispatch<SetStateAction<SetFormStateType>>;
};

interface SosFormSelectsProps {
  isLoading: boolean;
  setters: SettersType;
  options: setOptionsType;
  formState: {
    country: string;
    protocol: Protocol;
    plant: Plant;
    button: Button;
  };
}

const SosFormSelects = ({
  isLoading,
  options,
  setters,
  formState: { country, protocol, plant, button },
}: SosFormSelectsProps) => {
  return (
    <>
      <Box sx={{ display: "flex", columnGap: 1, mb: 2 }}>
        <CountrySelect
          selected={country}
          options={options.countries}
          setters={setters}
          disabled={isLoading}
        />
        <PlantSelect
          selected={plant}
          options={options.plants}
          setters={setters}
        />
      </Box>
      <ButtonSelect
        selected={button}
        options={options.buttons}
        setters={setters}
      />
      <ProtocolSelect
        selected={protocol}
        options={options.protocols}
        setters={setters}
      />
    </>
  );
};

export default SosFormSelects;
