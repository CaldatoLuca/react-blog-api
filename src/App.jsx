import { useEffect, useState } from "react";
import Form from "./components/Form";
import PostsList from "./components/PostsList";
import axios from "axios";

function App() {
  const apiUrl = import.meta.env.VITE_SERVER_URL;
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get(`${apiUrl}/posts`);
    setPosts(response.data.posts);
    console.log(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex h-full">
      <Form></Form>
      <PostsList posts={posts}></PostsList>
    </div>
  );
}

export default App;
