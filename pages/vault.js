import { useState, useEffect } from "react";
import Thumbnail from "../components/Thumbnail";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";

function Vault() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchImages = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setLoading(false);
    return data;
  };

  useEffect(() => {
    const getImages = async () => {
      const imagesFromServer = await fetchImages();
      setImages(imagesFromServer);
    };

    getImages();
  }, []);

  if (loading) {
    return <h3> Loading .... </h3>;
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <ImageList cols={3} rowHeight={164}>
          {images.map((image) => (
            <ImageListItem key={image.id}>
              <Thumbnail key={image["id"]} image={image} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </>
  );
}

export default Vault;
