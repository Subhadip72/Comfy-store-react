import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FiltersProvider";
import Product from "./Product";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();

  return (
    <>
      {products.length > 0 && <Info>{products.length} products available</Info>}
      <Container>
        {products.length > 0 &&
          products.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
      </Container>
    </>
  );
};

const Info = styled.h5`
  color: #000;
  margin-bottom: 1.25rem;
`;

const Container = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ProductList;
