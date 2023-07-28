import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id='error-page'
            className='flex items-center justify-center min-h-screen text-2xl text-white font-lexend'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{/* <i>{error.statusText || error.message}</i> */}</p>
        </div>
    );
};

export default Error;
