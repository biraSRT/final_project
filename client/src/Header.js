import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiPen, BiDoorOpen } from "react-icons/bi";

const Header = () => {
    return(
        <Wrapper>
            <TittleContainer to="/">
                <Title1>Steam</Title1><Title2>Finder</Title2>
            </TittleContainer>

            <Container>
                <StyledLink to="/signup">
                    <h2><BiPen /> Sign Up</h2>
                </StyledLink>

                <StyledLink to="signin">
                    <h2><BiDoorOpen/> Sign In</h2>
                </StyledLink>
            </Container>
        </Wrapper>
    )
};

const Title1 = styled.h1`
    color: lightblue;
`;

const Title2 = styled.h1`
    color: white;
`;

const TittleContainer = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
`;

const Wrapper = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    background-color: #bdd4e7;
    background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);

`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1rem;

    h2{
        padding-left: 20px;
        transition-timing-function: ease-in;
        transition: 0.2s;
        &:hover{
            color: #2832c2;
        }
    }
`;

const Container = styled.div`
    display:flex;
    flex-direction: row;
`;


export default Header;