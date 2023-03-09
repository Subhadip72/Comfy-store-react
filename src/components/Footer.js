import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>Comfy Sloth</span>
      </h5>
      <h5>All rights reserved.</h5>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  height: 5rem;
  background: #000;
  display: grid;
  place-items: center;
  h5 {
    color: #fff;
  }
`;
