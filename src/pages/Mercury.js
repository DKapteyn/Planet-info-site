import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Mercury() {
    return (
        <>
           <Main
           planet = {planet[0].name}
            para = {planet[0].overview.content}
            image = {planet[0].images.planet}
           
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
