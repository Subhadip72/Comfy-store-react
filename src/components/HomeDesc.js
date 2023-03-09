import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const HomeDesc = () => {
  return (
    <Container className="section-center">
      <div className="company-text">
        <h1>Design your Comfort zone.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          voluptates tempora repudiandae veniam fuga? Alias dolore ut illo ipsa,
          quas quasi iste molestias? Porro eius laudantium, reiciendis obcaecati
          dolor beatae.
        </p>
        <Link to="products" className="btn">
          shop now
        </Link>
      </div>
      <div className="main-img">
        <img src={heroBcg} alt="main-img" />
        <img src={heroBcg2} alt="sub-img" className="bcg-img" />
      </div>
    </Container>
  );
};

export default HomeDesc;

const Container = styled.section`
  display: flex;
  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.2;
    letter-spacing: 2px;
    margin-bottom: 3rem;
  }
  .btn {
    text-decoration: none;
    background-color: hsl(22, 31%, 60%);
    color: #fff;
    padding: 1rem 1rem;
    text-transform: uppercase;
    border-radius: 5px;
    font-weight: 800;
  }
  .main-img::before {
    position: absolute;
    content: "";
    width: 10%;
    height: 80%;
    bottom: 0;
    background-color: hsl(22, 31%, 81%);
    left: -3rem;
    border-radius: 5px;
  }
  .main-img {
    position: relative;
    display: none;
  }
  img {
    width: 500px;
    height: 600px;
    border-radius: 5px;
  }
  .bcg-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 260px;
    height: 180px;
    border-radius: 5px;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 800px) {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 1rem; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    .company-text {
      padding-right: 5rem;
    }
    .main-img {
      display: block;
    }
  }
`;
