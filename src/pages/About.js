import React from "react";
import styled from "styled-components";
import heroBcg from "../assets/hero-bcg.jpeg";
import PageHero from "../components/PageHero";

const About = () => {
  return (
    <>
      <PageHero title="about" />
      <Container className="section-center">
        <img src={heroBcg} alt="hero-img" />
        <div>
          <h1>our story</h1>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos,
            iste provident modi dolor, aliquam sint quasi molestiae voluptates
            dignissimos magni optio nam sunt reiciendis magnam, accusantium
            porro perferendis? Doloribus praesentium officiis quos debitis!
            Rerum deleniti tenetur corporis id consequuntur nihil nobis
            voluptate aliquid! Aliquid excepturi in at. Obcaecati sed nihil ad
            numquam necessitatibus consectetur aperiam beatae repellat totam
            distinctio modi, soluta suscipit minus! Molestias, quam non aperiam
            aut, nesciunt quibusdam at cupiditate accusantium praesentium magni
            voluptas itaque soluta. Doloribus necessitatibus, modi quis soluta
            obcaecati, minima delectus quas adipisci corrupti blanditiis eius
            fugiat libero fugit. Error, ipsum tenetur! Architecto labore at
            distinctio deserunt, molestiae voluptatem, numquam ipsa, consequatur
            incidunt possimus esse ullam obcaecati voluptate minima corrupti
            illo excepturi nam ducimus?
          </p>
        </div>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: grid;
  gap: 2.5rem;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 5px;
  }
  h1 {
    text-transform: capitalize;
    font-size: 2rem;
    letter-spacing: 2px;
  }
  p {
    margin-top: 1.5rem;
    color: grey;
    line-height: 1.2;
    word-spacing: 2px;
  }
  .underline {
    margin-top: 0.5rem;
    height: 4px;
    width: 6rem;
    background-color: hsl(22, 21%, 64%);
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

export default About;
