import styled from "styled-components";
import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const IndividualGame = () => {
    const { games } = useContext(ApplicationContext);
    const { gameNumber } = useParams();
    window.scrollTo(0, 0);

    return (games !== null) ? (
      <Main>
        <h1>{games.data[0].featured_win[gameNumber].name}</h1>
        <img src={games.data[0].featured_win[gameNumber].header_image} alt="logo" />
        {(games.data[0].featured_win[gameNumber].final_price !== 0) ?<p>
                   Price: {games.data[0].featured_win[gameNumber].final_price / 100} {games.data[0].featured_win[gameNumber].currency}
                  </p>
                  : <p>Free</p>
                }
        <Section>
        <a href={`https://store.steampowered.com/app/${games.data[0].featured_win[gameNumber].id}/`} target="_blank" rel="noreferrer">Visit Steam</a>
        </Section>
      </Main>
    ) : (
      <Spinner />
    );
};

const Main = styled.div`
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    color: lightblue;
    height: 100vh;
`;

const Section = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  gap: 15rem;

  div{
    transition-timing-function: ease-in;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
      color:yellow;
    }  
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-decoration: none;
    color: lightblue;
    font-size: 1.2rem;
    border: 1px solid lightblue;
    border-radius: 5px;
    transition-timing-function: ease-in;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default IndividualGame;