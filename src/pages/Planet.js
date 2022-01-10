import Main from "../components/Main";
import Footer from "../components/Footer";
import { useContext } from "react";
import { dropDownContext } from "../App";


export default function Planet(props) {
  const visible = useContext(dropDownContext)
  return (
      <div className={`${props.class} planet${visible}`}>
      <Main planetNumber={props.planetNumber} />
      <Footer planetNumber={props.planetNumber} />
    </div>
     );
}
