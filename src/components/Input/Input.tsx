import { ChangeEvent, FC, FocusEvent, ReactNode } from "react";
import '../Input.css';

interface Props {
  id: string
  value: string
  placeholder?: string
  leftIcon?: ReactNode
  hasError?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = (props) => {
  const { id, value, placeholder, leftIcon, hasError = false, onChange, onBlur } = props

  const classNames = () => {
    let classes = 'input-container'
    if (hasError) classes += ' error'

    return classes
  }

  return (
    <div className={classNames()}>
      {leftIcon &&
        <div className="input-icon">
          {leftIcon}
        </div>
      }
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default Input