import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageSlider() {
  return (
    <Carousel
     className=""
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img className="h-96 " src="src/assets/welcome-slide.png" alt="Welcome Image" />
      </div>
      <div>
        <img className="h-96" src="src/assets/sale-slide.png" alt="SaleAd" />
      </div>
      <div>
        <img className="h-96" src="src/assets/samsung-monitor-slide.png" alt="Samsung Monitor" />
      </div>
    </Carousel>
  );
}
