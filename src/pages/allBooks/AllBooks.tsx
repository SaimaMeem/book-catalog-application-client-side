import { IBook } from '../../interfaces/books';
import { useGetBooksQuery } from '../../redux/features/books/bookApi';
import { useAppSelector } from '../../redux/hooks';
import Book from '../home/books/Book';
import Filters from './Filters';
import Search from './Search';

export default function AllBooks() {
    const { searchTerm, genre } = useAppSelector((state) => state.book);
    const { data: books, isLoading } = useGetBooksQuery({
        searchTerm,
        genre,
        limit: 0,
    });

    return (
        <section className="sticky flex h-full flex-row rounded-lg">
            <Filters></Filters>
            <div>
                <Search></Search>

                <div className="flex w-full flex-row flex-wrap gap-4 p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-6">
                        {isLoading ? (
                            <div>loading</div>
                        ) : (
                            books?.data.map((book: IBook) => (
                                <Book key={book._id} book={book}></Book>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
