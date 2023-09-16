import React from 'react'

export default function featuredmoviesBanner() {
  return (
    <div className='featuredmoviesBanner-container'>
        <span className='Banner-wrapper'>
            <h2 className='Banner-name'>Featured Movie</h2>
            <span className='see_more'>
                <h4 className='more-text'>See more</h4>
                <span className='more-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>  
                </span>
            </span>
        </span>
        
    </div>
  )
}
