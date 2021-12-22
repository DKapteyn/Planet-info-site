import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Venus(props) {
    return (
        <>
           <Main
           planetNumber = {1}
          />
           <Footer
           rotation = {planet[1].rotation}
           revolution={planet[1].revolution}
           radius={planet[1].radius}
           temperature={planet[1].temperature}

           
           /> 
        </>
    )
}
