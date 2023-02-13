import React from "react";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import "./women.css";
import Footer from '../Footer/Footer'
//import Carousel from "react-elastic-carousel"

const Women = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carousel />
      </div>
      <marquee direction="left" height="30px">
       <h6>Here is Our latest Collection for women</h6>
      </marquee>
     
      <div className="Women-Cards">
        <div className="women-Card1">
          <img
            className="Card1-Img"
            src="https://m.media-amazon.com/images/I/71k+G707aoL._UY550_.jpg"
          />
          <hr/>
          <h6>Women Dark Blue Gown</h6>
          $100.00 (10% Offer)<br/>
          <span className="span">Hurry Only 2 left.</span>
         
        </div>
        <div className="women-Card1">
        <img
            className="Card1-Img"
            src="https://i.pinimg.com/originals/cb/e8/bb/cbe8bb3571cea01a571abab82cb83c6c.jpg"
          /> 
          <hr/>
          <h6>Women Dark Blue Gown</h6>
          $100.00 (10% Offer)<br/>
          <span className="span">Hurry Only 2 left.</span>
          </div>
        <div className="women-Card1">
        <img
            className="Card1-Img"
            src="https://3.imimg.com/data3/OF/LV/MY-10511611/ladies-denim-jeans-500x500.jpg"
          />
          <hr/>
          <h6>Women Dark Blue Gown</h6>
          $100.00 (10% Offer)<br/>
          <span className="span">Hurry Only 2 left.</span>
        </div>
        <div className="women-Card1">
        <img
            className="Card1-Img"
            src="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPMAYRA-WOMEN-GAUR304433A3416C0/1563991154765_0..jpg"
          />
          <hr/>
          <h6>Women Dark Blue Gown</h6>
          $100.00 (10% Offer)<br/>
          <span className="span">Hurry Only 2 left.</span>
        </div>
        <div className="women-Card1">
        <img
            className="Card1-Img"
            src="https://e1.pxfuel.com/desktop-wallpaper/668/451/desktop-wallpaper-kallmekris-merch-kall-me-kris-kris-collins-merch-otay-tshirt-long-sleeve-crewneck-sweatshirt-hoodie-sweatshirt-merch-merchadise-apparel-clothing-clothes-for-men-women-youth-kids-boys-girls-clothing-thumbnail.jpg"
          />
          <hr/>
          <h6>Black Hoodie</h6>
          $100.00 (10% Offer)<br/>
          <span className="span">Hurry Only 2 left.</span>
        </div>
      
      </div><hr/>
      
      <Footer/>
      
    </>
  );
};

export default Women;
