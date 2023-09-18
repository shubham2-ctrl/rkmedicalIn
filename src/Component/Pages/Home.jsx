import Carousel from "../Utils/Carousel";
import { useSinglePrismicDocument } from "@prismicio/react";
import Navbar from "../Utils/Navbar";

const Home = () =>
{
    const [home] = useSinglePrismicDocument('home');
    const gallery = home?.data?.slider_rk
    
 return (
   <>
     <Navbar/>
    <Carousel gallery ={gallery} />
   </>
  )
}
export default Home;