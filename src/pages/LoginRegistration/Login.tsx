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
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormData>();
    const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
    const onSubmit = async (data: FormData) => {
        console.log(data);

        const options = {
            email: data.email,
            password: data.password,
        };
        await login(options)
            .then((res) => res)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((result: any) => {
                console.log(result);

                if (result?.data?.success) {
                    toast.success('You have Logged in successfully.');
                    // reset();
                    navigate('/');
                } else {
                    toast.error('Your Login attempt has failed!');
                }
            });
        console.log(isLoading, isSuccess, isError);
    };
    return (
        <section className="h-full bg-[#F3F4F6]">
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
                                        Sign up here
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

                                        <button
                                            type="submit"
                                            className={`my-3 py-3 px-4 inline-flex uppercase justify-center items-center gap-2 rounded-md border border-transparent font-bold text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:text-major hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                                            hover:outline hover:outline-2 hover:outline-major `}
                                        >
                                            Sign In <CgLogIn />
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
