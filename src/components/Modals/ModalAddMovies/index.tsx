import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Inputs/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iGetEditMovie } from "../../../providers/MoviesContext/@types";
import { MoviesContext } from "../../../providers/MoviesContext";
import { StyledModal } from "./style";
import { UserContext } from "../../../providers/UserContext";

const formSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  genre: yup.string().required("Genero obrigatório"),
  release: yup
    .string()
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{4})$/,
      "O formato da data deve ser dd/mm/aaaa"
    )
    .required("Data de lançamento obrigatória"),
  duration: yup.string().required("Duração obrigatória"),
  cover: yup.string().required("Capa obrigatória"),
  synopsis: yup.string().required("Sinopse obrigatória"),
  classification: yup.string().required("Classificação obrigatória"),
});

export const ModalAddMovie = () => {
  const { setModalAddOpen, addMovie } = useContext(MoviesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iGetEditMovie>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const submit = (data: iGetEditMovie) => {
    addMovie(data);
  };

  return (
    <StyledModal>
      <form onSubmit={handleSubmit(submit)}>
        <h1> Editar Filme</h1>
        <button type="button" onClick={() => setModalAddOpen(false)}>
          X
        </button>
        <Input
          label="Nome do filme"
          type="text"
          id="name"
          placeholder="Digite o nome aqui"
          register={register("name")}
          errors={errors.name?.message}
        ></Input>
        <Input
          label="Categoria"
          type="text"
          id="genre"
          placeholder="Digite a categoria aqui"
          register={register("genre")}
          errors={errors.genre?.message}
        ></Input>
        <Input
          label="Data de Lançamento"
          type="text"
          id="release"
          placeholder="Digite a data aqui"
          register={register("release")}
          errors={errors.release?.message}
        ></Input>
        <Input
          label="Duração"
          type="text"
          id="duration"
          placeholder="Digite a duração aqui"
          register={register("duration")}
          errors={errors.duration?.message}
        ></Input>
        <Input
          label="Capa"
          type="text"
          id="cover"
          placeholder="Coloque o link da capa aqui"
          register={register("cover")}
          errors={errors.cover?.message}
        ></Input>
        <Input
          label="Classificação"
          type="text"
          id="classification"
          placeholder="Digite a classificação aqui"
          register={register("classification")}
          errors={errors.classification?.message}
        ></Input>
        <label htmlFor="synopsis">Sinopse</label>
        <textarea id="synopsis" {...register("synopsis")}></textarea>
        <button type="submit"> Enviar </button>
      </form>
    </StyledModal>
  );
};

export default ModalAddMovie;
