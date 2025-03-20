import { styled } from "styled-components";
import Field from "./Field";

const FormContainer = styled.form`
  border: 1px solid;
  padding: 10px;
  margin-bottom: 20px;
`;

const FieldContainer = styled.div`
  padding-block: 10px;

  label {
    font-weight: 600;
  }
`;

const Button = styled.button`
  padding: 6px;
  background: ${(props) => (props.nobgColor ? "transparent" : "#80cbc4")};
  border: none;
  border-radius: 6px;
  margin: 6px;
`;

const RedButton = styled(Button)`
  background: red;
`;

export default function FormWithStyledComponents() {
  return (
    <FormContainer
      className="form-container"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <FieldContainer>
        <label htmlFor="firstname">First Name </label>
        <input type="text" name="firstname" />
      </FieldContainer>
      <FieldContainer>
        <label htmlFor="lastname">Last Name </label>
        <input type="text" name="lastname" />
      </FieldContainer>
      <Field name="place" label="Place" />
      <div className="action-buttons">
        <RedButton nobgColor={true} type="button">
          Save Details
        </RedButton>
        <Button>Submit</Button>
      </div>
    </FormContainer>
  );
}

/* function Button(props) {
  props.nobgColor;
} */
