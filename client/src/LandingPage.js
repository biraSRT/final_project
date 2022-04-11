import styled from "styled-components";
import pop from "./assets/pop.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <Wrapper>
            <Welcome>
                <h1> Welcome to SteamFinder</h1>
                <StyledLink to="/signup">Sign Up</StyledLink>
            </Welcome>
            <Image src={pop} alt="landingpage"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;

    overflow: hidden;

    /* @keyframes slideInLeft {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: 1s ease-out 0s 1 slideInLeft; */
`;

const Image = styled.img`
    filter: brightness(50%);
    z-index: -1;
    height: inherit;
    contain: content;
    width: 100vw;
`;


const Welcome = styled.div`
    position:absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color:white;
        font-size:8rem;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .05rem solid lightblue; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        animation: 
            typing 3.5s steps(40, end),
            blink-caret 1s step-end infinite;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 70% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        10% { border-color: lightblue; }
    }
`;

const StyledLink = styled(Link)`
    background-color: lightblue;
    color: white;
    font-size: 3rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 10px;
    transition-timing-function: ease-in;
    transition: 0.2s;
    cursor: pointer;
    text-decoration: none;
    &:hover{
       transform: scale(1.1);
    }
`;







export default LandingPage;