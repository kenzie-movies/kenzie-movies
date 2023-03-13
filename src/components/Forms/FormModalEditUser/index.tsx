import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { MoviesContext } from "../../../providers/MoviesContext";
import { iUser } from "../../../providers/UserContext/@types";
import { motion } from "framer-motion";
import { UserContext } from "../../../providers/UserContext";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="modal">
      <div className="titleForm">
        <h4>Editar usuário</h4>
        <span onClick={() => setModalUser(false)}>X</span>
      </div>
      <div className="boxForm">
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Nome</label>
          {errors.name?.message}
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome "
            {...register("name")}
          />

          <label htmlFor="avatarLink">Foto do perfil</label>
          {errors.avatarLink?.message}
          <input
            id="avatarLink"
            type="text"
            placeholder="Insira url do seu perfil"
            {...register("avatarLink")}
          />

          <label htmlFor="name">Email</label>
          {errors.email?.message}
          <input
            id="release"
            type="text"
            placeholder="Digite seu email "
            {...register("email")}
          />

          <button type="submit">Atualizar</button>
        </form>
      </div>
    </motion.div>
  );
};
