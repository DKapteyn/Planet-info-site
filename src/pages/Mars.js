import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Mars() {
    return (
        <>
           <Main
           planet = {planet[3].name}
            para = {planet[3].overview.content}
            image = {planet[3].images.planet}
           
           />
           <Footer
           rotation = {planet[3].rotation}
           revolution={planet[3].revolution}
           radius={planet[3].radius}
           temperature={planet[3].temperature}

           
           /> 
        </>
    )
}