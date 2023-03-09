import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { useProductContext } from "../context/ProductsProvider";
import { useCartContext } from "../context/CartProvider";

const Navbar = () => {
  const { openSidebar } = useProductContext();
  const { amount } = useCartContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="main-logo" />
        </Link>
        <button className="nav-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
        <div className="nav-links">
          <ul className="links">
            {links.map((item) => {
              const { id, text, url } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cart-btn">
          <Link to="/cart" className="cart">
            cart
            <div className="cart-icon">
              <BsFillCartFill />
              <span>{amount}</span>
            </div>
          </Link>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: grid;
  place-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-center img {
    width: 11em;
  }
  .nav-toggle {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: hsl(22, 31%, 60%);
    cursor: pointer;
  }
  .nav-links {
    display: none;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
  .links li a {
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    margin-inline: 1.5em;
    padding: 0.75rem 0.5rem;
    color: #000;
    /* transition: all 0.3s linear; */
  }
  .links li a:hover {
    border-bottom: 2px solid hsl(22, 31%, 60%);
  }
  .cart-btn {
    display: none;
  }
  .cart {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .cart-icon {
    position: relative;
    span {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      background: hsl(22, 31%, 60%);
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      font-size: 1rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      width: 1170px;
    }
    .nav-toggle {
      display: none;
    }
    .nav-links {
      display: block;
    }
    .cart-btn {
      display: block;
    }
  }
`;

export default Navbar;
