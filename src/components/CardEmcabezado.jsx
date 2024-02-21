import Card from "react-bootstrap/Card";

function CardEncabezado() {
  return (
    <Card className="border-0 rounded-0 text-white fw-bold">
      <Card.Img
        src="https://previews.123rf.com/images/monsitj/monsitj2005/monsitj200500032/147649194-fondo-de-tecnolog%C3%ADa-abstracta-de-c%C3%B3digo-de-programaci%C3%B3n-del-desarrollador-de-software-y-banner-de.jpg"
        alt="Card image"
        className="img-fluid d-none d-md-block"
      />
      <Card.ImgOverlay className="top-0">
        <div className="text-center">
          <Card.Title className="mb-0 fw-bold mt-md-5">
            <h1>Proyectos De La Comision 74</h1>
          </Card.Title>
          <Card.Text className="mt-md-5 fw-bold displa">
            "Bienvenido al mundo IT: Donde cada línea de código es un sueño convertido en realidad."
          </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardEncabezado;
