import CommentSection from "./CommentSection";
import styled from "styled-components";

const Comments = () => {
    return (
       <Main>
            <p>What do you think about today's featured games?</p>
              <CommentSection />
       </Main>
    )
};

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: lightblue;
    background-color: #1e1e1e;
    height: 65vh;

    p{
        font-size: 1.2rem;
    }
`;

export default  Comments;