import { Outlet } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

function App() {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className="pt-16">
                <Outlet />
            </div>
            <Footer />
        </section>
    );
}

export default App;
