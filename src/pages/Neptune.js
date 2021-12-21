import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Neptune() {
    return (
        <>
           <Main
           planet = {planet[7].name}
            para = {planet[7].overview.content}
            image = {planet[7].images.planet}
           
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
