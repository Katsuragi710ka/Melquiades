import React, { FC } from 'react';

import './style.scss';

import { InputText } from 'primereact/inputtext';

import FormLabel from '@appComponent/TagFormModal/FormLabel';

interface NameInputProps {
  value: string,
  name: string,
  onInput: (value: string) => void
}
const NameInput: FC<NameInputProps> = props => {

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    props.onInput(target.value);
  };

  return (
    <div className="name-input">
      <FormLabel name={props.name} />
      <InputText
        value={props.value}
        onChange={event => handleChange(event)}
      />
    </div>
  );
};
export default NameInput;