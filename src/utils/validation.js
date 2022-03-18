import * as yup from "yup";

const loginValidation = yup.object({
  email: yup
    .string("Enter your email")
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .required("Password is required")
  ,
});

const signUpValidation = yup.object({
  email: yup
    .string("Enter your email")
    .email("Invalid email address")
    .required("Email is required"),
  firstName: yup
    .string("Enter your first name")
    .required("Password is required")
  ,
  lastName: yup
    .string()
    .required("Enter your last name")
  ,
  dateOfBirthDay: yup.date().required("Please, enter your date of birthday"),
  password: yup
    .string("Enter your password")
    .min(6, "Password must be more than 6 characters")
    .max(20, "Password cannot exceed more than 18 characters")
    .required("Password is required")
    .matches(
      "([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*",
      "Password must be more than 6 characters and contains letters and numbers"
    ),
  confirmpassword: yup
    .string()
    .required("Please, confirm your password")
    .oneOf(
      [yup.ref("password"), null],
      "Passwords mismatch"
    )
});

export { loginValidation, signUpValidation }