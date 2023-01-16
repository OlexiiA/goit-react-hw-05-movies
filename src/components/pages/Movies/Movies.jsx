import { useSearchParams } from "react-router-dom";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { findeFilm } from '../../../services/api'
import { FilmList } from '../../FilmList/FilmList'

const Movies = () => {

  const [filmsBySearch, setFilmsBySearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async function getFilmsBySearch() {
      const res = await findeFilm(searchQuery);
      setFilmsBySearch(res.data.results);
    })();
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams({ query: value });
    e.target.reset();
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {filmsBySearch.length > 0 ? <FilmList films={filmsBySearch} query={searchQuery} /> : null}
    </>

  )

}

export default Movies;