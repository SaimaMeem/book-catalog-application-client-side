/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { IBook } from '../interfaces/books';
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import { useGetMyProfileQuery } from '../redux/features/user/userApi';
import { useAppSelector } from '../redux/hooks';

export default function MyWishList() {
    const navigate = useNavigate();
    const { email } = useAppSelector((state) => state.user);
    const { data: user } = useGetMyProfileQuery({ email });
    const { data: book } = useGetBooksQuery({});
    const wishlist = book?.data.filter((book: IBook) => {
        return user?.data?.wishList?.some((wl: any) => {
            return book._id === wl.bookId;
        });
    });

    const navigateToBookDetail = (id: any) => {
        navigate(`/book-detail/${id}`);
    };
    return (
        <div className="lg:mx-48 m-10">
            <h3 className="flex justify-start leading-tight text-2xl font-bold mb-2">
                {' '}
                My WishList
            </h3>
            <h3 className="flex justify-start leading-tight text-md font-medium mb-2">
                You have {wishlist?.length} book(s) in your wish list.
            </h3>
            <div className="block">
                {wishlist?.length > 0 &&
                    wishlist.map((book: IBook) => (
                        <div
                            className="flex justify-start bg-white rounded-xl shadow-lg border-2 border-gray-3 bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] my-8"
                            key={book?._id}
                        >
                            <img
                                className="flex justify-center w-[150px] object-cover rounded-lg shadow-lg"
                                src={book?.image}
                                alt=""
                                onClick={() => navigateToBookDetail(book?._id)}
                            />

                            <div className="flex w-5/6">
                                <div className="p-4 flex flex-col h-full sm:p-7">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                        {book?.title}
                                    </h3>
                                    <p className="text-xl mt-1 text-gray-800 dark:text-gray-400">
                                        {book?.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
