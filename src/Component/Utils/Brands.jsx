
import Slider from "react-slick";
import styles from './Category.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Brands = (props) =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      }
    return (
        <div className={styles.category_section}>
        <div className="brand_align">
         <h3 className={styles.brand_h} style={{textAlign : 'center !important'}}> Our Brands</h3>
        <Slider {...settings}>
         {props.data?.map((e)=>(
              <img src={e.brand_image?.url} alt="Slides"/>   
         ))}
       </Slider>
        </div>
        </div>
     )
}

export default Brands;