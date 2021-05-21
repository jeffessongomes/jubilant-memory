import { useEffect } from 'react';

import {
  Container, Row, Col,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { retrieveBooks } from '../../ducks/booksSlice';

import CardBook from '../../components/CardBook';
import CardBookSkeleton from '../../components/CardBook/skeleton';
import Pagination from '../../components/Pagination';

import './styles.scss';
import NotFound from '../../components/NotFound';

export default function Home() {
  const dispatch = useDispatch();
  const {
    isLoading,
    page,
    isError,
    items: { items },
  } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(retrieveBooks(page));
  }, [dispatch]);

  async function handleBooks(e) {
    if (e) {
      e.preventDefault();
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    handleBooks();
  }, [page]);

  if (isLoading) {
    return (
      <CardBookSkeleton />
    );
  }

  if (isError) {
    return (<NotFound />);
  }

  return (
    <>
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
          {items?.map(((book) => (
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
          <Col lg={12} sm={12}>
            <Pagination />
          </Col>
        </Row>
      </Container>
    </>
  );
}
