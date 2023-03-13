import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";
import { iRegisterUser } from "../../../providers/UserContext/@types";
import Input from "../../Inputs/Input";
import InputPassword from "../../Inputs/InputPassword";
import { RegisterFormStyle } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "A senha de confirmação deve ser igual a senha"
    )
    .required("Confirmação de senha obrigatória"),
  avatarLink: yup.string().required("Link do avatar obrigatório"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const { userRegister } = useContext(UserContext);

  return (
    <RegisterFormStyle onSubmit={handleSubmit(userRegister)}>
      <h2>Cadastro</h2>
      <Input
        label="Nome"
        type="text"
        id="name"
        placeholder="Digite seu nome aqui"
        register={register("name")}
        errors={errors.name?.message}
      />
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
      <InputPassword
        label="Confirmar senha"
        id="passwordConfirmation"
        placeholder="Digite sua confirmação de senha aqui"
        register={register("passwordConfirmation")}
        errors={errors.passwordConfirmation?.message}
      />
      <Input
        label="Avatar"
        type="text"
        id="avatarLink"
        placeholder="Coloque o link do seu avatar aqui"
        register={register("avatarLink")}
        errors={errors.avatarLink?.message}
      />

      <button type="submit">Cadastrar</button>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
