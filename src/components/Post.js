import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import styled from "styled-components";

const CustomContainer = styled(Container)`
  margin-bottom: 12px;
`;

export const Post = ({ post }) => (
  <CustomContainer key={post.id}>
    <Row>
      <Col>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link to={`/post/${post.id}/comments`}>View comments</Link>
      </Col>
    </Row>
  </CustomContainer>
);
