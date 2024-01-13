import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking (){
    const navigate = useNavigate();
    const reserveButton =()=>{
        navigate('/Booking');
    }
    return(
        <>

            <h3 className='confirmed-header'>booking has been confirmed!</h3>
            <div className='confirmed-button-container'>
            <button className='confirmed-button' onClick={reserveButton} aria-label="On Click">Back to Home</button>
            </div>
        </>
    )
}
export default ConfirmedBooking;