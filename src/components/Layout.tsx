import React from "react";
import Navigation from "./header/Navigation";
import FooterLinks from "./FooterLinks";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='w-11/12 mx-auto lg:w-4/5 max-w-[1920px] min-h-screen'>
            <header className='sticky top-0 bg-black'>
                <Navigation />
            </header>
            {children}

            <footer className='text-[#ffffffcc] mt-16'>
                <hr />

                <FooterLinks />
            </footer>
        </div>
    );
};

export default Layout;
