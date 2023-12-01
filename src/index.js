import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Root, {action as searchAction} from './routers/Root';
import ErrorPage from './routers/ErrorPage.jsx';
import MovieCard from './routers/MovieCard';
import Favorites from './routers/Favorites';
import DefaultView from './routers/DefaultView.jsx';
import Movies from './routers/Movies.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    action: searchAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <DefaultView />,
          },
          {
            path: 'searchresult',
            element: <Movies />,
          },
          {
            path: 'movie',
            element: <MovieCard />,
          },
          {
            path: 'favorites',
            element: <Favorites />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
);
