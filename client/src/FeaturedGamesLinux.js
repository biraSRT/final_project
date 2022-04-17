import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import styled from "styled-components";

const FeaturedGamesLinux =  () => {
    const { games } = useContext(ApplicationContext);
    return((games !== null ) && <div>
        {games.data[0].featured_linux.map((app, index) => {
            return (
              <Wrapper>
                <Container key={index}>
                  <h1>{app.name}</h1>
                  <img src={app.header_image} alt="logo" />
                  <p>
                    Current Price: {app.final_price / 100} {app.currency}
                  </p>
                </Container>
              </Wrapper>
            );
        })}
        </div>
    )
};

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
    background-color: #1E1E1E;
    color: lightblue;
    width: 30%;
    border: 1px solid lightblue;
    padding-bottom: 2rem;
    margin: 2rem;
    border-radius: 5px;

    transition-timing-function: ease-in;
    transition: 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`;


export default  FeaturedGamesLinux;