import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Saturn(props) {
    return (
        <>
           <Main
           planetNumber = {5}
           
           />
           <Footer
           rotation = {planet[5].rotation}
           revolution={planet[5].revolution}
           radius={planet[5].radius}
           temperature={planet[5].temperature}

           
           /> 
        </>
    )
}
