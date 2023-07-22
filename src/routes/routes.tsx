import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import AllBooks from '../pages/allBooks/AllBooks';
import Books from '../pages/home/books/Books';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Books />,
            },
            {
                path: '/allbooks',
                element: <AllBooks />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
    // {
    //   path: '/login',
    //   element: <Login />,
    // },
    // {
    //   path: '/signup',
    //   element: <Signup />,
    // },
]);

export default routes;
