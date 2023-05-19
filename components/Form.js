import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { useRouter } from "next/router";
import crypto from "crypto";
import useSWRMutation from "swr/mutation";
import { useAtom } from "jotai";
import { loading } from "../store/isLoading";
import Loading from "./Loading";
import Header from "./Header";

async function sendRequest(url, { arg: shirtData }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shirtData),
  });
  const { status } = await response.json();
}

export default function Form() {
  const router = useRouter();
  const { trigger } = useSWRMutation("/api/Shirts", sendRequest);
  const [isLoadingState, setIsLoadingState] = useAtom(loading);
  const searchID = crypto.randomBytes(16).toString("hex");

  async function handleSubmit(event) {
    setIsLoadingState(true);

    event.preventDefault();
    const formData = new FormData(event.target);
    const shirtData = Object.fromEntries(formData);
    shirtData.searchID = searchID;

    await trigger(shirtData);

    await fetch("/api/openai", {
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

    setIsLoadingState(false);
    router.push(`/ChooseFour/${searchID}`);
  }

  if (isLoadingState) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
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
  width: 100%;
  height: 100%;
  gap: 0.5rem;
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
  box-shadow: 2px 2px 5px cyan;
  background-color: transparent;
  color: cyan;
  width: 90%;
  margin: 0 5%;
  text-align: center;
  border: none;
  transform: skew(10deg);

  ::placeholder {
    color: cyan;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
    color: lightcyan;
    box-shadow: 2px 2px 10px cyan;
  }
`;
