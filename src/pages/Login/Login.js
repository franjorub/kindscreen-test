import React from "react";
import { Card, Logo, Form, Input, Button } from "../../components/AuthForm";
import { Container } from "./styles";

export const Login = () => (
  <Container>
    <Card>
      <Logo src="" />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>
      </Form>
    </Card>
  </Container>
);
