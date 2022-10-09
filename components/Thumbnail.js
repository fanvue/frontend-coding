import React from "react";

function Thumbnail({ image }) {
  return (
    <div>
      <a href={image.url}>
        <img src={image.thumbnailUrl} alt={image.title} />
      </a>
    </div>
  );
}

export default Thumbnail;
