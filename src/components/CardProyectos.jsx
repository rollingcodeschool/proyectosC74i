import "../App.css";
import { Button, Card, Row, Col } from "react-bootstrap";

const CardProyectos = () => {
  return (
    <Card style={{ width: "18rem", margin: '5px' }}>
      <Row>
        <Col md={4}>
          <Card.Img
            src="https://coworkings.co/wp-content/uploads/2023/05/Lenguajes-programacion.png"
            alt="Card image"
            style={{ height:'100%', width: "120px",objectFit:'cover'}}
            
          />
        </Col>
        <Col md={8}>
          <Card.Body className="cardBody text-light">
            <Card.Title className="fw-bold"> Lista tarea</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, facilis.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CardProyectos;
