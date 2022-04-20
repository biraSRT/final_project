import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import styled from "styled-components";

const FeaturedGamesMac = () => {
  const { games } = useContext(ApplicationContext);
  return (
    games !== null && (
      <Main>
        {games.data[0].featured_mac.map((app, index) => {
          return (
            <Wrapper>
              <Container key={index}>
                <h1>{app.name}</h1>
                <img src={app.header_image} alt="logo" />
                <p>
                  Price: {app.final_price / 100} {app.currency}
                </p>
              </Container>
            </Wrapper>
          );
        })}
      </Main>
    )
  );
};

const Main = styled.div`
  background-color: #1e1e1e;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #1e1e1e;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  color: white;
  scroll-behavior: smooth;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  color: lightblue;
  width: 100%;
  border: 1px solid lightblue;
  margin: 1rem;
  border-radius: 5px;

  transition-timing-function: ease-in;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default FeaturedGamesMac;
