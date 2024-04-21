import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function IndividualIntervalsExample() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <a href="https://i.pinimg.com/564x/b0/02/6a/b0026a3cbfab5f79dda1873b3415230c.jpg"></a>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <a href="https://i.pinimg.com/564x/b0/02/6a/b0026a3cbfab5f79dda1873b3415230c.jpg"></a>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://i.pinimg.com/564x/b0/02/6a/b0026a3cbfab5f79dda1873b3415230c.jpg"></a>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;
