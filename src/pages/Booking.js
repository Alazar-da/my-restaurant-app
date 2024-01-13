import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import '../styles/style.css';
import {useReducer } from 'react';
import {fetchAPI,submitAPI} from '../API/fakeAPI';
import { useNavigate } from 'react-router-dom';


const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};


const initializeTimes = initialAvailableTimes =>
[...initialAvailableTimes, ...fetchAPI(new Date())];

function Booking() {



    const [availableTimes, dates] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

const submitData = submitData => {
  if (submitAPI(submitData))
  { navigate('/ConfirmedBooking');}
}



      return (
    <>
    <header>
    {/* <Nav /> */}
    </header>
        <main className='main-container-form'>
            <BookingForm availableTimes={availableTimes} newDate={dates} submitData={submitData} />
        </main>

        <footer>
            <Footer/>
        </footer>

    </>

  );
}

export default Booking;
