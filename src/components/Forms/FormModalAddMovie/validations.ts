import * as yup from "yup"

export const schema = yup
  .object({
    name:yup.string().required("Você precisa inserir o nome do filme"),
    genre: yup.string().required("Você precisa inserir uma categoria"),
    release: yup.string().required("Qual a data do lançamento?"),
    duration: yup.string().required("Você precisa inserir o tempo de duração"),
    cover: yup.string().required("Você precisa inserir a url da capa"),
    synopsis: yup.string().required("Você precisa inserir a sinopse"),
 
  })
  .required()