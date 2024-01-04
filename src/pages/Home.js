import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonial';
import About from '../components/About';
import Footer from '../components/Footer';
import '../styles/style.css';



function Home() {

  return (
    <>
         <main className='main-container'>
            <Hero />
             <Highlights/>
             <Testimonials/>
            <About/>
        </main>

        <footer>
            <Footer/>
        </footer>

    </>

  );
}

export default Home;
