import { useEffect, useState } from "react";
import Form from "./components/Form";
import PostsList from "./components/PostsList";
import axios from "axios";

function App() {
  const apiUrl = import.meta.env.VITE_SERVER_URL;
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get(`${apiUrl}/posts`);
    setPosts(response.data.posts);
  };

  const fetchCategory = async () => {
    const response = await axios.get(`${apiUrl}/categories`);
    setCategories(response.data.categories);
  };

  const fetchTags = async () => {
    const response = await axios.get(`${apiUrl}/tags`);
    setTags(response.data.tags);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategory();
    fetchTags();
  }, []);

  const addPost = async (formValues) => {
    try {
      const response = await axios.post(`${apiUrl}/posts`, formValues, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postSlug) => {
    try {
      const response = await axios.delete(`${apiUrl}/posts/${postSlug}`);

      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full">
      <Form addPost={addPost} categories={categories} tags={tags}></Form>
      <PostsList posts={posts} deletePost={deletePost}></PostsList>
    </div>
  );
}

export default App;
