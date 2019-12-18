import React from "react";
import { Container, Row, Col } from "reactstrap";

export const Comment = ({ comment }) => (
  <Container>
    <Row>
      <Col>
        <h3>{comment.name}</h3>
        <h4>{comment.email}</h4>
        <p>{comment.body}</p>
      </Col>
    </Row>
  </Container>
);
