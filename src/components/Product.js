import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";

const Product = ({ id, name, price, image }) => {
  return (
    <ItemContainer>
      <div className="img-container">
        <img src={image} alt={name} />
        <div className="search-btn">
          <Link to={`/products/${id}`} className="search-icon">
            <BiSearch />
          </Link>
        </div>
      </div>
      <div className="item-desc">
        <p>{name}</p>
        <p>{formatPrice(price)}</p>
      </div>
    </ItemContainer>
  );
};

export default Product;

const ItemContainer = styled.article`
  width: 100%;
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 5px;
  }
  .img-container {
    position: relative;
  }
  .search-btn {
    position: absolute;
    visibility: hidden;
    border: transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
  }
  .search-icon {
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    background-color: orange;
    font-size: 1.5rem;
    font-weight: 800;
    border-radius: 50%;
    color: #fff;
  }
  .img-container:hover .search-btn {
    visibility: visible;
  }
  .item-desc {
    display: flex;
    justify-content: space-between;
    padding-top: 0.75rem;
  }
`;
