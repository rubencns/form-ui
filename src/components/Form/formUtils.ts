import { FormikValues } from "formik";

export const getFormInputError = (id: string, form: FormikValues): string | undefined => {
  return (form.errors[id] && form.touched[id])
    ? form.errors[id]?.toString()
    : undefined;
};