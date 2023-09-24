
import './App.css';
import Home from './Component/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Utils/Navbar';
import LowerNav from './Component/Utils/LowerNav';
import Footer from './Component/Utils/Footer';
import {Route, Routes} from 'react-router-dom'
import About from './Component/Pages/About';
import { useSinglePrismicDocument } from "@prismicio/react";
import Products from './Component/Pages/Products';
import ProductDetails from './Component/Pages/ProductDetails';

function App() {
  const [home] = useSinglePrismicDocument('home');
  const navbarData = home?.data?.categories_display;
  const [products] = useSinglePrismicDocument('products')
  const productData = products?.data?.products_list
  

  return (
 <>
    <Navbar/>
    <LowerNav data={navbarData}/>
    <Routes>
      
      <Route exact path="/" element={<Home />} ></Route>
      <Route exact path="/About" element={<About />} ></Route>
      <Route exact path="/:category" element={<Products productData={productData}/>} ></Route>
      <Route exact path="/:category/:productId" element={<ProductDetails productData={productData}/>} ></Route>
      
     
    </Routes>
    <Footer/>
 </>
  );
}

export default App;
