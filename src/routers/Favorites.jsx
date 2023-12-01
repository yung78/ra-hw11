import { useSelector } from 'react-redux';
import FavoriteMovie from '../components/FvoriteMovie';

export default function Favorites() {
  const state = useSelector((state) => state.search.favorites);

  return (
    <>
      {state.length > 0 ? (
        <>
          {state.map((el, index) => (
            <FavoriteMovie
              key={index}
              data={el}
              index={index}
            />
          ))}
        </>
      ) : (
        <div className='h-60 mr-20 flex flex-col justify-center items-center'>
          <h1 className='text-3xl mr-4'>Empty for now</h1>
        </div>
      )}
    </>
  );
}
