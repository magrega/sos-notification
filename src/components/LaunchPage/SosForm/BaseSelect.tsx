import FormControl, { FormControlProps } from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, Country, Plant, Protocol } from "types/FetchInterfaces";
import Label from "../UI/Label";

interface BaseSelectProps<T> extends FormControlProps {
  label: string;
  name: string;
  propertyName: keyof T;
  selected: T;
  options: T[];
  handleState: (option: T) => void;
}

const BaseSelect = <T extends Plant | Button | Protocol | Country>({
  name,
  label,
  selected,
  options,
  handleState,
  propertyName,
  ...props
}: BaseSelectProps<T>) => {
  return (
    <FormControl sx={{ mb: 2 }} {...props}>
      <Label label={label} />
      <Select
        id={`${name}-select`}
        name={name}
        value={selected[propertyName]}
        disabled={options.length === 1}
        sx={({ palette }) => ({
          "&& .Mui-disabled": { WebkitTextFillColor: palette.text.primary },
        })}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            value={option[propertyName] as string}
            onClick={() => handleState(option)}
          >
            {option[propertyName] as string}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BaseSelect;
