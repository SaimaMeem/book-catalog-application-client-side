import { ChangeEvent, FormEvent, useState } from 'react';
import { BsBookHalf } from 'react-icons/bs';
import { FaSave } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/shared/Loader';
import {
    useGetSingleBookQuery,
    usePostReviewMutation,
} from '../redux/features/books/bookApi';

export default function BookDetail() {
    const { id } = useParams();
    const { data: book, isLoading } = useGetSingleBookQuery(id);
    const [postReview] = usePostReviewMutation();
    const [textArea, setTextArea] = useState<string>('');

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
    return (
        <>
            {isLoading ? (
                <div className="m-10 p-20">
                    <Loader />
                </div>
            ) : (
                <div className="flex flex-col xl:flex-row bg-white md:mx-16 justify-center md:justify-between">
                    <div className="flex flex-col xl:flex-row">
                        <img
                            className="w-96 md:w-64 sm:w-32 lg:w-96 object-contain xl:object-cover rounded-lg shadow-lg mx-auto"
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
                            <div className="flex justify-start my-5 space-x-5">
                                <Link
                                    to="/all-books"
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-warning-600 shadow-[0_4px_9px_-4px_rgba(196,138,23,0.9)] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_rgba(196,138,23,0.3),0_4px_18px_0_rgba(196,138,23,0.2)]
                    hover:outline hover:outline-2 hover:outline-warning-600 hover:text-warning-600"
                                >
                                    Edit Book
                                </Link>
                                <Link
                                    to="/all-books"
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-danger-600 shadow-[0_4px_9px_-4px_#D42A46] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_#D42A46,0_4px_18px_0_#D42A46)]
                    hover:outline hover:outline-2 hover:outline-danger-600 hover:text-danger-600"
                                >
                                    Delete Book
                                </Link>
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
