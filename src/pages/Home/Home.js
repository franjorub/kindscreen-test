import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}/comments`}>View comments</Link>
        </div>
      ))}
    </div>
  );
};
