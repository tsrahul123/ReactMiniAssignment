import Slider from "react-slick";
import React, { useRef, useState } from "react";
import "./carSlider.css";

import { SliderNextArrow, SliderPrevArrow } from "../Global/Arrows/arrows";
import { testimonials } from "./carsData";
import cars from "../../assets/testimonials/cityLogo.png";
import { Button } from "antd";
const plusIcon = "../../assets/icons/testi-Plus.svg";
const smeSoukIcon = "../../assets/icons/smesouk-logo.svg";
const red = "../../assets/icons/frame-new.svg";

const Testimonials = ({ data = testimonials }) => {
  let offerSliderRef = useRef(null);
  const [arrowPrevHover, setarrowPrevHover] = useState(false);
  const [arrowNextHover, setarrowNextHover] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    arrows: false,
    cssEase: "cubic-bezier(0.800, -0.4, 0.9, 1)",
    autoplay: false,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

  const prevArrowHover = (mouseType) => {
    mouseType == "mouseenter"
      ? setarrowPrevHover(true)
      : setarrowPrevHover(false);
  };
  const NextArrowHover = (mouseType) => {
    mouseType == "mouseenter"
      ? setarrowNextHover(true)
      : setarrowNextHover(false);
  };

  return (
    <section className="relative font-titi py-28 h-full px-5 lg:px-20">
      {/* Arrows for Slider */}
      <SliderPrevArrow
        classList={`${
          data.length > 1 ? "!flex" : "!hidden"
        } left-2 homePageTesti-arrows`}
        onClick={() => offerSliderRef.slickPrev()}
        hover={arrowPrevHover}
        onMouseEnter={(e) => prevArrowHover(e.type)}
        onMouseLeave={(e) => prevArrowHover(e.type)}
      />
      <SliderNextArrow
        classList={`${
          data && data.length > 1 ? "!flex" : "!hidden"
        } right-2  homePageTesti-arrows`}
        onClick={() => offerSliderRef.slickNext()}
        hover={arrowNextHover}
        onMouseEnter={(e) => NextArrowHover(e.type)}
        onMouseLeave={(e) => NextArrowHover(e.type)}
      />
      {/* Arrows for Slider */}
      <div className="relative w-full">
        <Slider
          {...settings}
          ref={(slider) => (offerSliderRef = slider)}
          className="text-center"
        >
          {data &&
            data.map((item) => (
              <div
                key={`testimonial_${item.id}`}
                className="homePage-testimonials bg-white border h-full rounded-xl px-8 py-10"
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="h-60 w-64 mr-3 object-cover"
                    src={item.img_url}
                    alt="carimage"
                  />
                  <p className="capitalize">{item.name}</p>
                  <p>{item.avg_horsepower}  kwh</p>
                  <p>{item.avg_price}  Rupees per hour</p>
                  <Button className="w-64 rounded-xl bg-coral">Explore</Button>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
