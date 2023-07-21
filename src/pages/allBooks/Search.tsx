import { ChangeEvent } from 'react';
import { searchBook } from '../../redux/features/books/bookSlice';
import { useAppDispatch } from '../../redux/hooks';
export default function Search() {
    const dispatch = useAppDispatch();
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchBook(event.currentTarget.value));
    };
    return (
        <>
            <div className="mb-3 mt-10 flex justify-center">
                <div className="relative mb-4 flex w-1/2 min-w-[400px] flex-wrap items-stretch">
                    <input
                        type="search"
                        onChange={handleSearch}
                        className="relative m-0 -mr-0.5 block w-[200px] min-w-1/2 flex-auto rounded-l border border-solid border-major bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-major focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_#378036] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-major"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon1"
                    />

                    <button
                        className="relative z-[2] flex items-center rounded-r bg-major px-6 py-2.5 text-xs font-bold uppercase leading-tight text-background shadow-md transition duration-150 ease-in-out hover:bg-major hover:shadow-lg focus:bg-major focus:shadow-lg focus:outline-none focus:ring-0 active:bg-major active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
