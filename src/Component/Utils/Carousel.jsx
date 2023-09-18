import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = (props) =>
{
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
      // console.log(props.gallery[0].slider_image.url)
    return (
        <Slider {...settings}>
        {props.gallery?.map((e)=>(
          <img src={e.slider_image?.url} alt="Slides"/>     
        ))}
      </Slider>
    )

}

export default Carousel;