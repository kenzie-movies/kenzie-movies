import * as yup from "yup"

export const schema = yup
  .object({
    name:yup.string().required("Você precisa inserir seu nome"),
    avatarLink: yup.string().required("Você precisa inserir uma url válida"),
    email: yup.string().email().required("Você precisa inserir seu email"),
 
  })
  .required()