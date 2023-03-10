import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { iLoginUser } from "../../../providers/UserContext/@types";
import Input from "../../Inputs/Input";
import InputPassword from "../../Inputs/InputPassword";
import { LoginFormStyle } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUser>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const { userLogin } = useContext(UserContext);

  return (
    <LoginFormStyle onSubmit={handleSubmit(userLogin)}>
      <h2>Login</h2>
      <Input
        label="Email"
        type="text"
        id="email"
        placeholder="Digite seu email aqui"
        register={register("email")}
        errors={errors.email?.message}
      />
      <InputPassword
        label="Senha"
        id="password"
        placeholder="Digite sua senha aqui"
        register={register("password")}
        errors={errors.password?.message}
      />

      <button type="submit">Entrar</button>
      <p>Ainda não possui um cadastro?</p>
      <Link to={"/register"}>Cadastre-se</Link>
    </LoginFormStyle>
  );
};

export default LoginForm;
