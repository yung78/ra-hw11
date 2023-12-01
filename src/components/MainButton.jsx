import { Link } from 'react-router-dom';

export default function MainButton ({text, rout}) {
  return (
    <button 
      className='h-8 w-32 border-green-800 hover:border-green-600 border-2 rounded-full px-2  bg-gray-400 active:bg-gray-500'
      type='button'
    >
      <Link 
        to={rout}
        className='block'
      >
        {text}
      </Link>
    </button>
  );
}
