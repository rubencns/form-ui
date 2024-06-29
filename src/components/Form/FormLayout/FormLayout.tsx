import { FC, ReactNode } from "react";
import './FormLayout.css';

interface Props {
  children: ReactNode
}

const FormLayout: FC<Props> = (props) => {
  const { children } = props

  return (
    <div className="form-layout">
      {children}
    </div>
  )
}

export default FormLayout