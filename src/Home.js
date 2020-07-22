import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="13423"
          price={2099.0}
          rating={5}
          title='Apple 16" MacBook Pro (Late 2019, Space Gray)'
          image="https://static.bhphoto.com/images/images500x500/apple_mvvj2ll_a_16_macbook_pro_late_1573663014_1520434.jpg"
        />
        {/* Product id, title, price, rating, image */}
        <Product
          id="13323"
          price={349.99}
          rating={5}
          title="DRONE-CLONE XPERTS Drone X Pro Limitless with GPS Auto Return Home, 5G WiFi FPV, 4K UHD Dual Camera, Brushless Motors, Follow Me, 25 Mins Flight Time, Long Control Range Quadcopter
          "
          image="https://www.amazon.com/images/I/71qQwicdPML._AC_SX355_.jpg"
        />
      </div>
      <div className="div home__row">
        <Product
          id="100983"
          price={499.0}
          rating={5}
          title="Newest Oculus Quest All-in-one VR Gaming Headset – 64GB - 2020 Edition -Support Casting to Tablet + VGSION Batteries"
          image="https://www.amazon.com/images/I/71D9OsZmWxL._SX522_.jpg"
        />
        <Product
          id="198003"
          price={23.99}
          rating={5}
          title="Practical SQL: A Beginner's Guide to Storytelling with Data Paperback – May 1, 2018"
          image="https://www.amazon.com/images/I/51iaEcePBoL._SX376_BO1,204,203,200_.jpg"
        />
        <Product
          id="156723"
          price={229.95}
          rating={5}
          title="Apple AirPods Pro"
          image="https://www.amazon.com/images/I/71zny7BTRlL._AC_SX569_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="154413"
          price={39.99}
          rating={5}
          title="GAN 356 Air SM, 3x3 Magnetic Speed Cube Gans Magic Cube 3x3x3 Puzzle Toy (ver. 2019)"
          image="https://www.amazon.com/images/I/61BOh4g6QOL._AC_SY355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
