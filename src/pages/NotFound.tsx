import { Link } from 'react-router-dom';
import notFound from '../assets/not-found.png';
export default function NotFound() {
    return (
        <section>
            <div className="pt-10 pb-16 text-center">
                <img
                    src={notFound}
                    className="max-w-xs h-auto mx-auto"
                    alt="..."
                />
                <h5 className="font-bold text-dark-blue my-6">
                    Sorry! The page you are looking for is nowhere to find.{' '}
                </h5>
                <div className="mt-5">
                    <Link
                        to="/"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-background bg-major shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-background hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]
                    hover:outline hover:outline-2 hover:outline-major"
                    >
                        Go To Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
