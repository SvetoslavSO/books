import './CustomSelect.scss'

export const CustomSelect = (props) => {

  return (
    <>
      <select className="custom-select" name={props.name} id="">
        { props.variants.map((variant, index) => {
          return (
            <option key={index} value={variant}>
              {variant}
            </option>
          )
        })}
      </select>
    </>
  )
}