import'../App.css';
import React from "react";
import { Col, Card, Badge, Stack } from "react-bootstrap";
import { DiReact,DiJavascript1 , DiGithubBadge} from "react-icons/di";

function CardProyectos({urlProyecto, nombreProyecto, descProyecto, imgProyecto}) {
  return (
    <Col  sm={6} lg={4}>
      
      <Card className="mb-4 border-0" style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={imgProyecto}
          className="w-100"
        />
        <Card.Body className="cardBody text-light">
          <Card.Title className="text-center fw-bold">
            {nombreProyecto}
          </Card.Title>
          <Card.Text className='text-center'>{descProyecto}</Card.Text>
        <Stack direction="horizontal" className="badge-font d-flex justify-content-center" gap={5} >
        <Badge><DiReact /></Badge>
        <Badge bg="warning"><DiJavascript1 /></Badge>
        </Stack> 

        <Stack direction="horizontal" className="my-4 badge-font d-flex justify-content-center">
          <a href={urlProyecto} className='text-decoration-none' target='_blank'>
            <Badge bg="dark" className="d-flex">
              <DiGithubBadge className='display-5'/>
              <div className='mt-2'>
                <p className='mt-1'>Ir al Repositorio</p>
              </div>
                        
            </Badge>
          </a>
        </Stack> 
        </Card.Body>

      </Card>
    </Col>
  );
}

export default CardProyectos;
