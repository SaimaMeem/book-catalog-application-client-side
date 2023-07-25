/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineRead } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { TbJewishStar } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../interfaces/books';
import { useAddToWishListMutation } from '../../redux/features/user/userApi';
import { useAppSelector } from '../../redux/hooks';

interface IProps {
    book: IBook;
}

export default function AddToLists({ book }: IProps) {
    const { email } = useAppSelector((state) => state.user);
    const { title: bookTitle, _id: bookId } = book;

    const [addToWishList] = useAddToWishListMutation();
    const navigate = useNavigate();
    const handleAddToWishList = () => {
        if (!email) {
            navigate('/login');
        } else {
            const options = {
                bookInfo: {
                    bookId,
                    bookTitle,
                },
            };
            addToWishList(options);
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
                >
                    <label className="flex items-center justify-start font-bold mr-6">
                        <AiOutlineRead /> &nbsp; Reading List
                    </label>
                </li>
            </div>
        </div>
    );
}
