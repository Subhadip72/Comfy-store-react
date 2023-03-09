import React from "react";
import HomeDesc from "../components/HomeDesc";
import FeaturedProducts from "../components/FeaturedProducts";
import CompanyInfo from "../components/CompanyInfo";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <HomeDesc />
      <FeaturedProducts />
      <CompanyInfo />
      <ContactForm />
    </>
  );
};

export default Home;
