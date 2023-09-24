
import Slider from "react-slick";
import styles from './Category.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = (props) =>
{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      }
      // console.log(props.gallery[0].slider_image.url)
    return (
       <div className={styles.category_section}>
       <div className="category_align">
        <h3 className={styles.category_h}> Our Categories</h3>
       <Slider {...settings}>
        {props.data?.map((e)=>(
         <a href="/" className={styles.category_hyperlink}>
             <img src={e.image_category?.url} alt="Slides"/>   
         </a>  
        ))}
      </Slider>
       </div>
       </div>
    )
}

export default Category;