import { FC } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FormProps } from "../../models/Form";
import DateInput from "../DateInput/DateInput";
import FormItemLayout from "./FormLayout/FormItemLayout/FormItemLayout";
import { getFormInputError } from "./formUtils";

interface Props extends FormProps {
  showTime?: boolean
}

const FormDateInput: FC<Props> = (props) => {
  const { id, form, label, required = false, showTime = false } = props

  return (
    <FormItemLayout
      id={id}
      label={label}
      errorMessage={getFormInputError(id, form)}
      required={required}
    >
      <DateInput
        id={id}
        value={form.values[id]}
        showTime={showTime}
        hasError={!!getFormInputError(id, form)}
        onChange={date => form.setFieldValue(id, date)}
        onBlur={(e) => {
          form.handleBlur(e)
          form.setFieldTouched(id, true)
        }}
      />
    </FormItemLayout>
  )
}

export default FormDateInput