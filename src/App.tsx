import "./App.css";
import FooterLinks from "./components/FooterLinks";
import Projects from "./components/Projects";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/header/Navigation";
import Hero from "./components/hero";

function App() {
    return (
        <div className='bg-black'>
            <Wrapper>
                <header className='sticky top-0 bg-black'>
                    <Navigation />
                </header>

                <main>
                    <Hero />

                    <Projects />
                </main>

                <footer className='text-[#ffffffcc] mt-16'>
                    <hr />

                    <FooterLinks />
                </footer>
            </Wrapper>
        </div>
    );
}

export default App;
