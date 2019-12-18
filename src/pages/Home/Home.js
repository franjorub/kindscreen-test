import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "reactstrap";
import { Header } from "./styles";
import { useAuth } from "../../contexts/auth";
import client from "../../api/client";
import { Post } from "../../components/Post";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { loggedUser, authUser } = useAuth();

  const handleLoggout = () => {
    authUser(null);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await client.getPostsByUserId(loggedUser.id);
        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [loggedUser.id]);

  return (
    <div>
      <Header>
        <Row>
          <Col sm={9}>
            <h2>Welcome: {loggedUser.name}</h2>
          </Col>
          <Col sm={{ size: 3 }}>
            <Button color="danger" onClick={handleLoggout}>
              Loggout
            </Button>
          </Col>
        </Row>
      </Header>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
