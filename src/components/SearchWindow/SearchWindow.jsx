import { CustomSelect } from "../CustomSelect/CustomSelect";
import { SearchBar } from "../SearchBar/SearchBar";
import { BOOK_TYPES } from "../../config";
import { TYPES_OF_SORT } from "../../config";
import { isEndOfChunksSelector, parametersSelector } from "../../store/books/selector";
import { clearBooks, getBooks, setCurrentParameters, setEndOfChunks, setLoading } from "../../store/books/actions";
import { useDispatch, useSelector } from "react-redux";
import './SearchWindow.scss'


export const SearchWindow = () => {

  const dispatch = useDispatch();

  const isChunksEnded = useSelector(isEndOfChunksSelector)
  const parameters = useSelector(parametersSelector)

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

  const setCurrentParametersValue = (e) => {
    const payload = {
      text: e.target.name === 'text' ? e.target.value : parameters.text,
      type: e.target.name === 'type'  ? e.target.value : parameters.type,
      sort: e.target.name === 'sort'  ? e.target.value : parameters.sort,
    }
    dispatch(setCurrentParameters(payload));
  }

  return (
    <>
      <form className="form__main" onSubmit={submitInput}>
        <SearchBar
          name={'text'}
          type={'text'}
          onChange={setCurrentParametersValue}
          value={parameters.text}
        />
        <div className="form__selectors">
          <div className="form__select">
            <div className="form__select-title">Categories</div>
            <CustomSelect
              variants={BOOK_TYPES}
              name={'type'}
              onChange={setCurrentParametersValue}
              value={parameters.type}
            />
          </div>
          <div className="form__select">
            <div className="form__select-title">Sorting by</div>
            <CustomSelect
              variants={TYPES_OF_SORT}
              name={'sort'}
              onChange={setCurrentParametersValue}
              value={parameters.sort}
            />
          </div>
        </div>
        <input type="submit" hidden />
      </form>
    </>
  )
}