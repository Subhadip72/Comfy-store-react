import React, { useState } from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";

const Colors = ({ colors }) => {
  const [mainColor, setMainColor] = useState(colors[0]);
  return (
    <ColorWrapper>
      <p>colors : </p>
      <span>
        {colors.map((color, index) => {
          return (
            <button
              key={index}
              style={{ background: color }}
              className="color-btn"
              onClick={() => setMainColor(colors[index])}
            >
              {color === mainColor && <BsCheck className="check-icon" />}
            </button>
          );
        })}
      </span>
    </ColorWrapper>
  );
};

const ColorWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  span {
    display: flex;
    gap: 0.25rem;
  }
  .color-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: transparent;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .check-icon {
    color: #fff;
  }
`;

export default Colors;
