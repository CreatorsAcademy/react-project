import { styled } from "styled-components";

const FormContainer = styled.form`
  border: 1px solid;
  padding: 10px;
  margin-bottom: 20px;
`;

const FieldContainer = styled.div`
  padding-block: 10px;
`;

const Button = styled.button`
  padding: 6px;
  background: #80cbc4;
  border: none;
  border-radius: 6px;
  margin: 6px;
`;

export default function FormWithStyledComponents() {
  return (
    <FormContainer
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
      <div className="action-buttons">
        <Button type="button">Save Details</Button>
        <Button>Submit</Button>
      </div>
    </FormContainer>
  );
}
