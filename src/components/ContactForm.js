import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <FormContainer className="section-center">
      <div className="contact-text">
        <h2>join our newsletter and get 20% off</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          distinctio quae voluptate quasi, totam iusto. Non repudiandae debitis
          molestiae dignissimos. Pariatur, sequi? Distinctio culpa vero in et
          quia eos eius.
        </p>
      </div>
      <form
        className="contact-form"
        action="https://formspree.io/f/xlekbkoa"
        method="POST"
      >
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="enter email"
        />
        <button type="submit" className="form-btn">
          subscribe
        </button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.section`
  display: grid;
  gap: 1.5rem;
  .contact-form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    height: 2rem;
    padding: 1rem 0;
    text-transform: capitalize;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    font-size: 1em;
    border-color: 5px solid #000;
  }
  .form-btn {
    color: #fff;
    padding: 0 0.25rem;
    background: hsl(22, 28%, 21%);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    margin-top: 10rem;
    grid-template-columns: repeat(2, 1fr);
    .contact-form {
      display: flex;
      align-items: center;
    }
    .form-input {
      width: 80%;
    }
    .form-btn {
      width: 20%;
      height: 2rem;
      font-size: 1rem;
      padding: 0.25rem 0;
    }
  }
`;
