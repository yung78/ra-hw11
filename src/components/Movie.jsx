import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorites, movieCard, loading } from '../app/searchSlice';
import { getMovie } from '../app/apiIMDB';

export default function Movie({ data, index }) {
  const dispatch = useDispatch();

  const handleAdd = (data) => {
    dispatch(addFavorites(data));
  };

  const handleClick = async (id) => {
    dispatch(loading());
    const data = await getMovie(id);
    dispatch(movieCard(data));
    dispatch(loading());
  };

  return (
    <div className='ml-8 my-4'>
      <Link 
        to='/movie'
        className='w-3/4 block'
        onClick={() => handleClick(data.imdbID)}
      >
        <div className='flex'>
          <div className='mr-6'>{index+1}</div>
          <div className='w-16 h-22 mr-4'>
            <img src={data.Poster} alt="img" className='w-full h-full' />
          </div>
          <div>
            <div>Title: {data.Title}</div>
            <div>Year: {data.Year}</div>
            <div>Type: {data.Type}</div>
          </div>
        </div>
      </Link>
      <div className='flex justify-end mr-14'>
        <button
          className='h-8 border-yellow-500 hover:border-yellow-300 border-2 rounded-full px-2 mx-10 bg-gray-400 active:bg-gray-500'
          type='button'
          onClick={() => handleAdd(data)}
        >
          Add to favorite
        </button>
      </div>
    </div>
  );
}
