function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row foLi">
          <div className="col-lg-8">
            <div className="logo"></div>
            <div className="footer-logo-text">
              Photographers & videographers capturing the world around us.
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6">
            <div className="footer-lists">
              <ul>
                <p>Business areas</p>
                <li>
                  <a href="#">Product Photography</a>
                </li>
                <li>
                  <a href="#">Architecture Photography</a>
                </li>
                <li>
                  <a href="#">Drone Photography</a>
                </li>
                <li>
                  <a href="#">Wildlife Photography</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6">
            <div className="footer-lists">
              <ul>
                <p>Pages</p>
                <li>
                  <a href="#">Gear cage</a>
                </li>
                <li>
                  <a href="#">Featured images</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Style guide</a>
                </li>
                <li>
                  <a href="#">Instructions</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row foLis">
          <div className="col-lg-8">
            <div className="footer-section2-text1">
              Subscribe to our newsletter
            </div>
            <div className="footer-section2-text2">
              Read about all the things we do.
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-search">
              <input type="search" id="search" />
            </div>
          </div>
        </div>
        <div className="row foMe">
          <div className="col-lg-6">
            <div className="footer-section3-text">
              © Aperture Photography, Inc. All rights reserved.Licensing
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-icons">
              <a href="#">
                <img src={props.fIcon} alt="icon" />
              </a>
              <a href="#">
                <img src={props.fIcon2} alt="icon" />
              </a>
              <a href="#">
                <img src={props.fIcon3} alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
