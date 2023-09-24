const Footer = () =>
{

    return (
        
<footer class="text-center text-lg-start theme-color text-muted footer_main" style={{color : 'white !important '}}>

  <section class="footer_container">
    <div class="container text-center text-md-start  pt-5">

      <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
          <h6 class="text-uppercase text-justify fw-bold mb-4 text-white">
            <img class="logo_image" src=""/> RK Medical Instruments
          </h6>
          <p class="text-left text-white">
            One of the Leading Medical Equipment dealer in Jharkhand.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase  text-justify fw-bold mb-4">
          </h6>
          <p class="text-justify text-white">
            <a href="{% url 'home'%}" class="text-reset text-white text-decoration-none">Home</a>
          </p>
          <p class="text-justify text-white">
            <a href="{% url 'about'%}" class="text-reset text-white text-decoration-none">About Us</a>
          </p>
          <p class="text-justify text-white">
            <a href="{% url 'contact'%}" class="text-reset text-white text-decoration-none">Contact</a>
          </p>
          <p class="text-justify text-white">
            <a href="{% url 'rk_careers'%}" class="text-reset text-white text-decoration-none">Careers</a>
          </p>
       
        </div>

        <div class="col-md-3 col-lg-2 text-justify col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4 text-white">
            Social
          </h6>
          <p class="text-justify text-white">
            <a href="#!" class="text-reset text-white text-decoration-none"> <i class="fab text-center p-2 fa fa-facebook-f mr-3 text-white" ></i>Facebook</a>
          </p>
          <p class="text-justify text-white">
            <a href="#!" class="text-reset text-white text-decoration-none"> <i class="fab text-center p-2  fa fa-instagram mr-3 text-white" ></i>Instagram</a>
          </p>
         
        
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          <h6 class="text-uppercase text-justify fw-bold mb-4 text-white">
            Contact
          </h6>
          <p class="text-justify text-white"><i class="fa fa-home me-3 text-white"></i> Near AV Little Burd School,
Devi Mandap Ratu Road Ranchi
Jharkhand-834005</p>
          <p class="text-justify text-white">
            <i class="fa fa-envelope me-3 text-white"></i>
               rkmedical.co@gmail.com

          </p>
          <p class="text-justify text-white"><i class="fa fa-phone me-3 text-white"></i> +91 651 355 5250</p>
          <p class="text-justify text-white"><i class="fa fa-phone me-3 text-white"></i> +91 82716 89307
</p>
        </div>
 
      </div>

    </div>
  </section>
  </footer>
    )
}

export default Footer;