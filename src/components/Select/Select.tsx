import { FC, FocusEvent } from "react";
import ReactSelect from 'react-select';
import { Option } from "../../models/Common";
import './Select.css';

interface Props {
  id: string
  value: string
  options: Option[]
  hasError?: boolean
  onChange: (value: string) => void
  onBlur?: (e: FocusEvent<HTMLElement>) => void
}

const Select: FC<Props> = (props) => {
  const { id, value, options, hasError = false, onChange, onBlur, } = props


  const classNames = () => {
    let classes = 'select-container'
    if (hasError) classes += ' error'

    return classes
  }

  return (
    <ReactSelect
      className={classNames()}
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