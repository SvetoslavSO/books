import { useSelector, useDispatch } from 'react-redux';
import { 
  booksSelector,
  currentChunkSelector,
  isEndOfChunksSelector,
  loadingSelector,
  numberOfBooksSelector,
  parametersSelector,
  requestedSelector
} from '../../store/books/selector';
import { setLoading, getChunk} from '../../store/books/actions';
import { BookCard } from '../../components/BookCard/BookCard';
import { LoadingComponent } from '../../components/LoadingComponent/LoadingComponent';
import './MainPage.scss';
import { Link } from 'react-router-dom';

import { SearchWindow } from '../../components/SearchWindow/SearchWindow';

export const MainPage = () => {
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const requested = useSelector(requestedSelector);
  const parameters = useSelector(parametersSelector);
  const currentChunk = useSelector(currentChunkSelector);
  const isLoading = useSelector(loadingSelector);
  const numberOfBooks = useSelector(numberOfBooksSelector);
  const isChunksEnded = useSelector(isEndOfChunksSelector);

  function loadMore () {
    dispatch(setLoading(true));
    const { text, type, sort } = parameters;
    const payload = {
      text: text,
      type: type,
      sort: sort,
      currentChunk: currentChunk
    }
    dispatch(getChunk(payload));
  }

  return (
    <>
      <div className="main-page__header">
        <h1 className='main-page__header-title'>Search for books</h1>
        <SearchWindow/>
      </div>
      <div className='container'>
        { books.length !== 0 ? <div className="books-number">Found {numberOfBooks} results</div> : ''}
        <ul className='books-list'>
          {books.length ? books.map((bookItem, index) => {
            return (
              <Link className='books-link' to={`/volume/${bookItem.id}`} state={{name:bookItem.id}} key={index}>
                <BookCard
                  key={index}
                  title={bookItem.title}
                  category={bookItem.categories}
                  authors={bookItem.authors}
                  image={bookItem.image}
                />
              </Link>
            )
          }) : requested !== false && !isLoading ? <div className='no-books'>There is no books for your request</div> : ''}
        </ul>
        {isLoading ? <LoadingComponent></LoadingComponent> : ''}
        {books.length && isChunksEnded === false  ? <button className='button__load-more' type='submit' onClick={() => loadMore()}>load more</button> : ''}
      </div>
    </>
  )
}