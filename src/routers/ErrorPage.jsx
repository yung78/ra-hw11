import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='w-full h-[60vh] flex flex-col justify-center items-center'>
      <h1>Oops, something go wrong...</h1>
      <p>It's not clear what wrong yet, but we'll find it out)))</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
