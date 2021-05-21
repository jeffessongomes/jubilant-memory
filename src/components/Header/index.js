import { useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';

import {
  Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import LogoRiachuelo from '../../assets/img/riachuelo.png';

import { retrieveBooks, setSearch } from '../../ducks/booksSlice';

import './styles.scss';

const Header = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    search,
  } = useSelector((state) => state.books);

  function handleSearch(e) {
    dispatch(setSearch(e.target.value));
  }

  useEffect(() => {
    dispatch(retrieveBooks(0, search));
  }, [search]);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__containerLogo">
          <img
            src={LogoRiachuelo}
            loading="lazy"
            className={`header__containerLogo--img ${isLoading && 'isLoading'}`}
            alt="Logo da Riachuelo"
          />
        </div>
        <form className="header__form" onSubmit={handleSearch}>
          <input
            type="text"
            className="header__form--input"
            placeholder="Digite o nome do livro"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
          <button type="submit" className="header__form--button" onClick={handleSearch}>
            {isLoading
              ? <Spinner size="sm" animation="border" variant="dark" />
              : <FiSearch size={24} color="#BDC3C7" />}
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
