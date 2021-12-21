import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Saturn() {
    return (
        <>
           <Main
           planet = {planet[5].name}
            para = {planet[5].overview.content}
            image = {planet[5].images.planet}
           
           />
           <Footer
           rotation = {planet[5].rotation}
           revolution={planet[5].revolution}
           radius={planet[5].radius}
           temperature={planet[5].temperature}

           
           /> 
        </>
    )
}
