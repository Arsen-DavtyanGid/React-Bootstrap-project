import S2Section from "./S2Section";

function Section2(props) {
  return (
    <section className="Section2">
      <div className="section2-text1">What we do.</div>
      <div className="section2-text2">The areas that we're specialized in.</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <S2Section
              s2f={props.s2f1}
              text1="Product Photography"
              text2="Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam."
            />
          </div>
          <div className="col-lg-6">
            <S2Section
              s2f={props.s2f2}
              text1="Architecture Photography"
              text2="Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <S2Section
              s2f={props.s2f3}
              text1="Drone Photography"
              text2="Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam."
            />
          </div>
          <div className="col-lg-6">
            <S2Section
              s2f={props.s2f4}
              text1="Wildlife Photography"
              text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section2;
