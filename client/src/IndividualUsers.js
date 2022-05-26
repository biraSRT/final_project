import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import profile from "./assets/profile.jpg";

const IndividualUsers = () => {
    const { uid } = useParams();
    const { users } = useContext(ApplicationContext);

    return (
      <Wrapper>
        <img src={profile} alt="profile" />
        <h1>{users[uid].username}</h1>
        <p>{users[uid].email}</p>
      </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e;
    color: lightblue;
    height: 65vh;
    width: 100%;

    img{
        width: 30%;
    }
`;


export default IndividualUsers;