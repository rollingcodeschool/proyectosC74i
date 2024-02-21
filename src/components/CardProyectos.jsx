import React from "react";
import { Col, Card, Row } from "react-bootstrap";

function CardProyectos() {
  return (
    <Col xs={12} sm={6} lg={4}>
      <Card className="mb-4" style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src="https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/03/que-se-necesita-estudiar-para-ser-programador-scaled-1200x675.jpg"
          className="w-100"
        />
        <Card.Body className="cardBody text-light">
          <Card.Title className="text-center fw-bold">
            Nombre Del Proyecto
          </Card.Title>
          <Card.Text>Descripción breve del proyecto</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardProyectos;
