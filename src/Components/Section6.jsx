function Section6(props) {
  return (
    <section className="Section6">
      <div className="section6-content"></div>
      <div className="section6-text1">Past clients</div>
      <div className="section6-text2">Trusted by your favourite companies</div>
      <div className="section6-companes">
        <div className="s6-company">
          <img src={props.com1} alt="com" />
        </div>
        <div className="s6-company">
          <img src={props.com2} alt="com" />
        </div>
        <div className="s6-company">
          <img src={props.com3} alt="com" />
        </div>
        <div className="s6-company">
          <img src={props.com4} alt="com" />
        </div>
        <div className="s6-company">
          <img src={props.com5} alt="com" />
        </div>
      </div>
    </section>
  );
}
export default Section6;
