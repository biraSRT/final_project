import styled from "styled-components";
import { AiFillInstagram, AiFillTwitterCircle  } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Wrapper>
            <Container to="/" >
                <Title1>Steam</Title1><Title2>Finder</Title2>
            </Container>
            <p>Copyright © 2022 Logo. All Rights Reserved</p>
            <Container2>
                <h2> <AiFillInstagram size="2rem"/> </h2>
                <h2> <AiFillTwitterCircle size="2rem"/> </h2>
            </Container2>

        </Wrapper>
    )
};

const Wrapper = styled.div`
    height: 140px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #bdd4e7;
    background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
    color: white;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;

    p{
        font-size: 1rem;
    }
`;

const Container = styled(Link)`
    display:flex;
    flex-direction: row;
    text-decoration: none;
`;

const Title1 = styled.h1`
    color: lightblue;
`;

const Title2 = styled.h1`
    color: white;
`;

const Container2 = styled.div`
    display:flex;
    flex-direction: row;
    gap: 2rem;

    h2{
        transition-timing-function: ease-in;
        transition: 0.2s;
        &:hover{
            cursor: pointer;
            color: lightblue;
        }
    }
    
`;

export default Footer;