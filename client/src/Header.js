import styled from 'styled-components';

const Header = () => {
    return(
        <Wrapper>
            <TittleContainer>
                <Title1>Steam</Title1><Title2>Finder</Title2>
            </TittleContainer>
            
        </Wrapper>
    )
};

const Title1 = styled.h1`
    color: lightblue;
`;

const Title2 = styled.h1`
    color: white;
`;

const TittleContainer = styled.div`
    display: flex;
    justify-content: center;
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


export default Header;