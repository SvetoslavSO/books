import { CustomSelect } from "../CustomSelect/CustomSelect";
import { SearchBar } from "../SearchBar/SearchBar";
import { BOOK_TYPES } from "../../config";
import { TYPES_OF_SORT } from "../../config";
import { isEndOfChunksSelector } from "../../store/books/selector";
import { clearBooks, getBooks, setCurrentParameters, setEndOfChunks, setLoading } from "../../store/books/actions";
import { useDispatch, useSelector } from "react-redux";
import './SearchWindow.scss'


export const SearchWindow = () => {

  const dispatch = useDispatch();

  const isChunksEnded = useSelector(isEndOfChunksSelector)

  function submitInput (action) {
    action.preventDefault(); 
    dispatch(clearBooks());
    if(isChunksEnded) {
      dispatch(setEndOfChunks(false));
    }
    dispatch(setLoading(true));
    const { text, type, sort } = action.target;
    const payload = {
      text: text.value,
      type: type.value,
      sort: sort.value,
      currentChunk: 0
    }
    dispatch(setCurrentParameters(payload));
    dispatch(getBooks(payload));
  }

  return (
    <>
      <form className="form__main" onSubmit={submitInput}>
        <SearchBar
          name={'text'}
          type={'text'}
        />
        <div className="form__selectors">
          <div className="form__select">
            <div className="form__select-title">Categories</div>
            <CustomSelect
              variants={BOOK_TYPES}
              name={'type'}
            />
          </div>
          <div className="form__select">
            <div className="form__select-title">Sorting by</div>
            <CustomSelect
              variants={TYPES_OF_SORT}
              name={'sort'}
            />
          </div>
        </div>
        <input type="submit" hidden />
      </form>
    </>
  )
}