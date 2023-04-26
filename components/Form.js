import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    router.push("https://i.imgur.com/7KpCS0Y.jpg");
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        id="firstKeyword"
        name="firstKeyword"
        type="text"
        placeholder="FIRST"
        required
      />
      <Input
        id="secondKeyword"
        name="secondKeyword"
        type="text"
        placeholder="SECOND"
        required
      />
      <Input
        id="thirdKeyword"
        name="thirdKeyword"
        type="text"
        placeholder="THIRD"
        required
      />
      <StyledButton type="submit"> Generate </StyledButton>
    </FormContainer>
  );
}

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
  background-image: linear-gradient(135deg, teal 40%, indigo);
  color: yellow;
  width: 90%;
  margin: 0 5%;
  text-align: center;
  border: none;
  transform: skew(10deg);

  ::placeholder {
    color: yellow;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
    color: yellow;

    box-shadow: 2px 2px 5px indigo;
  }
`;
