import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { MoviesContext } from "../../../providers/MoviesContext";
import { iUser } from "../../../providers/UserContext/@types";
import { motion } from "framer-motion";
import { UserContext } from "../../../providers/UserContext";
import Input from "../../Inputs/Input";

export const FormModalEditUser = () => {
  const { setModalUser } = useContext(MoviesContext);
  const { user, userUpdate, updateUser, setUpdateUser } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iUser>({
    resolver: yupResolver(schema),

    defaultValues: {
      name: user?.name,
      avatarLink: user?.avatarLink,
      email: user?.email,
    },
  });

  const submit = (formData: iUser) => {
    const userInfoData = { ...formData, id: user!.id, isAdmin: false };
    setModalUser(false);
    userUpdate(userInfoData);
    localStorage.setItem("@KenzieMovies:User", JSON.stringify(userInfoData));
    setUpdateUser(!updateUser);
  };

  return (
    <div className="modal">
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ duration: 1 }}>
        <div className="titleForm">
          <h4>Editar usuário</h4>
          <span onClick={() => setModalUser(false)}>X</span>
        </div>
        <div className="boxForm">
          <form onSubmit={handleSubmit(submit)}>
            <Input
              label="Nome"
              type="text"
              id="name"
              placeholder="Digite seu nome aqui"
              register={register("name")}
              errors={errors.name?.message}
            />

            <Input
              label="Foto do Perfil"
              type="text"
              id="avatarLink"
              placeholder="Coloque o link do seu avatar aqui"
              register={register("avatarLink")}
              errors={errors.avatarLink?.message}
            />

            <Input
              label="Email"
              type="text"
              id="email"
              placeholder="Digite seu email aqui"
              register={register("email")}
              errors={errors.email?.message}
            />

            <button type="submit">Atualizar</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
