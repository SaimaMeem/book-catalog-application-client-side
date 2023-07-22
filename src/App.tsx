import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

function App() {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className="">
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
