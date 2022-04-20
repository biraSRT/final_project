import styled from "styled-components"
import spinner from "./assets/spinner.gif"

const Spinner = () => {
    return(
        <Wrapper>
            <img src={spinner} alt="spinner" />
        </Wrapper>
    )

};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1e1e1e;
`;

export default Spinner;