import './SearchBar.scss'
import magnifyingGlass from '../../assets/magnifying_glass.svg';

export const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <input className="search-bar__input" type={props.text} name={props.name}></input>
      <label htmlFor={props.name} className='search-bar__label'>
        <button className='search-bar__button' type='submit'>
          <img className='search-bar__image' src={magnifyingGlass} alt="" />
        </button>
      </label>
    </div>
  )
}