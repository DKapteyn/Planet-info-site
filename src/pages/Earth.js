import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Earth(props) {
    return (
        <>
           <Main
           planetNumber={2}
           
           />
           <Footer
           rotation = {planet[2].rotation}
           revolution={planet[2].revolution}
           radius={planet[2].radius}
           temperature={planet[2].temperature}

           
           /> 
        </>
    )
}
