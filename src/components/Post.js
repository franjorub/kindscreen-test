import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "reactstrap";
import styled from "styled-components";
import { usePosts } from "../contexts/posts";
import { starredPost, unStarredPost } from "../actions/posts";

const CustomContainer = styled(Container)`
  margin-bottom: 12px;
`;

const CustomButton = styled(Button)`
  background-color: white !important;
  margin-top: 15px;
  margin-bottom: 14px;
`;

const CustomLink = styled(Link)`
  color: white;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  color: #f5f5f5;
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
          <Title>{post.title}</Title>
          <p>{post.body}</p>
          <Row>
            <Col sm="3">
              <CustomLink to={`/post/${post.id}/comments`}>
                View comments
              </CustomLink>
            </Col>
            <Col>
              {showStarred && (
                <CustomButton onClick={handleStarred} color="link">
                  {post.isStarred ? "Remove from Fav." : "Add To Fav."}
                </CustomButton>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </CustomContainer>
  );
};
