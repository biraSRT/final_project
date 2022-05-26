import React from 'react';
import {Typography, TextField, Button } from '@material-ui/core';
import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const CommentSection = () => {
    const {comments, setComments, username, comment, setComment, users} = useContext(ApplicationContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      window.location.reload(true);
      setComments([...comments, { username: username, comment: comment }]);
      setComment("");

      fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          comment: comment,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setComments(data);
        });
    };

    const handleClick = (username) => {
      //find user with username
      users.map((user) => {
        if (user.username === username) {
            let i = users.indexOf(user);
          navigate(`/users/${i}`);
        }
      });
    };



    return (
        <div>
          <p>What do you think about today's featured games?</p>
            <OuterContainer>
                <InnerContainer>
                    <Typography variant="h6" gutterBottom>Comments</Typography>
                    {
                        comments.map((c, i) => (
                            <Typography key={i} gutterBottom variant="subtitle1">
                                <strong onClick={() => handleClick(c.username) } >{c.username}</strong>: {c.comment}
                            </Typography>
                        ))
                    }
                </InnerContainer>
                <div style={{width: '100%'}}>
                    <Typography variant="h6" gutterBottom>Add a comment</Typography>
                    <TextField
                        fullWidth
                        rows={4}
                        variant="outlined"
                        label="Comment"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        style={{backgroundColor: 'lightblue'}}
                    />
                    <Button style={{ marginTop: '10px'}} fullWidth disabled ={!comment} variant="contained" color="primary" onClick={handleSubmit}>Comment</Button>
                </div>
            </OuterContainer>
        </div>
    );

};


const OuterContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    width: 60%;
    margin-left: 1rem;
`;

const InnerContainer = styled.div`
    width: 400px;
    height: 300px;
    overflow-y: auto;
    margin-right: 30px;

    strong{
        &:hover{
           text-decoration: underline;
           cursor: pointer;
        }
    }
`;


export default CommentSection;