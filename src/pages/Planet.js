import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Planet(props) {
    return (
        <div className={props.class}>
           <Main
           planetNumber= {props.planetNumber}
           
           />
           <Footer
           rotation = {planet[0].rotation}
           revolution={planet[0].revolution}
           radius={planet[0].radius}
           temperature={planet[0].temperature}

           
           /> 
        </div>
    )
}
