import "bootstrap/dist/css/bootstrap.css";
import CardProyectos from "./CardProyectos";
import { Row,} from "react-bootstrap";
import imgContador from "../assets/imgContador.png"
import '../Banner.css';
const HomePage = () => {
  return (
    <>
      <div className=" text-light fw-bold container-fluid text-center img-banner mb-4 ">
        <div className="img-banner-text">
          
        <h2 className="display-6 fw-bold">Proyectos Comision 74i</h2>
        <h1 className=" img-banner-title">
          Bienvenido al mundo IT: Donde cada línea de código es un sueño
          convertido en realidad
        </h1>
        </div>
      </div>

      <Row className="  container-fluid justify-content-around mx-auto">
        <CardProyectos urlProyecto="https://github.com/rollingcodeschool/primerAppReact-c74i" nombreProyecto="Contador" descProyecto="Esta web posee un botón que hace incrementar un número hasta un valor deseado" imgProyecto={imgContador}></CardProyectos>
        <CardProyectos></CardProyectos>
        <CardProyectos></CardProyectos>
      </Row>
    </>
  );
};

export default HomePage;
