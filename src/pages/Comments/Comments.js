import React, { useEffect, useState } from "react";
import client from "../../api/client";

export const Comments = ({ match }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const comments = await client.getCommentsByPostId(match.params.id);
      console.log(comments);
      setComments(comments);
    };
    getComments();
  }, [match.params.id]);

  return (
    <div>
      {comments.map(comment => (
        <div>
          <h3>{comment.name}</h3>
          <h4>{comment.email}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};
