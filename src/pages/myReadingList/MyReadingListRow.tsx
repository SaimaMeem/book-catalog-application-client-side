/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IBook } from '../../interfaces/books';
import {
    useGetMyProfileQuery,
    useUpdateReadingListBookStatusMutation,
} from '../../redux/features/user/userApi';
import { useAppSelector } from '../../redux/hooks';
interface IProps {
    book: IBook & { status: string };
    index: number;
}
export default function MyReadingListRow({ book, index }: IProps) {
    const navigate = useNavigate();
    const [select, setSelect] = useState(true);
    const [row, setRow] = useState<string | number | null>(null);
    const [selectField, setSelectField] = useState<string>('');
    const { email } = useAppSelector((state) => state.user);
    const { data: user } = useGetMyProfileQuery({ email });

    const [updateBookStatus] = useUpdateReadingListBookStatusMutation();
    const navigateToBookDetail = (id: any) => {
        navigate(`/book-detail/${id}`);
    };
    const handleEditAction = (id: any) => {
        setSelect(!select);
        setRow(id);
    };
    const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectField(event.target.value);
    };
    const handleSubmit = async (
        event: FormEvent<HTMLButtonElement>,
        id: any
    ) => {
        event.preventDefault();
        const options = {
            userId: user?.data?._id,
            bookInfo: {
                bookId: id,
                status: selectField,
            },
        };

        await updateBookStatus(options)
            .then((res) => res)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((result: any) => {
                if (result?.data?.success) {
                    toast.success('The status has been updated successfully.');
                } else {
                    toast.error(
                        'The attempt of status change has been failed!'
                    );
                }
            });
    };
    return (
        <>
            <tr className="font-semibold">
                <td>{index + 1}</td>
                <td>
                    <img
                        className="h-16 w-16 ml-10 lg:ml-24 object-contain cursor-pointer"
                        src={book.image}
                        alt="Book Cover"
                        onClick={() => navigateToBookDetail(book._id)}
                    />
                </td>
                <td>{book.title}</td>
                <td>
                    {!select && row == book?._id ? (
                        <select
                            className={`select select-solid text-sm`}
                            defaultValue={book.status}
                            onChange={(event) => handleStatusChange(event)}
                        >
                            <option>Currently Reading</option>
                            <option>Read Soon</option>
                            <option>Finished Reading</option>
                        </select>
                    ) : (
                        <label htmlFor=""> {book.status}</label>
                    )}
                </td>
                <td onClick={() => handleEditAction(book?._id)}>
                    <div className="flex justify-center items-center">
                        {!select && row === book?._id ? (
                            <button
                                type="submit"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className={`flex justify-center items-center rounded px-3 py-1.5 text-xs font-semibold uppercase leading-normal text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:text-major hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                hover:outline hover:outline-2 hover:outline-major`}
                                onClick={(event) =>
                                    handleSubmit(event, book?._id)
                                }
                            >
                                Submit
                            </button>
                        ) : (
                            <FiEdit />
                        )}
                    </div>
                </td>
            </tr>
        </>
    );
}
