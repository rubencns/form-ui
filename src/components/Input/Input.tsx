import { ChangeEvent, FC, ReactNode } from "react";
import '../Input.css';

interface Props {
  id: string
  value: string
  placeholder?: string
  leftIcon: ReactNode
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
}

const Input: FC<Props> = (props) => {
  const { id, value, placeholder, leftIcon, onChange, onBlur } = props

  return (
    <div className="input-container">
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