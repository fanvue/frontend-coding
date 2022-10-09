import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Comment({ comment }) {
  return (
    <Card sx={{ minWidth: 275, m: 1 }}>
      <CardContent>
        <p>
          {" "}
          <b> {comment.email}: </b>
          {" "}
        </p>
        <p> {comment.body} </p>
      </CardContent>
    </Card>
  );
}

export default Comment;
