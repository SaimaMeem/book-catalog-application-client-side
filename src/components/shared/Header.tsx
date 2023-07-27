import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useGetMyProfileQuery } from '../../redux/features/user/userApi';
import { removeUserCredential } from '../../redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function Header() {
    const dispatch = useAppDispatch();
    const { email } = useAppSelector((state) => state.user);
    const { data: user } = useGetMyProfileQuery({ email });

    // console.log(email);
    const handleLogOut = () => {
        dispatch(removeUserCredential());
        localStorage.clear();
    };
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white navbar-glass text-md py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 shadow-lg font-semibold">
            <nav
                className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex items-center justify-between">
                    <Link to="/" className="navbar-item font-bold">
                        Book Catalog Application
                    </Link>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-white text-gray-700 shadow-md align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            data-hs-collapse="#navbar-collapse-with-animation"
                            aria-controls="navbar-collapse-with-animation"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="hs-collapse-open:hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                            <svg
                                className="hs-collapse-open:block hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-collapse-with-animation"
                    className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block sm:mx-auto"
                >
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                        <Link
                            to="/"
                            className="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                        >
                            {' '}
                            Home
                        </Link>
                        <Link
                            to="/all-books"
                            className="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                        >
                            {' '}
                            All Books
                        </Link>{' '}
                        {email && (
                            <Link
                                to="/add-new-book"
                                className="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                            >
                                {' '}
                                Add New Book
                            </Link>
                        )}
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            {!email ? (
                                <Link
                                    to="/login"
                                    type="button"
                                    className="flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold dark:text-gray-400 dark:hover:text-gray-500 "
                                >
                                    Login
                                </Link>
                            ) : (
                                <button
                                    type="button"
                                    className="flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold dark:text-gray-400 dark:hover:text-gray-500 "
                                >
                                    {user?.data?.username} &nbsp;
                                    <AiFillCaretDown />
                                </button>
                            )}

                            {email && (
                                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5 bg-[#FCFCFC]">
                                    <Link
                                        to="/my-wish-list"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    >
                                        My Wishlist
                                    </Link>

                                    <Link
                                        to="my-reading-list"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    >
                                        My Reading List
                                    </Link>
                                    <Link
                                        to="/"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        onClick={() => handleLogOut()}
                                    >
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
