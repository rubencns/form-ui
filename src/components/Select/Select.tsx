import { FC } from "react";
import ReactSelect from 'react-select';
import { Option } from "../../models/Common";
import './Select.css';

interface Props {
  id: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  options: Option[]

}

const Select: FC<Props> = (props) => {
  const { id, value, onChange, onBlur, options } = props

  return (
    <ReactSelect
      className="select-container"
      classNamePrefix="select"
      id={id}
      name={id}
      value={options.find(option => option.value === value)}
      onChange={(option) => onChange(option?.value || '')}
      onBlur={onBlur}
      options={options}
    />
  )
}

export default Select