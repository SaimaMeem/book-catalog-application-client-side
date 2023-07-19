import { IBook } from '../../interfaces/books';
import { useGetBooksQuery } from '../../redux/features/books/bookApi';
import { useAppSelector } from '../../redux/hooks';
import Book from '../home/books/Book';
import Search from './Search';

export default function AllBooks() {
    const { searchTerm } = useAppSelector((state) => state.book);
    const { data: books, isLoading } = useGetBooksQuery({
        searchTerm,
    });

    return (
        <section className="my-14 mx-7">
            <Search></Search>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {isLoading ? (
                    <div>loading</div>
                ) : (
                    books?.data.map((book: IBook) => (
                        <Book key={book._id} book={book}></Book>
                    ))
                )}
            </div>
        </section>
    );
}
