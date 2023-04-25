import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  background-color: yellow;
  color: teal;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  background-color: yellow;
  color: teal;
  width: 90%;
  text-align: center;
`;

export default function Form() {
  return (
    <FormContainer>
      <Input
        id="firstKeyword"
        name="firstKeyword"
        type="text"
        placeholder="FIRST"
      />
      <Input
        id="secondKeyword"
        name="secondKeyword"
        type="text"
        placeholder="SECOND"
      />
      <Input
        id="thirdKeyword"
        name="thirdKeyword"
        type="text"
        placeholder="THIRD"
      />
    </FormContainer>
  );
}
