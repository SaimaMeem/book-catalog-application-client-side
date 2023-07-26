import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Loader from './components/shared/Loader';
import useAuthCheck from './hooks/useAuthCheck';

function App() {
    const authChecked = useAuthCheck();
    return !authChecked ? (
        <Loader />
    ) : (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
}

export default App;
