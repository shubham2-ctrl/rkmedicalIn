import { Link, useParams } from "react-router-dom";

const Products = (props) => 
{
    console.log(props.productData);

    const {category} = useParams();
    const count = props.productData?.filter((p)=>(p.category_name=== category));
   
return (
    <>
    <section className="section-pagetop bg">
{/* <div className="container">
	<h2 className="title-page">
	   Showing Search Results for " ADD name"

	"slug"</h2>
	
</div>  */}
</section>

<section className="section-content padding-y">
<div className="container store-component">

<div className="row">
	<aside className="col-md-3 float-left">
		
{/* <div className="card">
	<article className="filter-group">
		<header className="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
				<i className="icon-control fa fa-chevron-down"></i>
				<h6 className="title">Categories</h6>
			</a>
		</header>
		<div className="filter-content collapse show" id="collapse_1" >
			<div className="card-body">
				
				<ul className="list-menu">
				<li><a href="{{category.get_url}}"> " cat name"  </a></li>
				</ul>

			</div> 
		</div>
	</article>
	
	
</div>  */}

	</aside> 
	<main className="col-md-9">

<header className="border-bottom mb-4 pb-3">
		<div className="form-inline pt-2">
			<span className="mr-md-auto ">  <b> {count?.length} </b> Items Found </span>
			
		</div>
</header>

<div className="row">
      
        {
            props.productData?.filter((p)=>(p.category_name=== category)).map((e)=>(
        <div className="col-md-4">
		<Link to={`${e.product_url}`} className=" text-decoration-none">
		<figure className="card card-product-grid">
			<div className="img-wrap"> 				
				<img src={e.product_image.url} alt ="Product Image"/>				
			</div> 
			<figcaption className="info-wrap" >
				<div className="fix-height" style={{height : "auto !important"}}>
					<Link  to={`${e.product_url}`} className="title mb-2 p-1 text-decoration-none">{e.product_title}</Link>
					
				</div>
				<a href={`https://wa.me/+917903815554?text=I wanted to enquire about ${e.product_title}!`} className="btn btn-block btn-primary p-1">Ask For Price</a>
			</figcaption>
		</figure>
		</Link>
	</div> 
            ))
        }
	
	

		
</div> 


{/* <nav className="mt-4" aria-label="Page navigation sample">
  <ul className="pagination">


    <li className="page-item "><a className="page-link" href="?page={{products.previous_page_number}}">Previous</a></li>
 
    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
   
		<li className="page-item active"><a className="page-link" href="#">{{i}}</a></li>
		
		  <li className="page-item "><a className="page-link" href="?page={{i}}">{{i}}</a></li>
		


    <li className="page-item"><a className="page-link" href="?page={{products.next_page_number}}">Next</a></li>
    <li className="page-item disabled"><a className="page-link" href="#">Next</a></li>
	
	
  </ul>

</nav> */}

	</main> 

</div>

</div> 
</section>
    </>

)
}

export default Products;