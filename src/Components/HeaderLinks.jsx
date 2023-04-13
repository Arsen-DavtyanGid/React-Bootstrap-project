function HeaderLinks() {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.toggle("add");
  }
  return (
    <div className="header-partRight">
      <div className="headerLinks">
        <a href="#">Business areas</a>
        <a href="#">Featured images</a>
        <a href="#">Gear cage</a>
        <a href="#">Contact</a>
        <button className="header-btn">Get template</button>
      </div>
      <div className="manu-bar">
        <a href="#" onClick={hiddenManu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 28 24"
          >
            <path
              fill="white"
              d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
export default HeaderLinks;
