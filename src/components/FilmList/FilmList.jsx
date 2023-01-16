import { Link } from 'react-router-dom';


export const FilmList = ({ films, query }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`${film.id}`} state={{ from: `/movies?query=${query}` }}>
            {film.title ?? film.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
