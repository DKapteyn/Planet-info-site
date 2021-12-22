import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Neptune(props) {
    return (
        <>
           <Main
           planetNumber = {7}
           
           />
           <Footer
           rotation = {planet[7].rotation}
           revolution={planet[7].revolution}
           radius={planet[7].radius}
           temperature={planet[7].temperature}

           
           /> 
        </>
    )
}
