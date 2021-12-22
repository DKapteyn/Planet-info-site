import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Jupiter(props) {
    return (
        <>
           <Main
           planetNumber={4}
           
           />
           <Footer
           rotation = {planet[4].rotation}
           revolution={planet[4].revolution}
           radius={planet[4].radius}
           temperature={planet[4].temperature}

           
           /> 
        </>
    )
}