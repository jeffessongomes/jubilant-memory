import { FiSearch } from 'react-icons/fi';
import { Container, Row, Col } from 'react-bootstrap';

import LogoRiachuelo from '../../assets/img/riachuelo.png';

import './styles.scss';

export default function Home() {
  return (
    <header className="header">
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={12} className="header__containerLogo">
            <img src={LogoRiachuelo} loading="lazy" className="header__containerLogo--img" alt="Logo da Riachuelo" />
          </Col>
          <Col lg={8}>
            <form className="header__form">
              <input type="text" className="header__form--input" placeholder="Digite o nome do livro" />
              <button type="submit" className="header__form--button">
                <FiSearch size={24} color="#FFFFFF" />
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
