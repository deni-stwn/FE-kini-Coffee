import React, { useEffect, useState } from "react";
import Nav from "../component/nav";
import Banner from "../component/banner/bannerTitle";
import ProductList from "../component/product/ProductList";
import AboutUs from "../component/aboutUs/aboutUs";
import Footer from "../component/footer";
import ArticleKiniCoffee from "../component/articlesComponent/articleKiniCoffee";
import { useScrollHandler } from "../util/handleScroll";

const Home = () => {
  const scrollY = useScrollHandler();

  const navbarIconButton = scrollY > 0 ? `` : `text-white`;
  return (
    <>
      <div className="overflow-hidden">
        <Nav navbarClass={navbarIconButton} />
        <Banner />
        <AboutUs />
        <ProductList />
        <ArticleKiniCoffee />
        <Footer />
      </div>
    </>
  );
};

export default Home;
