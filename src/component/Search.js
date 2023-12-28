import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Search = ({ onSearch }) => {
  const location = useLocation();
  const navigation = useNavigate();
  const [q, setQ] = useState('');

  useEffect(() => {
    if (location.search.length === 0) {
      setQ('');
    }
  }, [location]);

  const inputHandler = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.toLowerCase();
    setQ(searchTerm);
    navigation(`/search?q=${searchTerm}`);
    onSearch(searchTerm); // Notify the parent component about the search term
  };

  return (
    <div className="container my-5">
      <form onSubmit={inputHandler} className="mx-auto">
        <input
          type="search"
          className="form-control w-75 my-3 mx-auto clear"
          autoComplete="off"
          name="search"
          defaultValue={q}
        />
        <div className="text-center">
          <button className="btn btn-success me-3" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
