import { ChangeEvent, ReactNode } from 'react';
import { IBook } from '../../interfaces/books';
import { useGetBooksQuery } from '../../redux/features/books/bookApi';
import { filterByGenre } from '../../redux/features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function Filters() {
    const { genre } = useAppSelector((state) => state.book);
    const dispatch = useAppDispatch();
    const { data: books, isLoading } = useGetBooksQuery({
        limit: 0,
    });
    // console.log(books);
    const uniqueGenres = Array.from(
        new Set(books?.data.map((book: IBook) => book.genre))
    )
        .sort()
        .map((genre, id) => ({ id, genre }));

    console.log(uniqueGenres);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);

        dispatch(filterByGenre(event.target.value));
    };
    return (
        <>
            <aside className="sidebar-sticky sidebar justify-start bg-[#FCFCFC] shadow-[0_4px_15px_-4px_rgba(0,0,0,0.25)] ">
                <section className="sidebar-content min-h-[20rem]">
                    <nav className="menu rounded-md">
                        <section className="menu-section px-4">
                            <span className="menu-title text-xl">Filters</span>
                            <ul className="menu-items">
                                <li>
                                    <input
                                        type="checkbox"
                                        id="menu-2"
                                        className="menu-toggle"
                                    />
                                    <label
                                        className="menu-item justify-between"
                                        htmlFor="menu-2"
                                    >
                                        <div className="flex gap-2">
                                            <span>Genre</span>
                                        </div>

                                        <span className="menu-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </label>

                                    <div
                                        className="menu-item-collapse"
                                        id="group1"
                                    >
                                        <div className="min-h-0">
                                            {uniqueGenres.map((uniqueGenre) => (
                                                <label
                                                    key={uniqueGenre?.id}
                                                    className="flex cursor-pointer gap-2 menu-item ml-1"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="option"
                                                        value={
                                                            uniqueGenre?.genre as string
                                                        }
                                                        checked={
                                                            genre ===
                                                            uniqueGenre?.genre
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                    <span>
                                                        {
                                                            uniqueGenre.genre as ReactNode
                                                        }
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </nav>
                </section>
            </aside>
        </>
    );
}
