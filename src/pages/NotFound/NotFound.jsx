import { useNavigate } from "react-router-dom"

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1>Page not found</h1>
        <button onClick={() => navigate(-1)} className='button__go-back'>Go back</button>
      </div>
    </>
  )
}