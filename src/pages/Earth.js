import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Earth() {
    return (
        <>
           <Main
           planet = {planet[2].name}
            para = {planet[2].overview.content}
            image = {planet[2].images.planet}
           
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
