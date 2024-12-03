import Slider from "react-slick";

const Carousel = ({ img1, img2, img3 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  };

  return (
    <div className="projects__item__slider overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Tarjeta de proyecto"
            loading="lazy"
            width="500"
            height="333"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Tarjeta de proyecto"
            loading="lazy"
            width="500"
            height="333"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Tarjeta de proyecto"
            loading="lazy"
            width="500"
            height="333"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
