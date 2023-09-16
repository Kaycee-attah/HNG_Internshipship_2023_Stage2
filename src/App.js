
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"


 //pages
import Homepage from './pages/homepage';
import MovieDetail, { genreLoader, movieDetailLoader } from './pages/movieDetail';
import NotFound from "./pages/notFound";

//layouts
import DetailLayout from "./layout/DetailLayout";
import Loading from "./components/loading";
import NotFoundLayout from "./layout/notFoundLayout";
import { moviesLoader } from "./components/moviesGrid";
import MoviesError from "./pages/moviesError";
import FetchError from "./pages/fetchError";
import Others from "./components/others";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index loader={moviesLoader} element={<Homepage />} errorElement={<FetchError />} />
          <Route path=":id" element={<DetailLayout />} >
          <Route index loader={moviesLoader} element={<MovieDetail />} />
          
      </Route>

      <Route path='movie'>
        <Route path='other' element={<Loading />} /> 
        <Route path=":id" element={<DetailLayout />} errorElement={<MoviesError />}>
          <Route index loader={(  movieDetailLoader) }  element={<MovieDetail />}  />
          <Route path="home" element={<Others />}></Route>
          <Route path="tv-series" element={<Others />}></Route>
          <Route path="upcoming" element={<Others />}></Route>
          {/* <Route path="*" element={<Others />}></Route> */}
        </Route>
        
      </Route>
      
      <Route path='detail' element={<DetailLayout />} >
        <Route index element={<MovieDetail />} />
        <Route path='other' element={<Loading />} /> 
      </Route>

      <Route path="*" element={<NotFoundLayout />}>
        <Route index element={<NotFound />}/>
      </Route>

      
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
