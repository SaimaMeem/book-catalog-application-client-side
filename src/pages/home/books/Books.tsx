import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../../../components/shared/Loader';
import { IBook } from '../../../interfaces/books';
import { useGetBooksQuery } from '../../../redux/features/books/bookApi';
import Book from './Book';

export default function Books() {
    const { data: books, isLoading } = useGetBooksQuery(
        {},
        {
            refetchOnMountOrArgChange: true,
            pollingInterval: 30000,
        }
    );

    return (
        <section className="my-14 mx-7">
            {isLoading ? (
                <Loader></Loader>
            ) : (
                <>
                    {isLoading ? (
                        <Loader></Loader>
                    ) : (
                        <>
                            {books?.data.length > 0 ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-4">
                                    {books?.data.map((book: IBook) => (
                                        <Book key={book._id} book={book}></Book>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center">
                                    No books found!
                                </div>
                            )}
                        </>
                    )}
                    <div className="flex justify-center my-5 ">
                        <Link
                            to="/all-books"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                    hover:outline hover:outline-2 hover:outline-major hover:text-major"
                        >
                            <FaList /> &nbsp; See All Books
                        </Link>
                    </div>
                </>
            )}
        </section>
    );
}
