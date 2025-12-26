import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
    
      <Hero />
      <LeftImage
        imageURL="media/images/kite.png" 
        productName="Kite" 
        productDescripton="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>

      <RightImage 
        imageURL="media/images/console.png" 
        productName="Console" 
        productDescripton="The central dashboard for your MetaStocks account. Gain insights into your trades and investments with in-depth reports and visualisations." 
        tryDemo="" 
       
      />

       <LeftImage
        imageURL="media/images/coin.png" 
        productName="Coin" 
        productDescripton="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>

        <RightImage 
        imageURL="media/images/kiteconnect.png" 
        productName="Kite Connect API" 
        productDescripton="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
        tryDemo="" 
        />

       <LeftImage
        imageURL="media\images\varsity.png" 
        productName="Varsity mobile" 
        productDescripton="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>


        

      <Universe />

    </>
  );
}

export default ProductPage;
