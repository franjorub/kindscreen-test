import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth";
import client from "../../api/client";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { loggedUser } = useAuth();

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
      <h1>Welcome: {loggedUser.name}</h1>
      {posts.map(post => (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
