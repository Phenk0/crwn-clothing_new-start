import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
import { type } from "os";

const defaultFormFields = {
  email: "",
  password: "",
};
/////////////////////////to catch error.code
export function isMyError(error: any): error is MyError {
  return typeof error.code === "string";
}
type MyError = {
  code: string;
};
///////////////////////

const SignInForm = () => {
  const [formField, setFormFields] = useState(defaultFormFields);
  const { email, password } = formField;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (e: unknown) {
      if (isMyError(e))
        switch (e.code) {
          case "auth/wrong-password":
            alert("wrong password");
            break;
          case "auth/user-not-found":
            alert("user not found");
            break;
          default:
            alert("some error");
        }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formField, [name]: value });
  };

  const signInWithGoogle = async () => dispatch(googleSignInStart());

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
