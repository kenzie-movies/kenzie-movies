import { iInputProps } from "./@types";
import { InputStyle } from "./style";
import { FiAlertCircle } from "react-icons/fi";

const Input = ({
  label,
  type,
  id,
  placeholder,
  register,
  errors,
}: iInputProps) => {
  return (
    <InputStyle>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      <span>
        {errors && (
          <>
            <FiAlertCircle /> {errors}
          </>
        )}
      </span>
    </InputStyle>
  );
};

export default Input;
