/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineRead } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { TbJewishStar } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IBook } from '../../interfaces/books';
import {
    useAddToReadingListMutation,
    useAddToWishListMutation,
} from '../../redux/features/user/userApi';
import { useAppSelector } from '../../redux/hooks';

interface IProps {
    book: IBook;
}

export default function AddToLists({ book }: IProps) {
    const { email } = useAppSelector((state) => state.user);
    const { _id: bookId } = book;

    const [addToWishList] = useAddToWishListMutation();
    const [addToReadingList] = useAddToReadingListMutation();
    const navigate = useNavigate();
    const handleAddToWishList = () => {
        if (!email) {
            navigate('/login');
        } else {
            const options = {
                bookInfo: {
                    bookId,
                },
            };
            addToWishList(options)
                .then((res) => res)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((result: any) => {
                    if (result?.data?.success) {
                        toast.success(
                            'The book has been added to your wishlist successfully.'
                        );
                    } else {
                        toast.error(
                            'The addition of the book to your wishlist has been failed!'
                        );
                    }
                });
        }
    };
    const handleAddToReadingList = () => {
        if (!email) {
            navigate('/login');
        } else {
            const options = {
                bookInfo: {
                    bookId,
                    status: 'Read Soon',
                },
            };
            addToReadingList(options)
                .then((res) => res)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((result: any) => {
                    console.log(result);

                    if (result?.data?.success) {
                        toast.success(
                            'The book has been added to your reading list successfully.'
                        );
                    } else {
                        toast.error(
                            'The addition of the book to your reading list has been failed!'
                        );
                    }
                });
        }
    };
    return (
        <div className="dropdown dropdown-hover">
            <label className="btn btn-solid-primary my-2" tabIndex={0}>
                <FaRegHeart /> &nbsp; Add
            </label>
            <div className="dropdown-menu bg-background left-0 max-w-max">
                <li
                    tabIndex={-1}
                    className="dropdown-item text-sm cursor-pointer"
                    onClick={() => handleAddToWishList()}
                >
                    <label className="flex items-center justify-start font-bold mr-6">
                        <TbJewishStar /> &nbsp; Wish List
                    </label>
                </li>
                <li
                    tabIndex={-1}
                    className="dropdown-item text-sm cursor-pointer"
                    onClick={() => handleAddToReadingList()}
                >
                    <label className="flex items-center justify-start font-bold mr-6">
                        <AiOutlineRead /> &nbsp; Reading List
                    </label>
                </li>
            </div>
        </div>
    );
}
