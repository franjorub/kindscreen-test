import React, { useState, useEffect, useMemo } from "react";
import {
  Button,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";
import { Header, Main, Welcome } from "./styles";
import { PostList } from "../../components/PostList";
import { useAuth } from "../../contexts/auth";
import client from "../../api/client";
import { usePosts } from "../../contexts/posts";
import { fetchPostSuccess, loadingPosts } from "../../actions/posts";

export const Home = () => {
  const [activeTab, setActiveTab] = useState("1");
  const { loggedUser, authUser } = useAuth();
  const [posts, dispatchToPosts] = usePosts();

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleLoggout = () => {
    authUser(null);
  };

  const starredPosts = useMemo(
    () => posts.keys.filter(key => posts.entities[key].isStarred),
    [posts]
  );

  useEffect(() => {
    const getPosts = async () => {
      try {
        dispatchToPosts(loadingPosts());
        const posts = await client.getPostsByUserId(loggedUser.id);

        dispatchToPosts(fetchPostSuccess(posts));
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [loggedUser.id, dispatchToPosts]);

  return (
    <Main>
      <Header>
        <Row>
          <Col sm={9}>
            <Welcome>Welcome: {loggedUser.name}</Welcome>
          </Col>
          <Col sm={{ size: 3 }}>
            <Button color="danger" onClick={handleLoggout}>
              Loggout
            </Button>
          </Col>
        </Row>
      </Header>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Posts Feed
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Favorite Posts
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {posts.loading ? (
            <p>loading your posts</p>
          ) : (
            <PostList posts={posts.keys} allowStarredPost />
          )}
        </TabPane>
        <TabPane tabId="2">
          <PostList posts={starredPosts} />
        </TabPane>
      </TabContent>
    </Main>
  );
};
