import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <ImgContainer>
      <img src={main.url} alt="" />
      <div className="gallery">
        {images.map((item, index) => {
          return (
            <img
              key={index}
              src={item.url}
              alt=""
              className={`${item.url === main.url ? "active" : null}`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  margin-top: 2rem;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 5px;
  }
  .active {
    border: 2px solid red;
    border-radius: 5px;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
    img {
      height: 80px;
      object-fit: cover;
    }
  }
`;

export default ProductImages;
