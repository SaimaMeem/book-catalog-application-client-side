import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="navbar rounded-lg navbar-glass font-semibold">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Book Catalog Application
                    </Link>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="navbar-item">
                        All Books
                    </Link>
                    <Link to="/" className="navbar-item">
                        Add New Book
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="avatar avatar-ring avatar-md">
                        <div className="dropdown-container">
                            <div className="dropdown">
                                <label
                                    className="btn btn-ghost flex cursor-pointer px-0"
                                    tabIndex={0}
                                >
                                    <img
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                        alt="avatar"
                                    />
                                </label>
                                <div className="dropdown-menu dropdown-menu-bottom-left">
                                    <Link
                                        to="/"
                                        className="dropdown-item text-sm"
                                    >
                                        My Wishlist
                                    </Link>
                                    <Link
                                        to="/"
                                        className="dropdown-item text-sm"
                                    >
                                        My Reading List
                                    </Link>
                                    <Link
                                        to="/"
                                        className="dropdown-item text-sm"
                                    >
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
