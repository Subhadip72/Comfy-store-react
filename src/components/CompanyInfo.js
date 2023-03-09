import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const CompanyInfo = () => {
  return (
    <Container>
      <h1>custom furniture build only for you</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit
        impedit qui dolor architecto nesciunt necessitatibus eligendi ratione
        maxime soluta?
      </p>
      <div className="vision section-center">
        {services.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <article key={id} className="brand-text">
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </Container>
  );
};

export default CompanyInfo;

const Container = styled.section`
  background: hsl(20, 31%, 74%);
  h1 {
    font-size: 1.75rem;
    text-align: left;
    text-transform: capitalize;
    padding: 1rem 3rem;
  }
  p {
    text-align: left;
    padding: 0 3rem;
  }
  .vision {
    display: grid;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .brand-text {
    background: hsl(22, 31%, 64%);
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
  }
  span {
    background: #fff;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 2rem;
  }
  .brand-text {
    h3 {
      font-size: 1.5rem;
      text-transform: capitalize;
      margin-top: 1rem;
    }
    p {
      margin-top: 0.75rem;
      line-height: 1.2;
      letter-spacing: 2px;
      text-align: center;
    }
  }

  @media screen and (min-width: 800px) {
    h1,
    p {
      text-align: center;
    }
    .vision {
      grid-template-columns: repeat(3, 1fr);
    }
    .brand-text {
      margin-bottom: -5rem;
    }
  }
`;
