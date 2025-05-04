import FormControl, { FormControlProps } from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Plant } from 'types/FetchInterfaces';
import { SettersType } from 'types/SosTypes';
import Label from '../UI/Label';

interface OrganizationSelectProps extends FormControlProps {
  label: string;
  name: string;
  option: Plant;
  options: Plant[];
  setOption: SettersType;
}

export default function OrganizationSelect({
  label,
  option,
  options,
  name,
  setOption,
  ...props
}: OrganizationSelectProps) {
  return (
    <FormControl sx={{ mb: 2 }} {...props}>
      <Label label={label} />
      <Select
        id={`${name}-select`}
        name={name}
        value={option.plant_name}
        disabled={options.length === 1}
        sx={(theme) => ({
          '&& .Mui-disabled': { WebkitTextFillColor: theme.palette.text.primary },
        })}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            value={option.plant_name}
            onClick={() => {
              setOption.setFormState((prev) => ({
                ...prev,
                organization: option,
                button: option.buttons[0],
                protocol: option.buttons[0].protocols[0],
              }));
              setOption.setOptions((prev) => ({
                ...prev,
                buttons: option.buttons,
                protocols: option.buttons[0].protocols,
              }));
            }}
          >
            {option.plant_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
