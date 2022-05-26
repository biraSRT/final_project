import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";


const FeaturedGamesLinux = () => {
    const navigate = useNavigate();
    const { games } = useContext(ApplicationContext);

    const gameClick = (index) => {
        navigate(`/linux/${index}`);
    }

    console.log(games);
    return((games !== null) ? <Main>
        {games.data[0].featured_linux.map((app, index) => {
            return (
              <Wrapper>
                <Container key={index} onClick={() => gameClick(index) }>
                  {app.discounted && <span>{`discount: ${app.discount_percent}%`}</span>}
                  <h1>{app.name}</h1>
                  <img src={app.header_image} alt="logo" />
                  {(app.final_price !== 0) ?<p>
                   Price: {app.final_price / 100} {app.currency}
                  </p>
                  : <p>Free</p>
                }
                </Container>
              </Wrapper>
            );
        })}
        </Main> 
        : <Spinner />
    )
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
    color:white;
    scroll-behavior: smooth;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  color: lightblue;
  width: 60%;
  border: 1px solid lightblue;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;

  span {
    font-size: 17px;
    width: 50%;
    position: relative;
    background: green;
    color: #fff;
    text-align: center;
    border-right-color: transparent;
  }

  transition-timing-function: ease-in;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }

  img{
    width: 100%;
  }
`;





export default FeaturedGamesLinux;
