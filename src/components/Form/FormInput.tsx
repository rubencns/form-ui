import { FormProps } from "../../models/Form";
import Input from "../Input/Input";
import FormItemLayout from "./FormLayout/FormItemLayout/FormItemLayout";

interface Props extends FormProps { }

const FormInput = (props: Props) => {
  const { id, form, label, required = false } = props

  return (
    <FormItemLayout
      id={id}
      label={label}
      errorMessage={(form.errors[id] && form.touched[id]) ? form.errors[id]?.toString() : undefined}
      required={required}
    >
      <Input
        id={id}
        value={form.values[id]}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
    </FormItemLayout>
  )
}

export default FormInput