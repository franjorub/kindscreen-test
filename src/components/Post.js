import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "reactstrap";
import styled from "styled-components";
import { usePosts } from "../contexts/posts";
import { starredPost, unStarredPost } from "../actions/posts";

const CustomContainer = styled(Container)`
  margin-bottom: 12px;
`;

export const Post = ({ id, showStarred }) => {
  const [posts, dispatchToPosts] = usePosts();

  const post = { ...posts.entities[id] };

  const handleStarred = () => {
    if (post.isStarred) {
      dispatchToPosts(unStarredPost(id));
    } else {
      dispatchToPosts(starredPost(id));
    }
  };

  return (
    <CustomContainer>
      <Row>
        <Col>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Row>
            <Col>
              {" "}
              <Link to={`/post/${post.id}/comments`}>View comments</Link>
            </Col>
            <Col>
              {showStarred && (
                <Button onClick={handleStarred} color="info">
                  {post.isStarred ? "Remove from Fav." : "Add To Fav."}
                </Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </CustomContainer>
  );
};
