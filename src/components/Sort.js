import React from "react";
import { FiGrid } from "react-icons/fi";
import { BsListCheck } from "react-icons/bs";
import styled from "styled-components";
import { useFilterContext } from "../context/FiltersProvider";

const Sort = () => {
  const { sort, updateSort } = useFilterContext();

  return (
    <SortContainer>
      <div className="btn-container">
        <button className="view-btn">
          <FiGrid />
        </button>
        <button className="view-btn">
          <BsListCheck />
        </button>
      </div>
      <div className="underline"></div>
      <form>
        <h5>sort</h5>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">price(lowest)</option>
          <option value="price-highest">price(highest)</option>
          <option value="name-a">name(A-Z)</option>
          <option value="name-z">name(Z-A)</option>
        </select>
      </form>
    </SortContainer>
  );
};

const SortContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  h5 {
    text-transform: capitalize;
    font-size: 1.15rem;
  }
  .btn-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .view-btn {
    font-size: 1rem;
    background: #000;
    color: #fff;
    border: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .underline {
    background: #000;
    height: 2px;
  }
  select {
    background: #f1f1f1;
    border: transparent;
    height: 2rem;
    cursor: pointer;
  }
`;

export default Sort;
