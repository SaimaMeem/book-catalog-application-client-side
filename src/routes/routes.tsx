import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Books from '../pages/home/books/Books';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // {
            //   index: true,
            //   element: <Home />,
            // },
            {
                path: '/books',
                element: <Books />,
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
