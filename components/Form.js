import styled from "styled-components";

const FormContainer = styled.form`
  gap: 0.5rem;
  background-color: yellow;
  color: teal;
  display: flex;
  flex-direction: column;
  margin: 50% 0%;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 3px solid black;
  border-radius: 0.1rem;
  background-color: teal;
  color: yellow;
  width: 90%;
  margin: 0 5%;
  text-align: center;
  border: 2px solid teal;
  transform: skew(10deg);

  ::placeholder {
    color: yellow;
  }
  &:focus {
    outline: none;
    color: indigo;
    box-shadow: 2px 2px 5px indigo;
  }
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
