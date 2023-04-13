import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

function Main(props) {
  return (
    <main>
      <Section1 />
      <Section2
        s2f1={props.s2f1}
        s2f2={props.s2f2}
        s2f3={props.s2f3}
        s2f4={props.s2f4}
      />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6
        com1={props.com1}
        com2={props.com2}
        com3={props.com3}
        com4={props.com4}
        com5={props.com5}
      />
      <Section7 />
      <Section8 />
    </main>
  );
}
export default Main;
