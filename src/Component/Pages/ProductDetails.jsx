import { useParams } from "react-router-dom";

const ProductDetails = ({productData}) =>{
    const {productId} = useParams();
    const productDetails = productData?.filter((prd)=> prd.product_url === productId )[0];
    console.log(productDetails)

    return ( 

       <>
        <section className="section-content padding-y bg">
  <div className="container">
    <div className="card">
      <div className="row no-gutters p-5">
        <aside className="col-md-5">
          <article className="gallery-wrap">
            <div className="img-big-wrap mainImage">
              <img src={productDetails?.product_image.url}  className="xzoom-gallery" />
            </div>
          </article>

          {/* <ul className="thumb">
            <li>
              <a href={productDetails.product_image.url} target="mainImage">
                <img src={productDetails.product_image.url}  alt="Product Image" className="xzoom-gallery"/>
              </a>
            </li>
          </ul> */}
        </aside>
        <main className="col-md-6 border-left">
          <article className="content-body">
            <h2 className="title p-2 text-center">{productDetails?.product_title}</h2>

            
            <ul className="product_desc">
        {productDetails?.product_description?.map((e)=>( <li >{e.text}</li>))}
    </ul>
            {/* <hr /> */}
            <div className="button_cover_div mt-3">
                 <a target = "blank" href={`https://wa.me/+917903815554?text=I wanted to enquire about ${productDetails?.product_title}!`} className="btn   btn-my-customi mb-2 text-center">
              <span className="text">Whatsapp Now</span>
              <i className="fa fa-whatsapp mx-2" id="whatsapp"></i>
            </a>
            {/* <h5>Currently unavailable</h5> */}
          

            <a href={`https://wa.me/+917903815554?text=I wanted to enquire about ${productDetails?.product_title}!`} className="btn btn-primary btn-my-custom text-center">
              <span className="text">Ask For Price</span>
              <i className="fa fa-paper-plane"></i>
            </a>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
 

</section>

 <section className="section-content tabs bg ">
 <div className="div-tab-container container ">
   <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" data-toggle="tab" href="#home">Description</a>
  </li>
  
</ul>


<div className="tab-content p-2">
  <div className="tab-pane container active text-left" id="home">

   <p>{productDetails?.product_description_up}</p>
  </div>

</div>
 </div>
</section>
       </>
    )
}

export default ProductDetails