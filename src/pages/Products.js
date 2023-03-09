import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import { useProductContext } from "../context/ProductsProvider";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <>
      <PageHero title="Products" />
      <ProductsContainer className="section-center">
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </ProductsContainer>
    </>
  );
};

const ProductsContainer = styled.section`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 800px) {
    grid-template-columns: 260px 1fr;
  }
`;

export default Products;
