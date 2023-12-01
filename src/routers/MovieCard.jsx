import { useSelector, useDispatch } from 'react-redux';
import { addFavorites } from '../app/searchSlice';

export default function MovieCard() {
  const state = useSelector((state) => state.search.card);
  const dispatch = useDispatch();

  const handleAdd = (data) => {
    dispatch(addFavorites(data));
  };

  return (
    <>
      {state ? (
        <>
          <div className='flex'>
            <div className='ml-5'>
              <img src={state.Poster} alt="poster" />
            </div>
            <div className='ml-5 mr-12 text-xl'>
              <div className='mb-3'>Title: {state.Title}</div>
              <div className='mb-3'>Year: {state.Year}</div>
              <div className='mb-3'>Genre: {state.Genre}</div>
              <div className='mb-3'>Runtime: {state.Runtime}</div>
              <div className='mb-3'>Director: {state.Director}</div>
              <div className='mb-3'>Actors: {state.Actors}</div>
              <div className='mb-3'>Rating: {state.imdbRating}</div>
            </div>
          </div>
          <div className='flex justify-center mr-14'>
            <button
              className='h-8 border-yellow-500 hover:border-yellow-300 border-2 rounded-full px-2 mt-10 bg-gray-400 active:bg-gray-500'
              type='button'
              onClick={() => handleAdd(state)}
            >
             Add to favorite
            </button>
          </div>
        </>
      ) : (
        <div className='h-60 mr-20 flex flex-col justify-center items-center'>
          <h1 className='text-3xl mr-4'>Empty for now</h1>
        </div>
      )}
    </>
  );
}
