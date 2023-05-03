import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { useRouter } from "next/router";
import crypto from "crypto";
import useSWRMutation from "swr/mutation";

const previewPicture =
  "https://png.pngtree.com/png-clipart/20191120/original/pngtree-load-the-png-image_5054175.jpg";

async function sendRequest(url, { arg: shirtData }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shirtData),
  });
  const { status } = await response.json();
  console.log(status + " from sendRequest");
}

export default function Form() {
  const router = useRouter();
  const { trigger } = useSWRMutation("/api/Shirts", sendRequest);
  const searchID = crypto.randomBytes(16).toString("hex");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const shirtData = Object.fromEntries(formData);
    shirtData.searchID = searchID;
    shirtData.picSRC1 = previewPicture;
    shirtData.picSRC2 = previewPicture;
    shirtData.picSRC3 = previewPicture;
    shirtData.picSRC4 = previewPicture;
    trigger(shirtData);
    router.push(`/ChooseFour/${searchID}`);
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input name="keywordOne" type="text" placeholder="FIRST" required />
      <Input name="keywordTwo" type="text" placeholder="SECOND" required />
      <Input name="keywordThree" type="text" placeholder="THIRD" required />
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
