import "bootstrap/dist/css/bootstrap.css";
import CardProyectos from "./CardProyectos";
import { Row } from "react-bootstrap";
import imgContador from "../assets/imgContador.png";
import listadoTareas from "../assets/listadoTareas.png";
import "../Banner.css";
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
        <CardProyectos
          urlProyecto="https://primerappreact-rc.netlify.app/"
          urlGitHub="https://github.com/rollingcodeschool/primerAppReact-c74i"
          nombreProyecto="Contador"
          descProyecto="Esta web posee un botón que hace incrementar un número hasta un valor deseado"
          imgProyecto={imgContador}
        ></CardProyectos>
        <CardProyectos
          urlProyecto="https://listadodetareas-rc.netlify.app/"
          urlGitHub="https://github.com/Agustin030s/listaTareas.git"
          nombreProyecto="Listado de Tareas"
          descProyecto="En está página web encontraras un formulario para cargar tus tareas, estas tareas se guardan en local storage y podrás eliminarlas cuando desees."
          imgProyecto={listadoTareas}
        ></CardProyectos>
        <CardProyectos></CardProyectos>
      </Row>
    </>
  );
};

export default HomePage;
