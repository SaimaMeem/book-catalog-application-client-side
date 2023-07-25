import { useForm } from 'react-hook-form';
import { CgLogIn } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSignupMutation } from '../../redux/features/user/userApi';
type FormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};
export default function Signup() {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset,
    } = useForm<FormData>();
    const [signup] = useSignupMutation();
    const onSubmit = async (data: FormData) => {
        const options = {
            username: data.username,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        };
        await signup(options)
            .then((res) => res)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((result: any) => {
                if (result?.data?.success) {
                    toast.success('You have registered successfully.');
                    reset();
                    navigate('/');
                } else {
                    toast.error('Your Registration has failed!');
                }
            });
    };
    return (
        <section className="h-screen bg-[#F3F4F6]">
            <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
                <main className="w-full max-w-md mx-auto p-6 ">
                    <div className="mt-7 bg-white border-4 border-gray-2 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 bg-background">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                    Register
                                </h1>
                                <p className="mt-2 text-sm text-gray-600 font-semibold dark:text-gray-400">
                                    Already have an account?
                                    <Link
                                        className="text-major font-semibold"
                                        to="/login"
                                    >
                                        {' '}
                                        Log in here
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
                                                User Name
                                            </label>
                                            <input
                                                placeholder="User Name"
                                                type="text"
                                                className="input max-w-full border-gray-8"
                                                autoComplete="off"
                                                {...register('username', {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            'User Name is required.',
                                                    },
                                                })}
                                            />
                                            {errors.username?.type ===
                                                'required' && (
                                                <label className="form-label">
                                                    <span className="form-label-alt text-red-10 font-bold">
                                                        {
                                                            errors.username
                                                                .message
                                                        }
                                                    </span>
                                                </label>
                                            )}
                                        </div>
                                        <div className="form-field">
                                            <label className="form-label text-secondary-900 font-semibold">
                                                Email Address
                                            </label>
                                            <input
                                                placeholder="Email Address"
                                                type="email"
                                                className="input max-w-full border-gray-8"
                                                autoComplete="off"
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
                                                type="password"
                                                className="input max-w-full border-gray-8"
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
                                        <div className="form-field">
                                            <label className="form-label text-secondary-900 font-semibold">
                                                Confirm Password
                                            </label>
                                            <input
                                                placeholder="Confirm Password"
                                                type="password"
                                                className="input max-w-full border-gray-8"
                                                {...register(
                                                    'confirmPassword',
                                                    {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Confirm Password is required.',
                                                        },
                                                    }
                                                )}
                                            />
                                            {errors.confirmPassword?.type ===
                                                'required' && (
                                                <label className="form-label">
                                                    <span className="form-label-alt text-red-10 font-bold">
                                                        {
                                                            errors
                                                                .confirmPassword
                                                                .message
                                                        }
                                                    </span>
                                                </label>
                                            )}
                                            {watch('password') !== '' &&
                                                watch('confirmPassword') !==
                                                    '' &&
                                                watch('password') !==
                                                    watch(
                                                        'confirmPassword'
                                                    ) && (
                                                    <label className="form-label">
                                                        <span className="form-label-alt text-red-10 font-bold">
                                                            The passwords don't
                                                            match.
                                                        </span>
                                                    </label>
                                                )}
                                        </div>
                                        <button
                                            type="submit"
                                            className={`my-3 py-2 px-3 inline-flex uppercase justify-center items-center rounded-md font-bold text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:text-major hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                                            hover:outline hover:outline-2 hover:outline-major disabled:opacity-60`}
                                            disabled={
                                                watch('password') !== '' &&
                                                watch('confirmPassword') !==
                                                    '' &&
                                                watch('password') !==
                                                    watch('confirmPassword')!
                                            }
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
