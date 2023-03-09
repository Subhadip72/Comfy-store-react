import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import styled from "styled-components";

const Stars = ({ stars, reviews }) => {
  const newStars = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <StarsContainer>
      <div className="stars">{newStars}</div>
      <p>({reviews} customer reviews)</p>
    </StarsContainer>
  );
};

const StarsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.25rem;
  .stars {
    color: #ffc93c;
  }
`;

export default Stars;
