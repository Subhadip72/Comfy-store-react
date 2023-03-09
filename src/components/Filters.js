import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FiltersProvider";
import { getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    all_products,
    filters: {
      text,
      category,
      company,
      color,
      price,
      min_price,
      max_price,
      shipping,
    },
    handleChange,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <FiltersWrapper>
      <section className="content">
        <form className="search-form">
          <input
            type="text"
            className="form-input"
            placeholder="Search..."
            value={text}
            name="text"
            onChange={handleChange}
          />
        </form>
        <form className="search-form" onSubmit={handleChange}>
          <h5>categories</h5>
          <div className="category">
            {categories.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    item === category
                      ? "category-btn active-btn"
                      : "category-btn"
                  }`}
                  name="category"
                  onClick={handleChange}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </form>
        <form className="search-form">
          <h5>companies</h5>
          <select name="company" value={company} onChange={handleChange}>
            {companies.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </form>
        <form className="search-form">
          <h5>colors</h5>
          <div className="color-container">
            <button
              name="color"
              data-color="all"
              className="all-btn"
              onClick={handleChange}
            >
              all
            </button>
            {colors.map((item, index) => {
              return (
                <button
                  key={index}
                  name="color"
                  style={{ background: item }}
                  className={`${
                    item === color ? "color-btn colored" : "color-btn"
                  }`}
                  data-color={item}
                  onClick={handleChange}
                ></button>
              );
            })}
          </div>
        </form>
        <form className="search-form">
          <h5>price</h5>
          <div className="form-control">
            <label htmlFor="price">{max_price}</label>
            <input
              type="range"
              name="price"
              id="price"
              value={price}
              className="price-input"
              min={min_price}
              max={max_price}
              onChange={handleChange}
            />
          </div>
        </form>
        <form className="shipping search-form">
          <h5>free shipping</h5>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleChange}
          />
        </form>
        <div>
          <button className="clear-btn" onClick={clearFilters}>
            clear filters
          </button>
        </div>
      </section>
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.div`
  .content {
    display: grid;
    gap: 1rem;
  }
  h5 {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
  .form-input {
    background: #f1f1f1;
    border: transparent;
    height: 2rem;
    width: 12rem;
    border-radius: 5px;
    text-transform: capitalize;
  }
  select {
    background: #f1f1f1;
    border: transparent;
    height: 2rem;
    width: 5rem;
    text-transform: capitalize;
    border-radius: 5px;
  }
  .color-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .all-btn {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    cursor: pointer;
  }
  .color-btn {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    border: transparent;
    opacity: 0.5;
    cursor: pointer;
  }
  .colored {
    opacity: 1;
  }
  .category {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 0.25rem;
  }
  .category-btn {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    padding: 0.5rem;
    cursor: pointer;
  }
  .active-btn {
    border-bottom: 2px solid #000;
  }
  .form-control {
    display: grid;
    gap: 0.25rem;
  }
  .price-input {
    width: 12rem;
  }
  .shipping {
    display: flex;
    gap: 5rem;
  }
  .clear-btn {
    background: red;
    color: #fff;
    text-transform: capitalize;
    border: transparent;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    .content {
      position: sticky;
      top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default Filters;
