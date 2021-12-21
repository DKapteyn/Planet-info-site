import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Venus() {
    return (
        <>
           <Main
           planet = {planet[1].name}
            para = {planet[1].overview.content}
            image = {planet[1].images.planet}
           
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
