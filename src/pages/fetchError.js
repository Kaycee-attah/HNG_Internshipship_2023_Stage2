import {  useRouteError } from "react-router-dom"


export default function FetchError() {
    const error = useRouteError()
  return (
    <div className="movie-Detail-Error">
        <h2>Error</h2>
        <p>{error.message}</p>
        
    </div>
  )
}
