import { COMMENT, POST } from "../types/jsonplaceholder";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import Comments from "../component/Comments";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Feed: NextPage = ({ posts }: any) => {
  return (
    <div className={styles.feedContainer}>
      <Grid container spacing={2}>
        {posts.map((post: POST) => {
          return (
            <Grid key={post.id} item xs={6} sm={4} md={3}>
              <Card>
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    style={{ fontWeight: "bold" }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{
                      whiteSpace: "pre-line", //renders line breaks
                    }}
                  >
                    {post.body}
                  </Typography>
                  {post.comments && post.comments.length > 0 && (
                    <Comments
                      count={post.comments.length}
                      comments={post.comments}
                    />
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const resComments = await fetch(
    `https://jsonplaceholder.typicode.com/comments`
  );

  const posts = await res.json();
  const comments = await resComments.json();

  //merge comments with posts
  posts.map((post: POST) => {
    post.comments = comments.filter((comment: COMMENT) => {
      return comment.postId === post.id;
    });
  });

  return {
    props: {
      posts,
    },
  };
};

export default Feed;
