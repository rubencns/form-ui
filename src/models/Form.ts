import { FormikProps } from 'formik';

export interface FormFields {
  [key: string]: string;
}

export interface FormProps {
  id: string;
  form: FormikProps<FormFields>;
  label: string;
  required?: boolean;
}