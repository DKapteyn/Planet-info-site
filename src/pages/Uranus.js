import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Uranus() {
    return (
        <>
           <Main
           planet = {planet[6].name}
            para = {planet[6].overview.content}
            image = {planet[6].images.planet}
           
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
