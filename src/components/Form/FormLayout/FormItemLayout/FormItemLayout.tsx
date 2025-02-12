import { FC, ReactNode } from "react";
import './FormItemLayout.css';

interface Props {
  id: string
  label: string
  errorMessage?: string
  required?: boolean
  children: ReactNode
}

const FormItemLayout: FC<Props> = (props) => {
  const { id, label, errorMessage, required = false, children } = props


  const labelClassNames = () => {
    let classes = 'form-item-label'
    if (errorMessage) classes += ' error'

    return classes
  }

  return (
    <div className="form-item-layout">
      {label &&
        <label className={labelClassNames()} htmlFor={id}>{label}{required ? '*' : ''}
        </label>
      }
      {children}
      {errorMessage && <span className="form-item-error">{errorMessage}</span>}
    </div>
  )
}

export default FormItemLayout