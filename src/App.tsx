import "./App.css";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/header/Navigation";
import Hero from "./components/hero";

function App() {
    return (
        <div className='bg-black'>
            <Wrapper>
                <header>
                    <Navigation />
                </header>

                <main>
                    <Hero />

                    <section className='text-white font-lora'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Amet modi, ullam ad obcaecati ratione non
                        aspernatur eaque iste aliquid dolore corporis neque rem
                        magnam laboriosam eius? Tempora minima debitis assumenda
                        animi, quia voluptatibus. Modi, commodi quos minima
                        consequatur ratione magni unde provident porro vero
                        asperiores labore impedit animi delectus laborum?
                    </section>
                </main>
            </Wrapper>
        </div>
    );
}

export default App;
