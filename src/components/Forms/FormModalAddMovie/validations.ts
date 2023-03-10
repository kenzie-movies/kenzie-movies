import * as yup from "yup"

export const schema = yup
  .object({
    name:yup.string().required("Você precisa inserir o nome do filme"),
    genre: yup.string().required("Você precisa inserir uma categoria"),
    release: yup
    .string()
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{4})$/,
      "O formato da data deve ser dd/mm/aaaa"
    )
    .required("Data de lançamento obrigatória"),
    duration: yup.string().required("Você precisa inserir o tempo de duração"),
    cover: yup.string().required("Você precisa inserir a url da capa"),
    synopsis: yup.string().required("Você precisa inserir a sinopse"),
    classification: yup.string().required("Você precisa inserir a faixa etária"),
 
  })
  .required()