import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../../components/shared/Loader';
import { IBook } from '../../interfaces/books';
import { useGetBooksQuery } from '../../redux/features/books/bookApi';
import { useAppSelector } from '../../redux/hooks';
import Book from '../home/books/Book';
import Filters from './Filters';
import Search from './Search';

export default function AllBooks() {
    const { searchTerm, genre, publicationYear } = useAppSelector(
        (state) => state.book
    );
    const { data: books, isLoading } = useGetBooksQuery(
        {
            searchTerm,
            genre,
            publicationYear,
            limit: 0,
        },
        {
            refetchOnMountOrArgChange: true,
            pollingInterval: 30000,
        }
    );

    return (
        <section className="sticky flex h-full  flex-row rounded-lg">
            <Filters></Filters>
            <div className="flex flex-col flex-grow">
                <Search></Search>
                <div className="flex justify-end my-5 mx-10">
                    <Link
                        to="/add-new-book"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                    hover:outline hover:outline-2 hover:outline-major hover:text-major"
                    >
                        <FaPlus />
                        &nbsp; Add New Book
                    </Link>
                </div>
                <div className="flex w-full flex-row flex-wrap justify-center gap-4 p-6">
                    {isLoading ? (
                        <Loader></Loader>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-6">
                            {books?.data.length > 0 ? (
                                books?.data.map((book: IBook) => (
                                    <Book key={book._id} book={book}></Book>
                                ))
                            ) : (
                                <div>No books found!</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
