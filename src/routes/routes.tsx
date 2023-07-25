import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddNewBook from '../pages/AddNewBook';
import BookDetail from '../pages/BookDetail';
import EditBook from '../pages/EditBook';
import Login from '../pages/LoginRegistration/Login';
import Register from '../pages/LoginRegistration/Signup';
import MyReadingList from '../pages/MyReadingList';
import MyWishList from '../pages/MyWishList';
import NotFound from '../pages/NotFound';
import AllBooks from '../pages/allBooks/AllBooks';
import Books from '../pages/home/books/Books';
import PrivateRoute from './PrivateRoute';

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
                element: (
                    <PrivateRoute>
                        <AddNewBook />
                    </PrivateRoute>
                ),
            },
            {
                path: '/book-detail/:id',
                element: (
                    <PrivateRoute>
                        <BookDetail />
                    </PrivateRoute>
                ),
            },
            {
                path: '/edit-book/:id',
                element: (
                    <PrivateRoute>
                        <EditBook />
                    </PrivateRoute>
                ),
            },
            {
                path: '/my-wish-list',
                element: (
                    <PrivateRoute>
                        <MyWishList />
                    </PrivateRoute>
                ),
            },
            {
                path: '/my-reading-list',
                element: (
                    <PrivateRoute>
                        <MyReadingList />
                    </PrivateRoute>
                ),
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default routes;
