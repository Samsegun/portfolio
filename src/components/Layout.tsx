import { Outlet } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import Header from "./header/header";

const Layout = () => {
    return (
        <div className='bg-[#1a1a1a]'>
            <Header />

            <div className='w-11/12 mx-auto lg:w-4/5 max-w-[1920px] min-h-screen'>
                <main>
                    <Outlet />
                </main>

                <footer className='text-[#ffffffcc] mt-16'>
                    <hr />

                    <FooterLinks />
                </footer>
            </div>
        </div>
    );
};

export default Layout;
