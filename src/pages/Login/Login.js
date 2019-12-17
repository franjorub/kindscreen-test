import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Card, Logo, Form, Input, Button } from "../../components/AuthForm";
import { Container } from "./styles";
import { useAuth } from "../../contexts/auth";
import client from "../../api/client";

const UsernameInput = styled(Input)`
  text-transform: capitalize;
`;

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { loggedUser, authUser } = useAuth();

  const handleLogin = async () => {
    const result = await client.login(
      username.toLowerCase(),
      email.toLowerCase()
    );
    if (result) {
      authUser(result);
    } else {
      alert("user not found");
    }
  };

  const handleUsername = event => {
    event.persist();
    setUsername(event.target.value);
  };

  const handleEmail = event => {
    event.persist();
    setEmail(event.target.value);
  };

  if (loggedUser) return <Redirect to="/welcome" />;

  return (
    <Container>
      <Logo>UMBRELLA</Logo>
      <Card>
        <Logo src="" />
        <Form>
          <UsernameInput
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsername}
          />
          <Input
            type="email"
            placeholder="Password"
            onChange={handleEmail}
            value={email}
          />
          <Button role="button" onClick={handleLogin}>
            Sign In
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
