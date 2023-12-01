import { useSelector } from 'react-redux';
import Movie from '../components/Movie';

export default function Movies() {
  const state = useSelector(state => state.search.movies);

  return (
    <>
      {state.length === 1 ? (
        <>
          {state[0].Error ? (
          <div>
            <div className='w-full h-60 flex flex-col justify-center items-center'>
              <h1 className='text-3xl mr-20'>{state[0].Error}</h1>
            </div>
          </div>
          ) : (
          <>
            <Movie data={state[0]}/>
          </>
          )}
        </>
      ) : (
        <>
          {state.length === 0 ? (
            <div className='h-60 mr-20 flex flex-col justify-center items-center'>
              <h1 className='text-3xl mr-4'>Empty for now</h1>
            </div>
          ) : (
            <>
              {state.map((el, index) => (
                <Movie
                  key={index}
                  data={el}
                  index={index}
                />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}
