import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddNewBook from '../pages/AddNewBook';
import BookDetail from '../pages/BookDetail';
import EditBook from '../pages/EditBook';
import NotFound from '../pages/NotFound';
import AllBooks from '../pages/allBooks/AllBooks';
import Books from '../pages/home/books/Books';
import MyWishList from '../pages/MyWishList';

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
                path: '/all-books',
                element: <AllBooks />,
            },
            {
                path: '/add-new-book',
                element: <AddNewBook />,
            },
            {
                path: '/book-detail/:id',
                element: <BookDetail />,
            },
            {
                path: '/edit-book/:id',
                element: <EditBook />,
            },
            {
                path: '/my-wish-list',
                element: <MyWishList />,
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
