import CommentSection from "./CommentSection";
import styled from "styled-components";

const Comments = () => {
    return (
       <Main>
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
    width: 100%;
    height: 100vh;

    p{
        font-size: 0.9rem;
        margin-left: 20px;
        
    }
`;

export default  Comments;