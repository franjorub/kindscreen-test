import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import styled from "styled-components";
import { usePosts } from "../contexts/posts";
import { starredPost, unStarredPost } from "../actions/posts";

const CustomContainer = styled(Container)`
  margin-bottom: 12px;
`;

const CustomButton = styled(Button)`
  margin-top: 15px;
  margin-bottom: 14px;
  margin-left: 10px;
`;

const CustomLink = styled(Link)`
  color: blue;
  margin-top: 10px;
  margin-bottom: 15px;
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
          <Card>
            <CardBody>
              <CardTitle>{post.title}</CardTitle>
              <CardText>{post.body}</CardText>
              <CustomLink to={`/post/${post.id}/comments`}>
                View comments
              </CustomLink>
              {showStarred && (
                <CustomButton onClick={handleStarred} color="info">
                  {post.isStarred ? "Remove from Fav." : "Add To Fav."}
                </CustomButton>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </CustomContainer>
  );
};
