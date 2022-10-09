import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Post from "../components/post";

function Feed() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);


  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();
    setLoading(false);
    return data;
  };

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };

    getPosts();
  }, []);

  if (loading) {
    return <h3> Loading .... </h3>;
  }
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export default Feed;
