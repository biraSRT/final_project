import styled from "styled-components";
import { Link } from "react-router-dom";

const SecondHeader = () => {
    return (<Main>
        <Container>
            <Links to = "/comments" >Comments</Links>
            {/* <h1>Today's Featured Games:</h1> */}
            {/* <h3>Platform: Windows</h3> */}
        </Container>
        <Container>
            <Links to = "/users" >Users</Links>
        </Container>
    </Main>
        
    )
};

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100%;
    width: 100%;
    background-color: #1e1e1e;
`;

const Container = styled.div`
    background-color: #1E1E1E;
    color: lightblue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.1rem;

`;

const Links = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: lightblue;
  font-size: 1.1rem;
  border: 1px solid lightblue;
  padding: 1rem;
  border-radius: 8px;

  transition-timing-function: ease-in;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default SecondHeader;