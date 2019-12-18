import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import styled from "styled-components";

const CustomCard = styled(Card)`
  margin: 10px 0px;
`;

export const Comment = ({ comment }) => (
  <Container>
    <Row>
      <Col>
        <CustomCard>
          <CardBody>
            <CardTitle>
              {comment.name} {comment.email}
            </CardTitle>
            <CardText>{comment.body}</CardText>
          </CardBody>
        </CustomCard>
      </Col>
    </Row>
  </Container>
);
