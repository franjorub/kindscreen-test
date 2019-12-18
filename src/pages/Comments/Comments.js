import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Comment } from "../../components/Comment";
import client from "../../api/client";

export const Comments = ({ match }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const comments = await client.getCommentsByPostId(match.params.id);
      setComments(comments);
    };
    getComments();
  }, [match.params.id]);

  return (
    <Container>
      <h3>Comments</h3>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Container>
  );
};
