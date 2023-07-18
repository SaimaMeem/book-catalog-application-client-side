import { IBook } from '../../../interfaces/books';
import { useGetBooksQuery } from '../../../redux/features/books/bookApi';
import Book from './Book';

export default function Books() {
    const { data: books, isLoading } = useGetBooksQuery({
        sortBy: 'createdAt',
        sortOrder: 'desc',
    });

    return (
        <section className="my-14 mx-7" id="available-parts">
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
