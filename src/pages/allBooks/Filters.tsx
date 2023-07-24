/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, ReactNode } from 'react';
import { IBook } from '../../interfaces/books';
import { useGetBooksQuery } from '../../redux/features/books/bookApi';
import {
    filterByGenre,
    filterByPublicationYear,
} from '../../redux/features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function Filters() {
    const { genre, publicationYear } = useAppSelector((state) => state.book);
    const dispatch = useAppDispatch();
    // console.log(genre, publicationYear);

    const { data: books } = useGetBooksQuery(
        {
            limit: 0,
        },
        {
            refetchOnMountOrArgChange: true,
            pollingInterval: 30000,
        }
    );
    const uniqueGenres = Array.from(
        new Set(books?.data.map((book: IBook) => book.genre))
    )
        .sort()
        .map((genre, id) => ({ id, genre }));

    const uniquePublicationYears = Array.from(
        new Set(
            books?.data.map((book: IBook) =>
                book.publicationDate.substring(0, 4)
            )
        )
    )
        .sort()
        .reverse()
        .map((publicationYear, id) => ({ id, publicationYear }));

    const isCheckedGenre = (item: string) => genre.includes(item);
    const isCheckedPublicationYear = (item: string) =>
        publicationYear.includes(item);

    const handleGenreFilter = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(filterByGenre(event.target.value));
    };
    const handlePublicationYearFilter = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(filterByPublicationYear(event.target.value));
    };
    return (
        <>
            <div className="sm:w-full sm:max-w-[18rem]">
                <input
                    type="checkbox"
                    id="sidebar-mobile-fixed"
                    className="sidebar-state"
                />
                <label
                    htmlFor="sidebar-mobile-fixed"
                    className="sidebar-overlay"
                ></label>
                <div className="absolute right-0 my-4 mr-10">
                    <label
                        htmlFor="sidebar-mobile-fixed"
                        className="rounded-lg bg-major px-3 py-1.5 text-xs font-medium uppercase leading-tight text-background shadow-md transition duration-150 ease-in-out hover:bg-major hover:shadow-lg focus:bg-major focus:shadow-lg focus:outline-none focus:ring-0 active:bg-major active:shadow-lg sm:hidden"
                    >
                        Show Filters
                    </label>
                </div>
                <aside className="sidebar sidebar-sticky sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full bg-[#FCFCFC] shadow-[8px_0_15px_-4px_rgba(0,0,0,0.2)] w-auto">
                    <section className="sidebar-content min-h-[20rem]">
                        <nav className="menu rounded-md">
                            <section className="menu-section px-4">
                                <span className="menu-title text-xl font-bold">
                                    Filters
                                </span>
                                <ul className="menu-items">
                                    <li>
                                        <input
                                            type="checkbox"
                                            id="menu-1"
                                            className="menu-toggle"
                                        />
                                        <label
                                            className="menu-item justify-between"
                                            htmlFor="menu-1"
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
                                                {uniqueGenres.map(
                                                    (uniqueGenre) => (
                                                        <label
                                                            key={
                                                                uniqueGenre?.id
                                                            }
                                                            className={`flex cursor-pointer gap-2 menu-item ml-1 ${isCheckedGenre(
                                                                uniqueGenre?.genre as string
                                                            )}`}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                value={
                                                                    uniqueGenre?.genre as string
                                                                }
                                                                onChange={
                                                                    handleGenreFilter
                                                                }
                                                            />
                                                            <span>
                                                                {
                                                                    uniqueGenre.genre as ReactNode
                                                                }
                                                            </span>
                                                        </label>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </li>
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
                                                <span>Publication Year</span>
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
                                            id="group2"
                                        >
                                            <div className="min-h-0">
                                                {uniquePublicationYears.map(
                                                    (uniquePublicationYear) => (
                                                        <label
                                                            key={
                                                                uniquePublicationYear?.id
                                                            }
                                                            className={`flex cursor-pointer gap-2 menu-item ml-1 ${isCheckedPublicationYear(
                                                                uniquePublicationYear?.publicationYear as string
                                                            )}`}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                value={
                                                                    uniquePublicationYear?.publicationYear as string
                                                                }
                                                                onChange={
                                                                    handlePublicationYearFilter
                                                                }
                                                            />
                                                            <span>
                                                                {
                                                                    uniquePublicationYear.publicationYear as ReactNode
                                                                }
                                                            </span>
                                                        </label>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </nav>
                    </section>
                </aside>
            </div>
        </>
    );
}
