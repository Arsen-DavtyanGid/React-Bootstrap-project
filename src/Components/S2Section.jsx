function S2Section(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.s2f})` }}
      className="section2-section"
    >
      <div className="section2-content">
        <div className="section2-content-text1">{props.text1}</div>
        <div className="section2-content-text2">{props.text2}</div>
        <div className="section2-btn">
          <button>
            <div className="section2-btn2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="7" cy="7" r="6.5" />
                  <circle cx="7" cy="7" r="2.5" />
                  <path d="M4.5 7V1M7 4.5h6M9.5 7v6M7 9.5H1" />
                </g>
              </svg>
            </div>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
export default S2Section;
