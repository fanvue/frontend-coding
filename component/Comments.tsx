import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { COMMENT } from "../types/jsonplaceholder";
import CommentIcon from "@mui/icons-material/Comment";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import Switch from "@mui/material/Switch";

const Comments: React.FC<any> = (props) => {
  const { count, comments } = props;
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label={
          <Badge
            badgeContent={count}
            color="secondary"
            style={{ marginTop: "10px" }}
          >
            <CommentIcon color="action" />
          </Badge>
        }
      />

      <Fade in={checked} unmountOnExit>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {comments.map((comment: COMMENT) => {
            return (
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="fanvue" src="/favicon.ico" />
                </ListItemAvatar>
                <ListItemText
                  primary={comment.name}
                  secondary={
                    <React.Fragment>
                      <a title={comment.email} href={"mailto:" + comment.email}>
                        <AlternateEmailIcon style={{ fontSize: "12px" }} />
                      </a>
                      &nbsp;- {comment.body}
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Fade>
    </div>
  );
};

export default Comments;
