import { FormikValues } from 'formik';

export interface FormProps {
  id: string;
  form: FormikValues;
  label: string;
  required?: boolean;
}