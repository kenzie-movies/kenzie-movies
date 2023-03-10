import { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./validations" 
import { MoviesContext } from "../../../providers/MoviesContext"
import { iGetMovies } from "../../../providers/MoviesContext/@types"


export const FormModalAddMovie = () => {
    const { setModalMovie } = useContext(MoviesContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<iGetMovies>({
        resolver: yupResolver(schema)
    })

    const submit = (formData:iGetMovies) => {
        // console.log(formData)
        reset()
    }
    
    return (
        <div className="modal">
            <div className="titleForm" >
                <h4>Adicione seu filme favorito</h4>
                <span onClick={() => setModalMovie(false)}>X</span>
            </div>
            <div className="boxForm">
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="name">Nome do filme</label>
                    {errors.name?.message}
                    <input id="name" type="text" placeholder="Digite o nome do filme "{...register("name")} />

                    <label htmlFor="name">Categoria</label>
                    {errors.genre?.message}
                    <input id="genre" type="text" placeholder="Digite a categoria do filme "{...register("genre")} />

                    <label htmlFor="name">Data de lançamento</label>
                    {errors.release?.message}
                    <input id="release" type="text" placeholder="Digite a categoria do filme "{...register("release")} />

                    <label htmlFor="name">Duração</label>
                    {errors.duration?.message}
                    <input id="duration" type="text" placeholder="Digite o tempo de duração "{...register("duration")} />

                    <label htmlFor="name">Capa</label>
                    {errors.cover?.message}
                    <input id="cover" type="text" placeholder="Insira a url da capa "{...register("cover")} />


                    <label htmlFor="name">Classificação</label>
                    {errors.classification?.message}
                    <input id="synopsis" placeholder="Insira a  faixa etária"{...register("classification")} />

                    <label htmlFor="name">Sinopse</label>
                    {errors.synopsis?.message}
                    <textarea id="synopsis" placeholder="Insira a descrição do filme "{...register("synopsis")} />

                    <p>Obs.: Sua solicitação passará por uma avaliação antes de ser pulblicada.</p>

                    <button type="submit">Solicitar filme</button>
                </form>
            </div>
        </div>
    )
}