import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import PageHero from "../components/PageHero";
import { useCartContext } from "../context/CartProvider";
import { formatPrice } from "../utils/helpers";

const Cart = () => {
  const { cart, total, shipping_fee, clearCart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="empty">
        <h2>your cart is empty!!</h2>
        <p>you can fill your cart by clicking below!!</p>
        <Link to="/products" className="btn shop-btn">
          fill it
        </Link>
      </main>
    );
  }

  return (
    <>
      <PageHero title="cart" />
      <CartContainer className="section-center">
        <div className="product-details">
          <h5>product</h5>
          <h5>price</h5>
          <h5>amount</h5>
          <h5>delete</h5>
        </div>
        <hr />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <ButtonContainer>
          <Link to="/products" className="btn shop-btn">
            continue shopping
          </Link>
          <button className="btn clear-btn" onClick={clearCart}>
            clear cart
          </button>
        </ButtonContainer>
        <TotalsContainer>
          <div className="total">
            <div className="total-text">
              <p className="subtotal">subtotal :</p>
              <p>shipping fee :</p>
            </div>
            <div className="charges">
              <p className="subtotal">{formatPrice(total)}</p>
              <p>{formatPrice(shipping_fee)}</p>
            </div>
          </div>
          <hr />
          <div className="total">
            <h3>order total :</h3>
            <h3>{formatPrice(total + shipping_fee)}</h3>
          </div>
        </TotalsContainer>
        <div className="checkout">
          <Link to="/checkout" className="checkout-btn">
            proceed to checkout
          </Link>
        </div>
      </CartContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  .btn {
    width: 7rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: transparent;
    text-transform: capitalize;
    cursor: pointer;
  }
  .shop-btn {
    color: #fff;
    background: hsl(22, 31%, 61%);
  }
  .clear-btn {
    color: #fff;
    background: #000;
  }
`;

const TotalsContainer = styled.article`
  margin-top: 1.5rem;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: grid;
  gap: 2rem;
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      text-align: left;
    }
  }
  .subtotal {
    margin-bottom: 1rem;
  }
  .charges {
    text-align: left;
  }

  @media screen and (min-width: 800px) {
    width: 350px;
    margin-left: auto;
  }
`;

const CartContainer = styled.section`
  display: grid;
  gap: 2rem;
  .product-details {
    display: none;
  }
  .checkout {
    text-align: center;
  }
  .checkout-btn {
    text-transform: uppercase;
    text-decoration: none;
    background: hsl(22, 31%, 61%);
    border: transparent;
    padding: 0.5rem 1rem;
    color: #fff;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    .product-details {
      display: grid;
      grid-template-columns: repeat(4, auto);
      place-items: center;
    }
    .checkout {
      text-align: right;
    }
    .checkout-btn {
      width: 350px;
    }
  }
`;

export default Cart;
