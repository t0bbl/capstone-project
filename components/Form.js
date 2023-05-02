import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { useRouter } from "next/router";
import crypto from "crypto";
import useSWRMutation from "swr/mutation";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  const { status } = await response.json();
  console.log(status);
}

export default function Form() {
  const { trigger } = useSWRMutation("/API/shirts/index.js", sendRequest);
  const router = useRouter();

  const id = crypto.randomBytes(16).toString("hex");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const shirtData = Object.fromEntries(formData);
    trigger("/API/shirts/index.js", shirtData);
    router.push("/ChooseFour/${id}");
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        id={id}
        name="firstKeyword"
        type="text"
        placeholder="FIRST"
        required
      />
      <Input
        id={id}
        name="secondKeyword"
        type="text"
        placeholder="SECOND"
        required
      />
      <Input
        id={id}
        name="thirdKeyword"
        type="text"
        placeholder="THIRD"
        required
      />
      <StyledButton type="submit" generate>
        Generate
      </StyledButton>
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
