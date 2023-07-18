import AllBooks from './pages/home/books/Books';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

function App() {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <AllBooks />
            <Footer />
        </section>
    );
}

export default App;
