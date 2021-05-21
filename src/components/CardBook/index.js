import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { setFavorites, setRemoveFavorite } from '../../ducks/booksSlice';

import './styles.scss';

import noImage from '../../assets/img/no-image.jpg';

const CardBook = ({
  thumbnail, title, description, date, id, book,
}) => {
  const dispatch = useDispatch();
  const {
    favorites,
  } = useSelector((state) => state.books);

  function handleFavorite(e) {
    if (!favorites.includes(e)) {
      dispatch(setFavorites([...favorites, e]));
      return;
    }

    dispatch(setRemoveFavorite(e.id));
  }

  return (
    <>
      <button
        className="buttonFavorite"
        type="button"
        onClick={() => handleFavorite(book)}
      >
        {
          favorites.includes(book)
            ? <AiFillStar size="54" color="#F1C40F" />
            : <AiOutlineStar size="54" color="#F1C40F" />
        }
      </button>
      <Link to={`/${id}`} className="cardBook">
        <img
          className="cardBook__img"
          src={thumbnail || noImage}
          alt={`Imagem do livro ${title}`}
          loading="lazy"
        />
        <h3 className="cardBook__title">{title}</h3>
        <p className="cardBook__description">{description || 'Esse livro não possui descrição'}</p>
        <p className="cardBook__date">
          {date
            ? (
              <>
                Publicado em
                {' '}
                {date}
              </>
            )
            : (
              <>
                Data de publicação indisponivel
              </>
            )}
        </p>
      </Link>
    </>
  );
};

export default CardBook;
