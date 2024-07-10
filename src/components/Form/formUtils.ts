import { FormikErrors, FormikTouched } from "formik";

interface FormType {
  errors: FormikErrors<{ [key: string]: string }>;
  touched: FormikTouched<{ [key: string]: boolean }>;
}

export const getFormInputError = (id: string, form: FormType): string | undefined => {
  return (form.errors[id] && form.touched[id])
    ? form.errors[id]?.toString()
    : undefined;
};