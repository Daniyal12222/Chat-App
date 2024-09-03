function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600">Page Not Found</p>
        <p className="text-gray-500 mt-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Go Home
        </Link>
      </div>
    )
}

export default NotFound