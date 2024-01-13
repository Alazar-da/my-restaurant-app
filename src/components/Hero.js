import '../styles/style.css';
import dish from '../icons_assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

function Hero(){
    const navigate = useNavigate();
    const reserveButton =()=>{
        navigate('/Booking');
    }
    return(
        <section className='hero'>
            <article className='hero-info'>
                <h1 className='float-left'>Little Lemon</h1>
                <h5 className='float-left'>Chicago</h5>
                <p className='float-left'>If you’re looking for a delicious burger in a relaxed and friendly environment,
                Little Lemon restaurant is definitely worth a visit. Whether you’re a meat-lover or a vegetarian, Our restaurant has something for everyone. Come on down and enjoy a delicious food today!
                </p>
                <button className='reserve-button' onClick={reserveButton} aria-label="On Click">Reserve a Table</button>
            </article>
            <article className='dish-cotainer'>
                <img className='dish' src={dish} alt='dish'/>
            </article>
        </section>
    );
}

export default Hero;