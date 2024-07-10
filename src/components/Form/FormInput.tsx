import { FormProps } from "../../models/Form";
import Input from "../Input/Input";
import FormItemLayout from "./FormLayout/FormItemLayout/FormItemLayout";
import { getFormInputError } from "./formUtils";

interface Props extends FormProps { }

const FormInput = (props: Props) => {
  const { id, form, label, required = false } = props

  return (
    <FormItemLayout
      id={id}
      label={label}
      errorMessage={getFormInputError(id, form)}
      required={required}
    >
      <Input
        id={id}
        value={form.values[id]}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        hasError={!!getFormInputError(id, form)}
      />
    </FormItemLayout>
  )
}

export default FormInput