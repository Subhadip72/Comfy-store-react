import React, { useState, useEffect } from "react";
import { single_product_url } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PageHero from "../components/PageHero";
import styled from "styled-components";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import Colors from "../components/Colors";
import AddToCart from "../components/AddToCart";
import { formatPrice } from "../utils/helpers";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async (url) => {
    try {
      const response = await axios(url);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(`${single_product_url}${id}`);
  }, [id]);

  const {
    id: itemId,
    images,
    name,
    price,
    stock,
    stars,
    colors,
    company,
    description,
    reviews,
  } = product;

  return (
    <>
      <PageHero title="product" />
      <main className="section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <Container>
          {images && <ProductImages images={images} />}
          <div className="product-info">
            <h1>{name}</h1>
            <Stars stars={stars} reviews={reviews} />
            <p className="price">{formatPrice(price)}</p>
            <p>{description}</p>
            <div className="specific-info">
              <p>
                Available :{" "}
                <span className="info">{stock > 0 && "In Stock"}</span>
              </p>
              <p>
                SKU : <span className="info">{itemId}</span>
              </p>
              <p>
                Brand : <span className="info">{company}</span>
              </p>
              <hr />
            </div>
            {colors && <Colors colors={colors} />}
            {stock > 0 && <AddToCart stock={stock} id={id} product={product} />}
          </div>
        </Container>
      </main>
    </>
  );
};

const Container = styled.section`
  display: grid;
  gap: 2.5rem;
  h1 {
    text-transform: capitalize;
    font-size: 1.75rem;
  }
  .specific-info {
    margin-top: 1.5rem;
    display: grid;
    gap: 1.25rem;
    p {
      text-transform: capitalize;
      display: flex;
      gap: 4rem;
      font-weight: 800;
      .info {
        font-weight: 400;
      }
    }
  }
  .price {
    margin: 1rem 0;
    color: #854836;
    font-weight: bold;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

export default SingleProduct;
