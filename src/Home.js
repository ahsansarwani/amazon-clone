import React from "react";
import Product from "./Product";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          title="Razer Kraken X Ultralight Gaming Headset: 7.1 Surround Sound - Lightweight Aluminum Frame"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61QIMDB3YTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="12345"
          title="Razer Kraken X Ultralight Gaming Headset: 7.1 Surround Sound - Lightweight Aluminum Frame"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61QIMDB3YTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="136482"
          title="Razer Kraken X Ultralight Gaming Headset: 7.1 Surround Sound - Lightweight Aluminum Frame"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61QIMDB3YTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="46731"
          title="Kindle Oasis Now with adjustable warm light"
          price={300}
          rating={4}
          image="https://m.media-amazon.com/images/I/61moEqqnwzL._AC_SL1000_.jpg"
        />

        <Product
          id="8741"
          title="Razer Viper Mini Ultralight Gaming Mouse: Fastest Gaming Switches"
          price={10.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/516NCsvHpmL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="47318"
          title="Garmin Venu Sq, GPS Smartwatch with Bright Touchscreen Display, Up to 6 Days of Battery Life, Light Gold and White"
          price={150.75}
          rating={5}
          image="https://m.media-amazon.com/images/I/71u+yZr1DAL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
