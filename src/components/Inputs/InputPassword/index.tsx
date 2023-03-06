import { useState } from "react";
import { iInputPasswordProps } from "./@types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { InputPasswordStyle } from "./style";

const InputPassword = ({
  label,
  id,
  placeholder,
  register,
  errors,
}: iInputPasswordProps) => {
  const [typeInput, setTypeInput] = useState("password");
  const [hidePass, setHidePass] = useState(true);

  function handleHidePass() {
    if (typeInput === "password") {
      setHidePass(false);
      setTypeInput("text");
    } else if (typeInput === "text") {
      setHidePass(true);
      setTypeInput("password");
    }
  }

  return (
    <InputPasswordStyle>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          type={typeInput}
          id={id}
          placeholder={placeholder}
          {...register}
        />
        <button type="button" onClick={handleHidePass}>
          {hidePass ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
        </button>
      </div>
      <span>{errors}</span>
    </InputPasswordStyle>
  );
};

export default InputPassword;
