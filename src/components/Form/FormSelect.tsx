import { Option } from "../../models/Common";
import { FormProps } from "../../models/Form";
import Select from "../Select/Select";
import FormItemLayout from "./FormLayout/FormItemLayout/FormItemLayout";


interface Props extends FormProps {
  options: Option[]
}

const FormSelect = (props: Props) => {
  const { id, form, label, required = false, options } = props

  return (
    <FormItemLayout
      id={id}
      label={label}
      errorMessage={(form.errors[id] && form.touched[id]) ? form.errors[id]?.toString() : undefined}
      required={required}
    >
      <Select
        id={id}
        value={form.values[id]}
        onChange={(value) => form.setFieldValue(id, value)}
        onBlur={form.handleBlur}
        options={options}
      />
    </FormItemLayout>
  )
}

export default FormSelect