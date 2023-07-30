import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id='error-page'
            className='flex items-center justify-center min-h-screen text-2xl text-white font-lexend'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{isRouteErrorResponse(error) && error.statusText}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
