/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from 'react';
import { BsBookHalf } from 'react-icons/bs';
import { FaSave } from 'react-icons/fa';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddToLists from '../components/AddToLists';
import Loader from '../components/shared/Loader';
import {
    useGetSingleBookQuery,
    usePostReviewMutation,
    useRemoveBookMutation,
} from '../redux/features/books/bookApi';

export default function BookDetail() {
    const { id } = useParams();
    const { data: book, isLoading } = useGetSingleBookQuery(id);
    const [postReview] = usePostReviewMutation();
    const [deleteBook] = useRemoveBookMutation();
    const [textArea, setTextArea] = useState<string>('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const options = {
            id,
            data: { reviews: textArea },
        };
        postReview(options);
        setTextArea('');
    };

    const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextArea(event.target.value);
    };
    const navigateToEditBook = (id: any) => {
        navigate(`/edit-book/${id}`);
    };
    const handleDeleteBook = (id: string) => {
        deleteBook(id)
            .then((res) => res)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((result: any) => {
                if (result?.data?.success) {
                    toast.success('The book has been deleted successfully.');
                    navigate(from, { replace: true });
                } else {
                    toast.error('The deletion of the book has been failed!');
                }
            });
    };
    return (
        <>
            {isLoading ? (
                <div className="m-10 p-20">
                    <Loader />
                </div>
            ) : (
                <div className="flex flex-col xl:flex-row bg-white md:mx-16 justify-center md:justify-between">
                    <div className="flex flex-col xl:flex-row justify-start items-start">
                        <img
                            className="w-96 md:w-64 sm:w-32 lg:w-96 object-contain rounded-lg shadow-lg mx-auto mt-8"
                            src={book?.data?.image}
                            alt=""
                        />
                        <div className="p-6 flex-col justify-center md:text-left w-full">
                            <h5 className="text-xl md:text-3xl font-bold mb-2">
                                {book?.data?.title}
                            </h5>
                            <h5 className="md:text-2xl font-bold mb-2">
                                by{' '}
                                <span className="text-major font-semibold">
                                    {book?.data?.author}
                                </span>
                            </h5>
                            <h5 className="md:text-lg font-bold mb-2">
                                GENRE: {book?.data?.genre}
                                <span className="text-base font-medium"></span>
                            </h5>
                            <p className="text-base font-medium mb-4">
                                Published on{' '}
                                <span className="font-semibold text-major underline underline-offset-auto">
                                    {book?.data?.publicationDate}
                                </span>
                            </p>
                            <div>
                                {' '}
                                <div className="flex justify-start my-5 font-semibold max-w-screen-sm">
                                    <AddToLists book={book?.data}></AddToLists>
                                </div>
                            </div>
                            <div className="flex justify-start my-5 space-x-5">
                                <button
                                    onClick={() =>
                                        navigateToEditBook(book?.data?._id)
                                    }
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-warning-600 shadow-[0_4px_9px_-4px_rgba(196,138,23,0.9)] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_rgba(196,138,23,0.3),0_4px_18px_0_rgba(196,138,23,0.2)]
                    hover:outline hover:outline-2 hover:outline-warning-600 hover:text-warning-600"
                                >
                                    Edit Book
                                </button>
                                <label
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-danger-600 shadow-[0_4px_9px_-4px_#D42A46] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_#D42A46,0_4px_18px_0_#D42A46)]
                    hover:outline hover:outline-2 hover:outline-danger-600 hover:text-danger-600"
                                    htmlFor="modal-1"
                                >
                                    Delete Book
                                </label>
                                <input
                                    className="modal-state"
                                    id="modal-1"
                                    type="checkbox"
                                />
                                {/* delete modal */}
                                <div className="modal">
                                    <label
                                        className="modal-overlay"
                                        htmlFor="modal-1"
                                    ></label>
                                    <div className="modal-content flex flex-col gap-5">
                                        <label
                                            htmlFor="modal-1"
                                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                        >
                                            ✕
                                        </label>
                                        <h2 className="text-xl font-semibold">
                                            Delete Confirmation
                                        </h2>
                                        <span>
                                            Are you sure you want to delete{' '}
                                            <b>{book?.data?.title}</b> book?
                                        </span>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() =>
                                                    handleDeleteBook(
                                                        book?.data?._id
                                                    )
                                                }
                                                className="btn btn-error btn-block"
                                            >
                                                Delete
                                            </button>

                                            <label
                                                className="btn btn-block"
                                                htmlFor="modal-1"
                                            >
                                                Cancel
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* delete modal */}
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex-col justify-center md:text-left w-full md:w-96">
                        <h5 className="text-xl font-bold mb-2">Reviews</h5>
                        <div className="form-group">
                            <div className="form-field">
                                <textarea
                                    className="textarea"
                                    placeholder="Add Review"
                                    onChange={handleTextArea}
                                    value={textArea}
                                />
                            </div>
                        </div>
                        <div className="flex justify-start my-5 ">
                            <button
                                type="submit"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className={`flex justify-center items-center rounded px-4 py-1.5 text-xs font-bold uppercase leading-normal text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:text-major hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                            hover:outline hover:outline-2 hover:outline-major ${
                                isLoading && 'btn-loading'
                            }  ${!textArea && 'disabled:opacity-60'} `}
                                disabled={!textArea}
                                onClick={(event) => handleSubmit(event)}
                            >
                                {!isLoading && (
                                    <>
                                        <FaSave /> &nbsp; Submit
                                    </>
                                )}
                            </button>
                        </div>
                        <div>
                            <h5 className="font-bold">All Reviews</h5>
                            <ul className="w-96">
                                {book?.data?.reviews.length > 0 &&
                                    book?.data?.reviews
                                        .toReversed()
                                        .map(
                                            (review: string, index: number) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-row items-stretch space-x-3"
                                                >
                                                    <BsBookHalf className="mt-3.5" />
                                                    <li className="w-full py-2">
                                                        {review}
                                                    </li>
                                                </div>
                                            )
                                        )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
