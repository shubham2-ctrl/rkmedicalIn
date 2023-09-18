const Navbar =  () =>
{

    return (
        <header>
         <nav class="rk-nav_container">
            <div class="rk-logo_container">
                <a class="rk-medical-a-tag" href="{%url 'home'%}">
                 <img src=" " alt="Logo"/>
                   <span class="rkm">  RK Medical Instruments </span>
                </a>
            </div>

        <div class="rk-left-upperNav">
             <i class="fa fa-mobile"> </i>
           <span class="rkm"> 8340726651 </span> 
            <div class="input-group-append">
			<form action=" " class="search" method = 'GET'>
		  	<div class="input-group w-100">
			    <input type="text" class="form-control" style={{width:"60%"}} placeholder="Search" name = "keyword"/>
			    
			    <div class="input-group-append">
			      <button class="btn btn-primary marginT" type="submit">
			        <i class="fa fa-search"></i>
			      </button>
			    </div>
		    </div>
	    	</form>
			    </div>
        </div>
           
      </nav>
    </header>
    )
}

export default Navbar;