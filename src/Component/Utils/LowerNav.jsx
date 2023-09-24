import { Dropdown } from "react-bootstrap";
const LowerNav = (props) => {

  

  return (
    <div className="innerDiv-lowerNav theme-color ">
      <nav className="  navbar navbar-dark navbar-expand-md theme-color nav_div ">
        <div
          className="category-wrap dropdown d-inline-block   pr-sm-0 float-left text-center "
          style={{ height: "100%" }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-btn">
                <i className="fa fa-bars margin_adj"></i>
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-2">
            {props.data?.map((e)=>(
              <Dropdown.Item href={`/${e.url_custom}`} className="mt-1">{e.category_nav}</Dropdown.Item>
              ))}
              
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <button
          className="navbar-toggler myBtn text-light float-right "
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav1"
          aria-controls="basicExampleNav1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="  navbar-toggler-icon   "></span>
        </button>

        <div class="collapse navbar-collapse" id="basicExampleNav1">
          <ul class="navbar-nav ml-auto text-center ">
            <li class="nav-item">
              <a href="/" class="nav-link waves-effect text-light ">
                Home
              </a>
            </li>

            <li class="nav-item ">
              <a href="/About" class="nav-link waves-effect text-light ">
                About
              </a>
            </li>

            <li class="nav-item pl-2 mb-2 mb-md-0">
              <a
                href="/"
                type="button"
                class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect px-2 waves-light text-light"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    // <div className=".navbar_lower">
    //     <ul className="home_bar">
    //         <li>Home</li>
    //         <li>My Profile</li>
    //         <li>Category</li>
    //         <li>About</li>
    //         <li>Contact us</li>
    //         <li>Feedback</li>

    //     </ul>

    // </div>
  );
};

export default LowerNav;
