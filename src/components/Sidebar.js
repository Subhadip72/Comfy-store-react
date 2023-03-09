import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { BsFillCartFill } from "react-icons/bs";
import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductsProvider";
import { useCartContext } from "../context/CartProvider";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductContext();
  const { amount } = useCartContext();

  return (
    <SidebarWrapper>
      <aside className={`${isSidebarOpen ? "sidebar show-aside" : "sidebar"}`}>
        <div className="aside-center">
          <img src={logo} alt="main-logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <GrClose />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((item) => {
            const { id, text, url } = item;
            return (
              <li key={id}>
                <a href={url} onClick={closeSidebar}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="cart-btn">
          <Link to="/cart" className="cart" onClick={closeSidebar}>
            cart
            <div className="cart-icon">
              <BsFillCartFill />
              <span>{amount}</span>
            </div>
          </Link>
        </div>
      </aside>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.section`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    min-height: 100vh;
    width: 100vw;
    z-index: 999;
    transform: translateX(-100%);
    transition: all 0.3s linear;
  }
  .show-aside {
    transform: translateX(0);
  }
  .aside-center {
    width: 90vw;
    height: 5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .aside-center img {
    width: 11em;
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: red;
    cursor: pointer;
  }
  .nav-links {
    list-style: none;
  }
  .nav-links li {
    display: block;
    padding: 0.5rem 2rem;
  }
  .nav-links li a {
    font-size: 1.25rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    width: 100%;
    display: block;
    padding: 0.5rem;
    transition: all 0.3s linear;
  }
  .nav-links li a:hover {
    background-color: lightcyan;
  }
  .cart-btn {
    text-align: center;
    margin-top: 3rem;
  }
  .cart {
    text-decoration: none;
    font-size: 2rem;
    color: #000;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
  }
  .cart-icon {
    position: relative;
  }
  .cart-icon span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: hsl(22, 31%, 74%);
    font-size: 1.25rem;
    color: #fff;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;
