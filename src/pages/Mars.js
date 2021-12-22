import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Mars(props) {
    
    
    return (
        <>
         
           <Main 
           planetNumber = {3}/>
           <Footer
           rotation = {planet[3].rotation}
           revolution={planet[3].revolution}
           radius={planet[3].radius}
           temperature={planet[3].temperature}

           
           /> 
        </>
    )
}