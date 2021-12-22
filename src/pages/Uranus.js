import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Uranus(props) {
    return (
        <>
           <Main
           planetNumber = {6}
           />
           <Footer
           rotation = {planet[6].rotation}
           revolution={planet[6].revolution}
           radius={planet[6].radius}
           temperature={planet[6].temperature}

           
           /> 
        </>
    )
}
