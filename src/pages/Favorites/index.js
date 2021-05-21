import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import CardBook from '../../components/CardBook';

export default function Favorites() {
  const {
    favorites,
  } = useSelector((state) => state.books);

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="navLinks">
            <Link to="/">
              Home
            </Link>
            <Link to="/favoritos">
              Favoritos
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        {favorites.map(((book) => (
          <Col key={book.id} lg={3} sm={12}>
            <CardBook
              id={book?.id}
              book={book}
              thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
              title={book?.volumeInfo?.title}
              description={book?.volumeInfo?.description}
              date={book?.volumeInfo?.publishedDate}
            />
          </Col>
        )))}
      </Row>
    </Container>
  );
}
