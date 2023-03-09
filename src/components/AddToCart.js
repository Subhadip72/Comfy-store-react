import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartProvider";

const AddToCart = ({ stock, id, product }) => {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1;
      if (newAmount > stock) {
        newAmount = stock;
        alert(`There are only ${stock} items in stock`);
      }
      return newAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <Wrapper>
      <div className="amount">
        <button className="amount-btn" onClick={decrease}>
          <AiOutlineMinus />
        </button>
        <p>{amount}</p>
        <button className="amount-btn" onClick={increase}>
          <AiOutlinePlus />
        </button>
      </div>
      <Link
        to="/cart"
        className="btn"
        onClick={() => addToCart(id, amount, product)}
      >
        add to cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  p {
    font-size: 2rem;
    font-weight: 800;
  }
  .amount {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
    margin-left: 0.5rem;
  }
  .amount-btn {
    background: transparent;
    border: transparent;
    font-size: 1.25rem;
    font-weight: 800;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
`;

export default AddToCart;
