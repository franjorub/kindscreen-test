import React from "react";
import styled from "styled-components";
import { Post } from "./Post";

const Container = styled.div`
  margin-top: 12px;
`;

export const PostList = ({ posts, allowStarredPost }) => {
  return (
    <Container>
      {posts.map(post => (
        <div key={post}>
          <Post id={post} showStarred={allowStarredPost} />
        </div>
      ))}
    </Container>
  );
};
