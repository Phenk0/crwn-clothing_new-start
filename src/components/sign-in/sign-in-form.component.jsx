import {
  signInWithGooglePopup,
  signInWithExistingEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./sign-in-form.styles";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormFields] = useState(defaultFormFields);
  const { email, password } = formField;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithExistingEmailAndPassword(email, password);

      resetFormFields();
    } catch (e) {
      console.log(e.code);
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formField, [name]: value });
  };

  const signInWithGoogle = async () => await signInWithGooglePopup();

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
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
