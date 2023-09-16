import { Link, Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

export default function NotFoundLayout() {
  return (
    <div className='homepage-container'>
      <Navbar />

      <div className="not-found" style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-around',
        
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%'
      }}>
        <h1>OOPS!!!</h1>
        <h2>Page not found!</h2>
        <p>It seems you've entered a page that doesn't exist</p>
        <p>Go back to the <Link to="/">Homepage</Link>.</p>
    </div>
      
    </div>
  )
}
