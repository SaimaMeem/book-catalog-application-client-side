/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBook } from '../../interfaces/books';
import { useGetBooksQuery } from '../../redux/features/books/bookApi';
import { useGetMyProfileQuery } from '../../redux/features/user/userApi';
import { useAppSelector } from '../../redux/hooks';
import MyReadingListRow from './MyReadingListRow';

export default function MyReadingList() {
    const { email } = useAppSelector((state) => state.user);
    const { data: user } = useGetMyProfileQuery({ email });
    const { data: books } = useGetBooksQuery({ limit: 0 });
    const readingList = books?.data
        .filter((book: IBook) => {
            return user?.data?.readingList?.some((wl: any) => {
                return book._id === wl.bookId;
            });
        })
        .map((book: IBook) => {
            const wl = user?.data?.readingList?.find(
                (wl: any) => book._id === wl.bookId
            );
            return wl ? { ...book, status: wl.status } : book;
        });

    return (
        <div className="lg:mx-48 m-10">
            <h3 className="flex justify-start leading-tight text-2xl font-bold mb-2">
                {' '}
                My Reading List
            </h3>
            <h3 className="flex justify-start leading-tight text-md font-medium mb-5">
                You have {readingList?.length} book(s) in your reading list.
            </h3>

            {readingList?.length > 0 && (
                <div className="flex w-full overflow-x-auto">
                    <table className="table-hover table">
                        <thead>
                            <tr>
                                <th>SI No.</th>
                                <th>Cover</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {readingList.map(
                                (
                                    book: IBook & { status: string },
                                    index: number
                                ) => (
                                    <MyReadingListRow
                                        key={book?._id}
                                        book={book}
                                        index={index}
                                    ></MyReadingListRow>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
