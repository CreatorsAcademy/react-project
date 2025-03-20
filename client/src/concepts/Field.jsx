import { styled } from "styled-components";

const Label = styled.label`
  margin-right: 3px;
`;

function Field({ name, label }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input type="text" name={name} />
    </div>
  );
}

export default Field;
