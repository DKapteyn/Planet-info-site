import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Planet(props) {
  return (
    <div className={props.class}>
      <Main planetNumber={props.planetNumber} />
      <Footer planetNumber={props.planetNumber} />
    </div>
  );
}
