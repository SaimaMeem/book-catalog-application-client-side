import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Books from '../pages/home/books/Books';
import AllBooks from '../pages/allBooks/AllBooks';

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
    // {
    //   path: '*',
    //   element: <NotFound />,
    // },
]);

export default routes;
