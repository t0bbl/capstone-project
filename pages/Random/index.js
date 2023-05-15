import styled from "styled-components";
import Header from "../../components/Header";
import RandomPicture from "../../components/RandomPicture";
import { css } from "styled-components";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PreviewPage() {
  const { data: shirts, isLoading, error } = useSWR(`/api/GetRandom`, fetcher);

  if (isLoading || !shirts) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  return (
    <>
      <Header />
      <Container>
        {shirts.map((shirt) => (
          <RandomPicture key={shirt._id} src={shirt.picSrcs} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10vw;
  gap: 20vw;

  ${(props) =>
    props.bottomButtons &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    `}
`;
