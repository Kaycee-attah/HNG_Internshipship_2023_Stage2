import { Link, useRouteError } from "react-router-dom"


export default function MovieDetailError() {
    const error = useRouteError()
  return (
    <div className="movie-Detail-Error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to='/' >Back to the homepage</Link>
    </div>
  )
}
