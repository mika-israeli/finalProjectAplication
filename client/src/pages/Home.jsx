import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import YoutubeEmbed from "../components/Video";
import GoogleMaps from "../components/GoogleMaps";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Announcement />
      <Navbar />
      <Slider />
      <GoogleMaps />
      <YoutubeEmbed embedId="rokGy0huYEA" />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
