import {
  Outlet,
  Form,
  redirect,
} from 'react-router-dom';
import { getMovies } from '../app/apiIMDB';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovie, loading } from '../app/searchSlice';
import MainButton from '../components/MainButton';
import { RotatingLines } from 'react-loader-spinner';

export async function action() {
  return redirect('searchresult');
}

export default function Root() {
  const state = useSelector((state) => state.search.loading);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    dispatch(loading());
    const formData = new FormData(e.target);
    const data = await getMovies(Object.fromEntries(formData).search);
    
    dispatch(searchMovie(data.Search));
    dispatch(loading());
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center bg-sky-400'>
      <menu className='w-[80vw] h-[6vh] mt-6 flex justify-around items-center bg-gray-300 rounded-xl'>
        <MainButton
          text={'Main'}
          rout={'/'}
        />
        <MainButton
          text={'Search result'}
          rout={'searchresult'}
        />
        <MainButton
          text={'Movie card'}
          rout={'movie'}
        />
        <MainButton
          text={'Favorites'}
          rout={'favorites'}
        />
      </menu>
      <div className='w-[80vw] h-[80vh] mt-3 p-5 bg-gray-200 rounded-xl'>
        <div className='w-full'>
          <Form
            method='post'
            className='w-3/4 mx-auto mb-8'
            onSubmit={(e) => handleSubmit(e) }
          >
            <input
              type='search'
              name='search'
              placeholder='Ener moovie name'
              className='w-9/12 h-10 px-3 rounded-xl  border-green-800 border-2 focus:outline-0'
            />
            <button
              type='submit'
              className='h-10 border-green-800 hover:border-green-600 border-2 rounded-full px-2 mx-4 bg-gray-400 active:bg-gray-500'
            > SEARCH</button>
          </Form>
        </div>
        <div
          id='details'
          className={'w-[80vw] h-[64vh] overflow-auto'}>
            <>
              {state ? (
                <>
                  <div className={'absolute left-[44vw] top-[40vh]'}>
                    <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                    />
                  </div>
                  <Outlet />
                </>
              ) : (
                <Outlet/>
              )}
            </>
        </div>
      </div>
    </div>
  );
}
