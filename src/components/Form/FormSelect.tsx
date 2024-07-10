import { Option } from "../../models/Common";
import { FormProps } from "../../models/Form";
import Select from "../Select/Select";
import FormItemLayout from "./FormLayout/FormItemLayout/FormItemLayout";
import { getFormInputError } from "./formUtils";


interface Props extends FormProps {
  options: Option[]
}

const FormSelect = (props: Props) => {
  const { id, form, label, required = false, options } = props

  return (
    <FormItemLayout
      id={id}
      label={label}
      errorMessage={getFormInputError(id, form)}
      required={required}
    >
      <Select
        id={id}
        value={form.values[id]}
        onChange={(value) => form.setFieldValue(id, value)}
        onBlur={(e) => {
          form.handleBlur(e)
          form.setFieldTouched(id, true)
        }}
        options={options}
        hasError={!!getFormInputError(id, form)}
      />
    </FormItemLayout>
  )
}

export default FormSelect