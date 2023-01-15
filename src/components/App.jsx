import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
// import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails'
import { Cast } from './Cast/Cast';
import {Reviews} from './Reviews/Reviews'


export const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/movies/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='Reviews' element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
