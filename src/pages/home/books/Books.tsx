import Book from './Book';

export default function Books() {
    return (
        <section className="my-14 mx-7" id="available-parts">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </section>
    );
}
