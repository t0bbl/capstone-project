import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { useRouter } from "next/router";
import crypto from "crypto";
import useSWRMutation from "swr/mutation";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Form() {
  const router = useRouter();
  const { trigger } = useSWRMutation("/api/Shirts", fetcher);
  const searchID = crypto.randomBytes(16).toString("hex");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const shirtData = Object.fromEntries(formData);
    shirtData.searchID = searchID;
    shirtData.pic1 = {
      picSRC: previewPicture1,
      picSRCSlug: previewPictureSlug1,
      variant1: previewPicture1,
      variant1slug: previewPictureSlug1,
      variant2: previewPicture1,
      variant2slug: previewPictureSlug1,
      variant3: previewPicture1,
      variant3slug: previewPictureSlug1,
      variant4: previewPicture1,
      variant4slug: previewPictureSlug1,
    };
    shirtData.pic2 = {
      picSRC: previewPicture2,
      picSRCSlug: previewPictureSlug2,
      variant1: previewPicture2,
      variant1slug: previewPictureSlug2,
      variant2: previewPicture2,
      variant2slug: previewPictureSlug2,
      variant3: previewPicture2,
      variant3slug: previewPictureSlug2,
      variant4: previewPicture2,
      variant4slug: previewPictureSlug2,
    };
    shirtData.pic3 = {
      picSRC: previewPicture3,
      picSRCSlug: previewPictureSlug3,
      variant1: previewPicture3,
      variant1slug: previewPictureSlug3,
      variant2: previewPicture3,
      variant2slug: previewPictureSlug3,
      variant3: previewPicture3,
      variant3slug: previewPictureSlug3,
      variant4: previewPicture3,
      variant4slug: previewPictureSlug3,
    };
    shirtData.pic4 = {
      picSRC: previewPicture4,
      picSRCSlug: previewPictureSlug4,
      variant1: previewPicture4,
      variant1slug: previewPictureSlug4,
      variant2: previewPicture4,
      variant2slug: previewPictureSlug4,
      variant3: previewPicture4,
      variant3slug: previewPictureSlug4,
      variant4: previewPicture4,
      variant4slug: previewPictureSlug4,
    };
    fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchID: shirtData.searchID,
        keywordOne: shirtData.keywordOne,
        keywordTwo: shirtData.keywordTwo,
        keywordThree: shirtData.keywordThree,
      }),
    });
    trigger(shirtData);
    router.push(`/ChooseFour/${searchID}`);
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="keywordOne">First keyword</label>
      <Input
        name="keywordOne"
        id="keywordOne"
        type="text"
        placeholder="FIRST"
        aria-label="input for the first keyword"
        required
      />
      <label htmlFor="keywordTwo">Second keyword</label>
      <Input
        name="keywordTwo"
        id="keywordTwo"
        type="text"
        placeholder="SECOND"
        aria-label="input for the second keyword"
        required
      />
      <label htmlFor="keywordThree">Third keyword</label>
      <Input
        name="keywordThree"
        id="keywordThree"
        type="text"
        placeholder="THIRD"
        aria-label="input for the third keyword"
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
  label {
    display: none;
  }
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
