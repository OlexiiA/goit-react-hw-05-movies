import {Routes, Route} from 'react-router-dom';
import { Home } from './Home/Home';
// import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/movies' element={<SearchBar/>}/>
      </Route>
     
    </Routes>
    </>
  );
};
