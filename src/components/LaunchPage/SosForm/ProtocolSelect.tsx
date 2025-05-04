import { t } from 'i18next';
import { Protocol } from 'types/FetchInterfaces';
import { SettersType } from 'types/SosTypes';
import BaseSelect from './BaseSelect';

interface ProtocolSelectProps {
  selected: Protocol;
  options: Protocol[];
  setters: SettersType;
}

const ProtocolSelect = ({ selected, options, setters }: ProtocolSelectProps) => {
  const handleProtocolState = (option: Protocol) => {
    setters.setFormState((prev) => ({ ...prev, protocol: option }));
  };
  return (
    <BaseSelect
      selected={selected}
      options={options}
      handleState={handleProtocolState}
      propertyName="protocol_name"
      label={t('sosForm.select.protocol')}
      name="protocol"
      fullWidth
    />
  );
};

export default ProtocolSelect;
