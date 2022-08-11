import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import ReactSimplyCarousel from "react-simply-carousel";

const Carousel = ({ images }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        // autoplay
        // infinite
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "transparent",
            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <BiArrowBack className="rotated" />,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "transparent",
            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <BiArrowBack />,
        }}
        speed={1500}
        easing="linear"
      >
        {images.map((img) => (
          <img
            className="imageFrame"
            src={img.image}
            alt="AI generated landscape"
          />
        ))}
      </ReactSimplyCarousel>
    </div>
  );
};

export default Carousel;
