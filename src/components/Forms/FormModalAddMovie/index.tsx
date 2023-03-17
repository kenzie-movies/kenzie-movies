import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { MoviesContext } from "../../../providers/MoviesContext";
import { iGetEditMovie } from "../../../providers/MoviesContext/@types";
import { UserContext } from "../../../providers/UserContext";
import { motion } from "framer-motion";
import Input from "../../Inputs/Input";

export const FormModalAddMovie = () => {
  const { setModalMovie, addMovie } = useContext(MoviesContext);
  const { user } = useContext(UserContext);
  const userId = user?.id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iGetEditMovie>({
    resolver: yupResolver(schema),
  });

  const submit = (data: iGetEditMovie) => {
    const movieData = { ...data, userId: userId, verified: false };
    addMovie(movieData);
    reset();
  };

  return (
    <div className="modal">
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ duration: 1 }}>
        <div className="titleForm">
          <h4>Adicione seu filme favorito</h4>
          <span onClick={() => setModalMovie(false)}>X</span>
        </div>
        <div className="boxForm">
          <form onSubmit={handleSubmit(submit)}>
            <Input
              label="Nome do filme"
              type="text"
              id="name"
              placeholder="Digite o nome do filme"
              register={register("name")}
              errors={errors.name?.message}
            />

            <Input
              label="Gênero"
              type="text"
              id="genre"
              placeholder="Digite o gênero do filme"
              register={register("genre")}
              errors={errors.genre?.message}
            />

            <Input
              label="Data de lançamento"
              type="text"
              id="release"
              placeholder="Digite a data de lançamento do filme"
              register={register("release")}
              errors={errors.release?.message}
            />

            <Input
              label="Duração"
              type="text"
              id="duration"
              placeholder="Digite o tempo de duração do filme"
              register={register("duration")}
              errors={errors.duration?.message}
            />

            <Input
              label="Capa"
              type="text"
              id="cover"
              placeholder="Insira a url da capa "
              register={register("cover")}
              errors={errors.cover?.message}
            />

            <Input
              label="Banner"
              type="text"
              id="banner"
              placeholder="Insira a url do banner "
              register={register("banner")}
              errors={errors.banner?.message}
            />

            <Input
              label="Classificação"
              type="text"
              id="classification"
              placeholder="Insira a  faixa etária"
              register={register("classification")}
              errors={errors.classification?.message}
            />

            <label htmlFor="synopsis">Sinopse</label>
            {errors.synopsis?.message}
            <textarea
              id="synopsis"
              placeholder="Insira a descrição do filme "
              {...register("synopsis")}
            />

            <p>
              Obs.: Sua solicitação passará por uma avaliação antes de ser
              pulblicada.
            </p>

            <button type="submit">Solicitar filme</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
