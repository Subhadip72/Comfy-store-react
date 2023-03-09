import React from "react";
import { useProductContext } from "../context/ProductsProvider";
import styled from "styled-components";
import Product from "./Product";

const FeaturedProducts = () => {
  const { featured_products: products } = useProductContext();

  return (
    <Container>
      <h1>featured products</h1>
      <div className="underline"></div>
      <div className="products section-center">
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </Container>
  );
};

export default FeaturedProducts;

const Container = styled.section`
  margin-bottom: 2rem;
  background: #f1f1f1;
  h1 {
    font-size: 2rem;
    text-transform: capitalize;
    text-align: center;
    padding-top: 3rem;
  }
  .underline {
    height: 5px;
    width: 8rem;
    background-color: #000;
    text-align: center;
    margin: 1.25rem auto;
  }
  .products {
    display: grid;
    gap: 1.5rem;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 800px) {
    .products {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.25rem;
    }
  }
`;
