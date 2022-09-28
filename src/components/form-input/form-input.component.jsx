import "./form-input.styles";
import { FormInputLabel, Group, InputForm } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <InputForm {...otherProps} />
      {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
    </Group>
  );
};
export default FormInput;
