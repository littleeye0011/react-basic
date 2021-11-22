import ImageData from "./ImageData";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const lenght = ImageData.length;

  const prevSlide = () => {
    // if (current === 0) {
    //   setCurrent(lenght - 1);
    // } else {
    //   setCurrent(current - 1);
    // }

    current === 0 ? setCurrent(lenght - 1) : setCurrent(current - 1);
  };
  const nextSlide = () => {
    // if (current === lenght - 1) {
    //   setCurrent(0);
    // } else {
    //   setCurrent(current + 1);
    // }

    current === lenght - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  return (
    <section className="slider">
      <BiLeftArrow className="leftArrow" onClick={prevSlide} />
      <BiRightArrow className="rightArrow" onClick={nextSlide} />
      {ImageData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img src={data.image} alt={data.title} className="image" />
                <p>{data.title}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
