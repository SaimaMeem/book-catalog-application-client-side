import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Books from './pages/home/books/Books';

function App() {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <Books />
            <Footer />
        </section>
    );
}

export default App;
