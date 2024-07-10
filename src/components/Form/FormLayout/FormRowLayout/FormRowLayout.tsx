import { FC, ReactNode } from "react";
import './FormRowLayout.css';

interface Props {
  children: ReactNode
}

const FormRowLayout: FC<Props> = (props) => {
  const { children } = props

  return (
    <div className="form-row-layout">
      {children}
    </div>
  )
}

export default FormRowLayout