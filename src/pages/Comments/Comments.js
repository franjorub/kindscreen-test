import React, { useEffect, useState } from "react";
import { Comment } from "../../components/Comment";
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
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
