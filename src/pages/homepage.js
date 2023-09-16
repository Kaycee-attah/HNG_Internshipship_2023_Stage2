import React from 'react'
import Navbar from '../components/navbar'
import Poster from '../components/poster'
import DescriptionBox from '../components/descriptionBox'
import FeaturedMoviesBanner from '../components/featuredmoviesBanner'
import MoviesGrid from '../components/moviesGrid'
import Footer from '../components/footer'
import MovieDetail from './movieDetail'
import Loading from '../components/loading'
import { useLoaderData } from 'react-router-dom'

export default function Homepage(){
  const movies = useLoaderData()

  console.log(movies.results)
  return (
    <div className='homepage-container'>
      <Navbar />
      <Poster movie={movies.results} />
      {/* <DescriptionBox /> */}
      <FeaturedMoviesBanner />
      <MoviesGrid films={movies.results} /> 
      

      

      {/* <MovieDetail /> */}
      {/* <Loading /> */}
    </div>
  )
}
