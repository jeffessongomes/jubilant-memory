import { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { useRouteMatch } from 'react-router-dom';

import noImage from '../../assets/img/no-image.jpg';
import api from '../../services/api';
import { createFullPostMarkup } from '../../components/innerHTML';

import './styles.scss';

export default function Book() {
  const [book, setBook] = useState({});

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`/volumes/${params.id}`).then((response) => {
      setBook(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="bookContainer">
              <img
                src={book?.volumeInfo?.imageLinks?.thumbnail || noImage}
                alt={`Capa do livro ${book?.volumeInfo?.title}`}
                loading="lazy"
                className="bookContainer__img"
              />
              <h1 className="bookContainer__h1">
                {book?.volumeInfo?.title}
              </h1>
              <strong className="bookContainer__authorTitle">
                Autores
              </strong>
              <ul className="bookContainer__authors">
                {book?.volumeInfo?.authors?.map((author) => (
                  <li key={author}>{author}</li>
                ))}
              </ul>
              <strong className="bookContainer__published">
                Lançado em
                {' '}
                {book?.volumeInfo?.publishedDate}
              </strong>
              <p className="bookContainer__description" dangerouslySetInnerHTML={createFullPostMarkup(book?.volumeInfo?.description)} />
              <a className="bookContainer__link" href={book?.volumeInfo?.infoLink} target="_blank" rel="noopener noreferrer">Acessar</a>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
