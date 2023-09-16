import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h1>OOPS!!!</h1>
        <h2>Page not found!</h2>
        <p>It seems you've entered a page that doesn't exist</p>
        <p>Go back to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
