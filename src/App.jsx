import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import s2f1 from "./images/s2-f1.png";
import s2f2 from "./images/s2-f2.png";
import s2f3 from "./images/s2-f3.png";
import s2f4 from "./images/s2-f4.png";
import com1 from "./images/company1.png";
import com2 from "./images/company2.png";
import com3 from "./images/company3.png";
import com4 from "./images/company4.png";
import com5 from "./images/company5.png";
import Footer from "./Components/Footer";
import fIcon from "./images/twitter.svg";
import fIcon2 from "./images/instagram.svg";
import fIcon3 from "./images/facebook.svg";

function App() {
  return (
    <>
      <Header />
      <Main
        s2f1={s2f1}
        s2f2={s2f2}
        s2f3={s2f3}
        s2f4={s2f4}
        com1={com1}
        com2={com2}
        com3={com3}
        com4={com4}
        com5={com5}
      />
      <Footer fIcon={fIcon} fIcon2={fIcon2} fIcon3={fIcon3}/>
    </>
  );
}

export default App;
