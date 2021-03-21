// yup
import * as yup from "yup";

// ------------------------------
const errorRequired = "Campo obrigatório";

export const schemaLogin = yup.object().shape({
  email: yup.string().email().required(errorRequired),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .required(errorRequired),
});

export const schemaRegister = yup.object().shape({
  email: yup.string().email("Formato ***@***").required(errorRequired),
  password: yup
    .string()
    .min(6, "Senha deve ter 6 dígitos, no mínimo")
    .required(errorRequired),
  name: yup.string().required(errorRequired),
  bio: yup.string().required(errorRequired),
  contact: yup.string().required(errorRequired),
  course_module: yup.string().required(errorRequired),
});
