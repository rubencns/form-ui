import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from 'yup';
import FormDateInput from "./components/Form/FormDateInput";
import FormInput from "./components/Form/FormInput";
import FormLayout from "./components/Form/FormLayout/FormLayout";
import FormSelect from "./components/Form/FormSelect";
import { options } from "./mock";

const FormPage: FC = () => {

  const form = useFormik({
    initialValues: {
      textInput: '',
      dateInput: '',
      selectInput: '',
    },
    validationSchema: Yup.object({
      textInput: Yup.string().required('Text input is required'),
      dateInput: Yup.string().required('Date input is required'),
      selectInput: Yup
        .string()
        .oneOf(options.map((option) => option.value))
        .required('Select input is required'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div className="form-page">
      <header>
        <h1>Form</h1>
      </header>
      <FormLayout>
        <FormInput
          id="textInput"
          label="Text input"
          required
          form={form}
        />
        <FormDateInput
          id="dateInput"
          label="Date input"
          required
          form={form}
          showTime
        />
        <FormSelect
          id="selectInput"
          label="Select input"
          required
          form={form}
          options={options}
        />
        // checkbox
        // radio button
        // switch
        <button type="submit" onClick={e => {
          e.preventDefault()
          form.handleSubmit()
        }}>
          Submit
        </button>
      </FormLayout>
    </div >
  )
}

export default FormPage