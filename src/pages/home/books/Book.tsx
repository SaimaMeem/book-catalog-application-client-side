import { FaRegHeart } from 'react-icons/fa';
import { TbJewishStar } from 'react-icons/tb';
import { AiOutlineRead } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { IBook } from '../../../interfaces/books';

interface IProps {
    book: IBook;
}

export default function Book({ book }: IProps) {
    const { title, image, author, genre, publicationDate, _id } = book;

    const date: Date = new Date(publicationDate);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const formattedDate: string = date.toLocaleDateString('en-US', options);
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navigateToBookDetail = (id: any) => {
        navigate(`/book-detail/${id}`);
    };
    return (
        <>
            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row m-4 cursor-pointer">
                <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={image}
                    alt=""
                    onClick={() => navigateToBookDetail(_id)}
                />
                <div className="flex flex-col justify-start p-6">
                    <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        {title}
                    </h5>
                    <p className="mb-2 text-base text-black font-medium dark:text-neutral-200">
                        by{' '}
                        <span className="text-major font-semibold">
                            {author}
                        </span>
                    </p>
                    <p className="mb-2 text-sm text-gray-900 font-medium dark:text-neutral-200">
                        <b> Genre:</b> {genre}
                    </p>
                    <p className="text-xs text-gray-900  font-normal dark:text-neutral-300">
                        Published on {formattedDate}
                    </p>
                    <div className="flex justify-start my-5 font-semibold max-w-screen-sm">
                        <div className="dropdown dropdown-hover">
                            <label
                                className="btn btn-solid-primary my-2"
                                tabIndex={0}
                            >
                                <FaRegHeart /> &nbsp; Add
                            </label>
                            <div className="dropdown-menu bg-background left-0 max-w-max">
                                <Link
                                    to="/my-wish-list"
                                    tabIndex={-1}
                                    className="dropdown-item text-sm"
                                >
                                    <label className="flex items-center justify-start mr-6">
                                        <TbJewishStar /> &nbsp; Wish List
                                    </label>
                                </Link>
                                <Link
                                    to=""
                                    tabIndex={-1}
                                    className="dropdown-item text-sm"
                                >
                                    <label className="flex items-center justify-start mr-6">
                                        <AiOutlineRead /> &nbsp; Reading List
                                    </label>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
