import React from "react";
import { useState, useEffect } from "react";
import Comment from "./comment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Post({ post }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async (postId) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getComments = async (postId) => {
      const commentsFromServer = await fetchComments(postId);
      setComments(commentsFromServer);
    };

    const postId = post.id;
    getComments(postId);
  }, [post.id]);

  return (
    <Card sx={{ minWidth: 275, m: 3 }}>
      <CardContent>
        <h4>{post.title}</h4>
        <p>{post.body}</p>

        <br />
        <h3>Comments ({comments.length})</h3>

        {comments.length > 0
          ? comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))
          : null}
      </CardContent>
    </Card>
  );
}

export default Post;
