import { useForm } from 'react-hook-form';
import { FaSave } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loader from '../components/shared/Loader';
import {
    useGetSingleBookQuery,
    useUpdateBookMutation,
} from '../redux/features/books/bookApi';
type FormData = {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    image: string;
};
export default function EditBook() {
    const { register, handleSubmit } = useForm<FormData>();
    const { id } = useParams();
    const { data: book, isLoading: singleBookIsLoading } =
        useGetSingleBookQuery(id);

    const [updateBook, { isLoading }] = useUpdateBookMutation();
    const onSubmit = async (data: FormData) => {
        const options = {
            id,
            bookDetails: {
                title: data.title,
                author: data.author,
                genre: data.genre,
                publicationDate: data.publicationDate,
                image: data.image,
            },
        };

        await updateBook(options)
            .then((res) => res)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((result: any) => {
                if (result?.data?.success) {
                    toast.success('The book has been updated successfully.');
                    // reset();
                } else {
                    toast.error('The update of the book has been failed!');
                }
            });
    };

    return (
        <div className="pt-10 pb-24 mx-10">
            <h3 className="flex justify-center leading-tight text-2xl font-bold mb-2">
                {' '}
                Edit Book
            </h3>

            {singleBookIsLoading ? (
                <div className="my-5">
                    <Loader></Loader>
                </div>
            ) : (
                <div className="flex flex-col p-6 py-10 rounded-lg shadow-lg  bg-white w-full h-full justify-center mx-auto">
                    {/* <div className="flex w-full border-opacity-100"> */}
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label text-secondary-900 font-semibold">
                                        Title
                                    </label>
                                    <input
                                        placeholder="Title"
                                        type="text"
                                        className="input max-w-full border-gray-8"
                                        defaultValue={book?.data?.title}
                                        {...register('title')}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label text-secondary-900 font-semibold">
                                        Author
                                    </label>
                                    <input
                                        placeholder="Author"
                                        type="text"
                                        className="input max-w-full border-gray-8"
                                        defaultValue={book?.data?.author}
                                        {...register('author')}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label text-secondary-900 font-semibold">
                                        Image
                                    </label>
                                    <input
                                        placeholder="Image"
                                        type="text"
                                        className="input max-w-full border-gray-8"
                                        defaultValue={book?.data?.image}
                                        {...register('image')}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label text-secondary-900 font-semibold">
                                        Genre
                                    </label>
                                    <input
                                        placeholder="Genre"
                                        type="text"
                                        className="input max-w-full border-gray-8"
                                        defaultValue={book?.data?.genre}
                                        {...register('genre')}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label text-secondary-900 font-semibold">
                                        Publication Date
                                    </label>
                                    <input
                                        placeholder="Publication Date"
                                        type="date"
                                        className="input max-w-full border-gray-8"
                                        defaultValue={
                                            book?.data?.publicationDate
                                        }
                                        {...register('publicationDate')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-5 ">
                            <button
                                type="submit"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className={`flex justify-center items-center rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:text-major hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                hover:outline hover:outline-2 hover:outline-major ${
                    isLoading && 'btn-loading'
                }  `}
                            >
                                {!isLoading && (
                                    <>
                                        <FaSave /> &nbsp; Update
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
