import HeaderLinks from "./HeaderLinks";

function Header() {
  return (
    <header>
      <div className="manu-bar-mobile">
        <ul>
          <li>
            <a href="#">Business areas</a>
          </li>
          <li>
            <a href="#">Featured images</a>
          </li>
          <li>
            <a href="#">Gear cage</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button>Get template</button>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6 col-6">
            <div className="logo-flex">
              <div className="logo"></div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6 col-6">
            <HeaderLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
