/* eslint-disable no-unsafe-optional-chaining */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgLogIn } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoginMutation } from '../../redux/features/user/userApi';

type FormData = {
    email: string;
    password: string;
};
export default function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormData>();

    const [login] = useLoginMutation();
    const onSubmit = async (data: FormData) => {
        const options = {
            email: data.email,
            password: data.password,
        };
        try {
            const payload = await login(options).unwrap();
            if (payload) {
                toast.success('You have Logged in successfully.');
                reset();
                navigate('/');
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error?.status == 401) {
                setErrorMessage('You have entered a wrong password.');
            } else if (error?.status == 404) {
                setErrorMessage('You are not a registered user.');
            }
        }
    };
    return (
        <section className="h-screen bg-[#F3F4F6]">
            <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
                <main className="w-full max-w-md mx-auto p-6 ">
                    <div className="mt-7 bg-white border-4 border-gray-2 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 bg-background">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                    Login
                                </h1>
                                <p className="mt-2 text-sm text-gray-600 font-semibold dark:text-gray-400">
                                    Don't have an account yet?
                                    <Link
                                        className="text-major font-semibold"
                                        to="/register"
                                    >
                                        {' '}
                                        Register here
                                    </Link>
                                </p>
                            </div>

                            <div className="mt-5">
                                <form
                                    className=""
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="grid gap-y-4">
                                        <div className="form-field">
                                            <label className="form-label text-secondary-900 font-semibold">
                                                Email Address
                                            </label>
                                            <input
                                                placeholder="Email Address"
                                                type="email"
                                                className="input max-w-full border-gray-8"
                                                autoComplete="off"
                                                onFocus={() =>
                                                    setErrorMessage('')
                                                }
                                                {...register('email', {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            'Email Address is required.',
                                                    },
                                                })}
                                            />
                                            {errors.email?.type ===
                                                'required' && (
                                                <label className="form-label">
                                                    <span className="form-label-alt text-red-10 font-bold">
                                                        {errors.email.message}
                                                    </span>
                                                </label>
                                            )}
                                        </div>
                                        <div className="form-field">
                                            <label className="form-label text-secondary-900 font-semibold">
                                                Password
                                            </label>
                                            <input
                                                placeholder="Password"
                                                type="text"
                                                className="input max-w-full border-gray-8"
                                                onFocus={() =>
                                                    setErrorMessage('')
                                                }
                                                {...register('password', {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            'Password is required.',
                                                    },
                                                })}
                                            />
                                            {errors.password?.type ===
                                                'required' && (
                                                <label className="form-label">
                                                    <span className="form-label-alt text-red-10 font-bold">
                                                        {
                                                            errors.password
                                                                .message
                                                        }
                                                    </span>
                                                </label>
                                            )}
                                        </div>
                                        {errorMessage && (
                                            <label className="form-label">
                                                <span className="form-label-alt text-red-10 font-bold">
                                                    {errorMessage}
                                                </span>
                                            </label>
                                        )}
                                        <button
                                            type="submit"
                                            className={`my-3 py-2 px-3 inline-flex uppercase justify-center items-center rounded-md font-bold text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:text-major hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                                            hover:outline hover:outline-2 hover:outline-major `}
                                        >
                                            Sign In &nbsp; <CgLogIn />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}
