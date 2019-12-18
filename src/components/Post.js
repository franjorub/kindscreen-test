import React, { useMemo } from "react";
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
import { useStarredPosts } from "../contexts/starredPosts";

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

const CustomCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.8) !important;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

export const Post = ({ id, showStarred }) => {
  const [posts] = usePosts();
  const [starredPosts, dispatchToStarredPosts] = useStarredPosts();

  const post = { ...posts.entities[id] };

  post.isStarred = useMemo(
    () => Boolean(starredPosts.find(key => key === id)),
    [id, starredPosts]
  );

  const handleStarred = () => {
    if (post.isStarred) {
      dispatchToStarredPosts(unStarredPost(id));
    } else {
      dispatchToStarredPosts(starredPost(id));
    }
  };

  return (
    <CustomContainer>
      <Row>
        <Col>
          <CustomCard>
            <CardBody>
              <CardTitle>
                <h3>{post.title}</h3>
              </CardTitle>
              <CardText>{post.body}</CardText>
              <CustomLink to={`/post/${post.id}/comments`}>
                View comments
              </CustomLink>
              {showStarred && (
                <CustomButton onClick={handleStarred} color="secondary" outline>
                  {post.isStarred ? "Remove from Fav." : "Add To Fav."}
                </CustomButton>
              )}
            </CardBody>
          </CustomCard>
        </Col>
      </Row>
    </CustomContainer>
  );
};
