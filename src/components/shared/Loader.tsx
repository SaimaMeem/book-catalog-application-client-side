export default function Loader() {
    return (
        <div className="flex justify-center">
            <div className="spinner-wave spinner-xl spinner-success">
                <div className="spinner-wave-dot"></div>
                <div className="spinner-wave-dot"></div>
                <div className="spinner-wave-dot"></div>
                <div className="spinner-wave-dot"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-6">
                <div className="skeleton-pulse h-50 w-50"></div>
            </div>
        </div>
    );
}
