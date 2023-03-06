import { UseFormRegisterReturn } from "react-hook-form";

export interface iInputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errors: string | undefined;
}
