import Main from '../components/Main';
import Footer from '../components/Footer';
import planet from '../components/Data'
export default function Jupiter() {
    return (
        <>
           <Main
           planet = {planet[4].name}
            para = {planet[4].overview.content}
            image = {planet[4].images.planet}
           
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