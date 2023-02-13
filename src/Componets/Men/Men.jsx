import React from "react";
import styled from "styled-components";
import { popularProducts } from "../DummyData/dummy";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Product from "./Product";

const Container = styled.div``;

const Men = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
      <Footer />
    </>
  );
};
export default Men;
