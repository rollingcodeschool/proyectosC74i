import "bootstrap/dist/css/bootstrap.css";
import CardProyectos from "./CardProyectos";
import { Container } from "react-bootstrap";
const HomePage = () => {
  return (
    <Container>
      <div className="py-5 text-center container text-light">
       <h1 className="fw-bold"> Proyectos De La Comision 74 i</h1>
        <h4 className="fw-bold py-4">
        "Bienvenido al mundo IT: Donde cada línea de código es un sueño convertido en realidad."
        </h4>
      </div>
      <CardProyectos></CardProyectos>

    
    </Container>
  );
};

export default HomePage;