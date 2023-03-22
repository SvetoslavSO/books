import './BookCard.scss'

export const BookCard = (props) => {

  return (
    <li className='book__card'>
      {
        props.image !== '' ? <img src={props.image} alt="" className='book__image'/> : ''
      }
      <div className='book__name'>
        <span className='book__name-title'>Title: </span>
        <span className='book__name-desc'>{props.title}</span>
      </div>
      {
        props.category ? 
        <div className='book__category'>
          <span className='book__category-title'>Category: </span>
          <span className='book__category-desc'>{props.category[0]}</span>
        </div> : ''
      }
      {
        props.authors ? 
        <div className='book__authors'>
          <span className='book__authors-title'>Authors</span>
            <ul className='book__authors-list'>
              { 
                props.authors ? props.authors.map((author, index) => {
                  return (
                    <li key={index} className='book__author'>
                      {author}
                    </li>
                  )
                }) : ''
              }
            </ul>
        </div> : ''
      }
      
    </li>
  )
}