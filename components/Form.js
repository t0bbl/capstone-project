import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export default function Form() {
  return (
    <FormContainer>
      <Input id="firstKeyword" name="firstKeyword" type="text" value="FIRST" />
      <Input
        id="secondKeyword"
        name="secondKeyword"
        type="text"
        value="SECOND"
      />
      <Input id="thirdKeyword" name="thirdKeyword" type="text" value="THIRD" />
    </FormContainer>
  );
}
