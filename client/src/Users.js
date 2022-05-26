import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ApplicationContext } from "./ApplicationContext";
import profile from "./assets/profile.jpg";

const Users = () => {
    const { users } = useContext(ApplicationContext);
    const navigate = useNavigate();

    const handleClick = (index) => {
        navigate(`/users/${index}`);
    };
    
    return (
        <Wrapper>
            {users.map((user, index) => {
                return (
                    <Container key={index} onClick={() => handleClick(index) }>
                        <img src={profile} alt="profile" />
                        <h1>{user.username}</h1>
                        <p>{user.email}</p>
                    </Container>
                );
            })}
        </Wrapper>
    )
};

const Container = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  color: lightblue;
  width: 70%;
  border-radius: 5px;
  border: 1px solid lightblue;
  transition-timing-function: ease-in;
  transition: 0.3s;
  height: 100%;
  flex-wrap: wrap;
  &:hover {
    transform: scale(1.1);
  }

  img{
    width: 100%;
  }
`;

const Wrapper = styled.div`
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e;
    color: lightblue;
    height: 100%;
`;

export default Users;