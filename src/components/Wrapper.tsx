import React from "react";

type WrapperProps = {
    children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return <div className='w-11/12 mx-auto'>{children}</div>;
};

export default Wrapper;
