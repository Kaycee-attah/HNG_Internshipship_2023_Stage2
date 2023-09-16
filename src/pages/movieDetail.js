
import { Fragment, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


export default function MovieDetail() {
    const { id } = useParams()
    console.log(+id)
    let url = `https://api.themoviedb.org/3/movie/${id.toString()}?language=en-US&api_key=4c2de6d8ecde71a2efa8308d93eb3678`
    // const [single_Trailer, setSingle_Trailer] = useState([])
    
    const movieDetail = useLoaderData()
    const arr = movieDetail.results
    console.log(movieDetail.results)
    console.log(movieDetail)
    const Trailer = arr.filter((obj) => {
        return obj.type = 'Trailer'
    })

    const [trailer, setTrailer] = useState([])
    const getTrailer = () => {
    //   fetch(`https://api.themoviedb.org/3/movie/240?language=en-US&api_key=4c2de6d8ecde71a2efa8308d93eb3678`).then(ress => ress.json()).then(json => console.log(json.results))

      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=4c2de6d8ecde71a2efa8308d93eb3678`)
        .then(response => response.json())
        .then(response => setTrailer(response))
        .catch(err => console.error(err));
      
        console.log(trailer)
    }

    useEffect(() => {
        
        getTrailer()

        
        
    },[])

    
    
    

    const single_Trailer = Trailer.slice(0, 1)
    console.log(trailer)

    const now = new Date();
    const UTCtimeStamp = now.getTime(trailer.release_date);
    console.log(UTCtimeStamp)
    

  return (
    <Fragment>
            {
                single_Trailer.map((vid) => (
                    <div className='trailer-container'>
                        
                        <iframe width="170%" height="75%" src={`https://www.youtube.com/embed/${vid.key}`} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope: picture-in-picture' allowFullScreen title='Embedded youtube'/>
                        {/* <img src={TrailerPoser} ></img> */}
                    </div>
                ))
            }
            <div className='moviedetails-wrapper'>
                <div className='sect_1'>
                    
                    <div className='title_description-wrapper'>
                        <span className='title-wrapper'>
                            <h3 className='title'><span style={{ margin: "0 5px" }} data-testid="movie-title">{trailer.title}</span>
                                • 
                                <span style={{ margin: "0 5px" }} data-testid="movie-release-date">{UTCtimeStamp}</span>
                                • 
                                <span style={{ margin: "0 5px" }} data-testid="movie-runtime">{trailer.runtime}</span>
                            </h3>
                            
                            <span  className='action_drama-icon-container'>
                                {console.log(trailer.genres)}
                                {/* {trailer.genres.map((genre) => (
                                        <span className='action-icon-wrapper'>{genre.name}</span> 
                                    ))} */}
                                {/* {(trailer != undefined) ?
                                    trailer.genres.map((genre) => (
                                        <span className='action-icon-wrapper'>{genre.name}</span> 
                                    )) : null
                                } */}
                                
                                {/* <span className='drama-icon-wrapper'>Drama</span> */}
                            </span>
                            
                        </span>
                        <span className='description-wrapper' data-testid="movie-overview">
                                {trailer.overview}
                        </span>
                        
                    </div>
                    <div className='starrs_directors-wrapper'>
                        <span className='directors'>Director : <span className='director_name'>Joseph Kosinski</span></span>
                        <span className='writers'>Writers : <span className='writers_name'>Jim Cash, Jack Epps Jr,  Peter Craig</span></span>
                        <span className='stars'>Stars : <span className='Star_name'>Tom Cruise, Jennifer Connelly, Miles Teller</span></span>
                        
                    </div>
                    <div className='toprated_awards-wrapper'>
                        <span className='toprated'>
                            <span className='text-toprated'>Top rated movie #65</span>
                        </span>
                        
                        <span className='awards_nominations'>
                            <span className='text-awards'>Awards 9 nominations</span>
                            <span className='expand_arrow'></span>
                        </span>
                    </div>
                </div>
                <div className='sect_2'>
                    <div  className='fav_btns-wrapper'>
                        <span className='fav_icon-wrapper'>
                            <span className='fav_icon'></span>
                            <span className='rating-wrapper'>8.5 <span className='rating-bold'> | 350k</span></span> 
                        </span>
                        <button className='showtimes-btn'>
                            <span className='showtimes-icon'></span>
                            <span className='showtimes'>See Showtimes</span>
                        </button>
                        <button className='watch_more-btn'>
                            <span className='more_watch_options-icon'></span>
                            <span className='more_watch_options'>More watch options</span>
                            
                        </button>
                        
                        
                    </div>
                    <div  className='othermovies-wrapper'>
                        <span className='info_'>
                            <span className='more_watch_options-icon'></span>
                            <span className='text'>The Best Movies and Shows in September</span>
                        </span>
                        
                    </div>
                </div>
            </div>
        
        
            </Fragment>
  )
}

export const movieDetailLoader = async ({ params }) => {
    const { id } = params
    
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=4c2de6d8ecde71a2efa8308d93eb3678`).then (fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=4c2de6d8ecde71a2efa8308d93eb3678`))
    
    if(!res.ok) {
        throw Error("Page not Found")
    }

  return res.json()

}

// export const movieTrailer 0= async ({ params }) => {
//     const { id } = params
//     const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=4c2de6d8ecde71a2efa8308d93eb3678`)9292
// } 
