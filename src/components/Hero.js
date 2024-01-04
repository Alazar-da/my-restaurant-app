import '../styles/style.css';
import dish from '../icons_assets/restauranfood.jpg';

function Hero(){
    return(
        <section className='hero'>
            <div className='hero-info'>
                <h1 className='float-left'>Little Lemon</h1>
                <h5 className='float-left'>Chicago</h5>
                <p className='float-left'>With a huge number of device targets and screen sizes across the Windows ecosystem,
                    rather than optimizing your UI for each device,
                     we recommended designing for a few key width categories
                </p>
                <button className='reserve-button'>Reserve a Table</button>
            </div>
            <div className='dish-cotainer'>
            <img className='dish' src={dish} alt='dish'/>
            </div>
        </section>
    );
}

export default Hero;