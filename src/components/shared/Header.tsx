export default function Header() {
    return (
        <>
            <div className="navbar rounded-lg navbar-glass font-semibold">
                <div className="navbar-start">
                    <a className="navbar-item">Book Catalog Application</a>
                </div>
                <div className="navbar-center">
                    <a className="navbar-item">All Books</a>
                    <a className="navbar-item">Add New Book</a>
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
                                    <a className="dropdown-item text-sm">
                                        My Wishlist
                                    </a>
                                    <a className="dropdown-item text-sm">
                                        My Reading List
                                    </a>
                                    <a className="dropdown-item text-sm">
                                        Log Out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
