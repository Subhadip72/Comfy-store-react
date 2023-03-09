import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../context/CartProvider";

const CartItem = ({ id, name, image, amount, price }) => {
  const { removeItem, toggleAmount } = useCartContext();

  return (
    <ItemContainer>
      <div className="item-info">
        <img src={image} alt={name} />
        <div className="item-about">
          <p>{name}</p>
          <p className="price">{formatPrice(price)}</p>
        </div>
      </div>
      <div className="item-price">
        <p>{formatPrice(price)}</p>
      </div>
      <div className="amount-control">
        <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          <AiOutlineMinus />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          <AiOutlinePlus />
        </button>
      </div>
      <button className="delete-btn" onClick={() => removeItem(id)}>
        <MdDelete />
      </button>
    </ItemContainer>
  );
};

const ItemContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    text-transform: capitalize;
  }
  img {
    width: 4em;
    height: 4em;
    object-fit: cover;
  }
  .item-price {
    display: none;
    text-align: center;
  }
  .item-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .amount-btn {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }
  .amount-control {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    font-weight: 800;
  }
  .delete-btn {
    background: red;
    border: transparent;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    display: grid;
    place-items: center;
    padding: 0.25em;
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    .price {
      display: none;
    }
    .item-price {
      display: block;
    }
    .delete-btn {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 auto;
    }
  }
`;

export default CartItem;
