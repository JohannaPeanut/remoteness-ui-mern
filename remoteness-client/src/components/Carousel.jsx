import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const Carousel = ({ images }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "white",
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
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "white",
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
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <img
          className="imageFrame"
          src={images[0].image}
          alt="AI generated landscape"
        />
        <img
          className="imageFrame"
          src={images[1].image}
          alt="AI generated landscape"
        />
        <img
          className="imageFrame"
          src={images[2].image}
          alt="AI generated landscape"
        />
        <img
          className="imageFrame"
          src={images[3].image}
          alt="AI generated landscape"
        />
      </ReactSimplyCarousel>
    </div>
  );
};

export default Carousel;
