import * as yup from "yup";

export const AuthFormSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
});
