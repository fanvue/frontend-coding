/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { PHOTO } from "../types/jsonplaceholder";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "5px solid #000",
};
const Photo: React.FC<{ photo: PHOTO }> = (props) => {
  //https://mui.com/material-ui/react-modal/
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { photo } = props;

  return (
    <a href="javascript:void(0)" onClick={handleOpen}>
      <img
        alt=""
        src={photo.thumbnailUrl}
        style={{ width: "100%", height: "100%" }}
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            alt=""
            src={photo.url}
            style={{ width: "600px", height: "600px" }}
          ></img>
        </Box>
      </Modal>
    </a>
  );
};

export default Photo;
