import { Box, Grid } from "@mui/material";

import type { NextPage } from "next";
import { PHOTO } from "../types/jsonplaceholder";
import Photo from "../component/Photo";
import styles from "../styles/Home.module.css";

const Feed: NextPage = ({ photos }: any) => {
  return (
    <div className={styles.container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {photos.map((item: PHOTO) => {
            return (
              <Grid key={item.id} item xs={6} sm={4} md={2}>
                <Photo photo={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const photos = (await res.json()).slice(0, 100); // too many photos otherwise

  return {
    props: {
      photos,
    },
  };
};

export default Feed;
