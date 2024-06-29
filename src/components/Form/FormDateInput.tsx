import { FC } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FormProps } from "../../models/Form";
import DateInput from "../DateInput/DateInput";
import FormItemLayout from "./FormLayout/FormItemLayout/FormItemLayout";

interface Props extends FormProps {
  showTime?: boolean
}

const FormDateInput: FC<Props> = (props) => {
  const { id, form, label, required = false, showTime = false } = props


  return (
    <FormItemLayout
      id={id}
      label={label}
      errorMessage={(form.errors[id] && form.touched[id]) ? form.errors[id]?.toString() : undefined}
      required={required}
    >
      <DateInput
        id={id}
        value={form.values[id]}
        onChange={date => form.setFieldValue(id, date)}
        showTime={showTime}
      />
    </FormItemLayout>
  )
}

export default FormDateInput