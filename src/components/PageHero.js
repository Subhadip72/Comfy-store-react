import React from "react";
import styled from "styled-components";

const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h1>home / {title}</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: hsl(22, 31%, 81%);
  margin-top: 1rem;
  height: 8rem;
  display: flex;
  align-items: center;
  h1 {
    text-transform: capitalize;
    color: hsl(22, 28%, 21%);
  }
`;

export default PageHero;
