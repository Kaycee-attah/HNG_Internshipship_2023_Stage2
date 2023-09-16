import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className='sidebar-container'>
            <Link to='/'>
                <span className='logo-wrapper'>
                    <span className='logo'></span>
                    <span className='title'>MovieBox</span>
                </span>
            </Link>
             
            <NavLink to='home'>
                <span className='home-icon-wrapper'>
                    <span className='hm-icon'></span>
                    <span className='hm-title'>Home</span>    
                </span> 
            </NavLink>
            <NavLink to='/'>
                <span className='movies-icon-wrapper'>
                    <span className='mo-icon'></span>
                    <span className='mo-title'>Movies</span>    
                </span> 
            </NavLink>
            <NavLink to='tv-series'>
                <span className='tvseries-wrapper'>
                    <span className='tv-icon'></span>
                    <span className='tv-title'>TV Series</span>    
                </span>
            </NavLink>
            <NavLink to='upcoming'>
                <span className='upcoming-wrapper'>
                    <span className='up-icon'></span>
                    <span className='up-title'>Upcoming</span>    
                </span> 
            </NavLink>

            
            
             
            
            
            <div className='additionalinfo-wrapper'>
                <span className='additionalinfo-text-bg'>Play movie quizes and earn free tickets</span>
                <span className='additionalinfo-text-sm'>50k people are playing now</span> 
                <button>
                    <span className='additionalinfo-btn'>Start playing</span>
                </button>   
            </div>
            <span className='logout-wrapper'>
                <span className='logout-icon'></span>
                <span className='logout-title'>Log out</span>    
            </span>  
            
        </div> 
  )
}
