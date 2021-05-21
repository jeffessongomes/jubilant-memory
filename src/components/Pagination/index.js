import { useDispatch, useSelector } from 'react-redux';

import { retrieveBooks } from '../../ducks/booksSlice';

const Pagination = () => {
  const dispatch = useDispatch();

  const {
    totalPage,
    page,
  } = useSelector((state) => state.books);
  function handlePage(e) {
    dispatch(retrieveBooks(e));
  }

  if (page >= 6) {
    return (
      <div className="paginationContainer">
        {totalPage.map((pag) => (
          <div key={pag}>
            {pag === 0 && page >= 7
              ? (
                <>
                  <button
                    type="button"
                    onClick={() => handlePage(pag)}
                    className={`paginationContainer__button ${page === pag && 'active'}`}
                  >
                    {pag + 1}
                  </button>
                  <button
                    type="button"
                    className="paginationContainer__button"
                  >
                    ...
                  </button>
                </>
              )

              : <></>}

            {
          pag >= page - 1 && pag <= page + 6
            ? (
              <button
                type="button"
                onClick={() => handlePage(pag)}
                className={`paginationContainer__button ${page === pag && 'active'}`}
              >
                {pag + 1}
              </button>
            )
            : (
              <></>
            )
          }
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="paginationContainer">
      {totalPage.map((pag) => (
        <div key={pag}>
          {
          pag <= 6
          && (
            <button
              type="button"
              onClick={() => handlePage(pag)}
              className={`paginationContainer__button ${page === pag && 'active'}`}
            >
              {pag + 1}
            </button>
          )
          }
        </div>
      ))}
    </div>
  );
};

export default Pagination;
