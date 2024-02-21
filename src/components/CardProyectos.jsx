import'../App.css';
import React from "react";
import { Col, Card, Badge, Stack } from "react-bootstrap";
import { DiReact,DiJavascript1 } from "react-icons/di";

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
          <Card.Text className='text-center'>Descripción breve del proyecto</Card.Text>
        <Stack direction="horizontal" className="badge-font d-flex justify-content-center" gap={5} >
        <Badge><DiReact /></Badge>
        <Badge><DiJavascript1 /></Badge>
        </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardProyectos;
