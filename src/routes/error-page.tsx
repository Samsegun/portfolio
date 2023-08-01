import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id='error-page'
            className='flex flex-col items-center justify-center min-h-screen text-2xl text-white font-lexend'>
            <h1>Page Not Found</h1>
            <p className='text-xl'>
                Go to{" "}
                <Link to={"/"}>
                    <span className='underline'>Homepage</span>
                </Link>
            </p>
            <p>
                <i>{isRouteErrorResponse(error) && error.statusText}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
