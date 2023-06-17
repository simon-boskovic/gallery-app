"use client";

import { useEffect, useState } from "react";

export default function AsyncTest() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());
      console.log(fetchedPosts);
      setPosts(fetchedPosts);
    };
    getPosts();
  }, []);
  if (!posts.length) {
    return <div>Loading</div>;
  }

  return posts.map((res, index) => {
    return <div key={index}>{res["title"]}</div>;
  });
}
