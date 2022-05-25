import React from "react";
import Testimonials from "../CarsSlider/carsSlider";
import Header from "../Global/Header/header";
import Layout from "../Layout";
import "./home.css";

const Booking = () => {
  return (
    <Layout>
      <div className="Home_Div relative">
        <Header />
        <div>
          <Testimonials />
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
