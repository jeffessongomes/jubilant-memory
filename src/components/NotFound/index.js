import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => (
  <Container>
    <Row>
      <Col lg={12} className="d-flex justify-content-center mt-5">
        <strong>Não encontramos nenhum livro aqui! :(</strong>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
