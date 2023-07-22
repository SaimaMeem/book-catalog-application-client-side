import { Link, useParams } from 'react-router-dom';
import Loader from '../components/shared/Loader';
import { useGetSingleBookQuery } from '../redux/features/books/bookApi';

export default function BookDetail() {
    const { id } = useParams();
    const { data: book, isLoading } = useGetSingleBookQuery(id);
    return (
        <>
            {isLoading ? (
                <div className="m-10">
                    <Loader />
                </div>
            ) : (
                <div className="flex justify-between m-10">
                    <div className="flex flex-col md:flex-row bg-white md:mx-16 justify-between">
                        <img
                            className="w-96 md:w-64 sm:w-32 lg:w-80 object-cover rounded-lg shadow-lg mx-auto"
                            src={book?.data?.image}
                            alt=""
                        />
                        <div className="p-6 flex flex-1 flex-col justify-start text-left">
                            <h5 className="text-3xl font-bold mb-2">
                                {book?.data?.title}
                            </h5>
                            <h5 className="text-2xl font-bold mb-2">
                                by{' '}
                                <span className="text-major font-semibold">
                                    {book?.data?.author}
                                </span>
                            </h5>
                            <h5 className="text-lg font-bold mb-2">
                                GENRE: {book?.data?.genre}
                                <span className="text-base font-medium"></span>
                            </h5>
                            <p className="text-base font-medium mb-4">
                                Published on{' '}
                                <span className="font-semibold text-major underline underline-offset-auto">
                                    {book?.data?.publicationDate}
                                </span>
                            </p>
                            <div className="flex justify-start my-5 space-x-5 ">
                                <Link
                                    to="/all-books"
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-warning-600 shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                    hover:outline hover:outline-2 hover:outline-warning-600 hover:text-warning-600"
                                >
                                    Edit Book
                                </Link>
                                <Link
                                    to="/all-books"
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-danger-600 shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                    hover:outline hover:outline-2 hover:outline-danger-600 hover:text-danger-600"
                                >
                                    Delete Book
                                </Link>
                            </div>
                        </div>
                        <div className="p-6 flex flex-1 flex-col justify-start text-left">
                            Review Section
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
