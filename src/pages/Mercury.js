import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Mercury(props) {
    return (
        <>
           <Main
           planetNumber= {0}
           
           />
           <Footer
           rotation = {planet[0].rotation}
           revolution={planet[0].revolution}
           radius={planet[0].radius}
           temperature={planet[0].temperature}

           
           /> 
        </>
    )
}
