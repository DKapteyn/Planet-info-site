import Main from "../components/Main";
import Footer from "../components/Footer";
import { useContext } from "react";
import { dropDownContext } from "../App";
import { motion } from "framer-motion";




export default function Planet(props) {
  const visible = useContext(dropDownContext)
  return (
      <motion.div className={`${props.class} planet${visible}`}
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition={{duration:0.3}}
      
      >
      <Main planetNumber={props.planetNumber} />
      <Footer planetNumber={props.planetNumber} />
    </motion.div>
     );
}
