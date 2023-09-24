import Carousel from "../Utils/Carousel";
import { useSinglePrismicDocument } from "@prismicio/react";
import Category from "../Utils/Category";
import Brands from "../Utils/Brands";

const Home = () =>
{
    const [home] = useSinglePrismicDocument('home');
    const categoryData = home?.data?.categories_display;
    const brandData = home?.data?.brands_section
    const gallery = home?.data?.slider_rk
    
 return (
   <>
       <Carousel gallery ={gallery} />
    <Category data = {categoryData}/>
     <Brands data={brandData}/>
   </>
  )
}
export default Home;