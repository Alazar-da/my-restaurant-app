import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import '../styles/style.css';
import { useState,useEffect,useReducer } from 'react';
import {fetchAPI,submitAPI} from '../API/fakeAPI';


function Booking() {

  const [time, setTime] = useState("");
  const [occasion, setOccastion] = useState("");
  const [guests, setGuests] = useState("");
  const [comment, setComment] = useState("");

  const getGuest =(guest)=>{setGuests(guest);}


    const getOccasion =(occasion)=>{setOccastion(occasion);}

    const updateTimes = (availableTimes, date) => {
      const response = fetchAPI(new Date(date));
      return (response.length !== 0) ? response : availableTimes;
    };


    const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())];
    const [availableTimes, date] = useReducer(updateTimes, [], initializeTimes);









      return (
    <>
        <main className='main-container-form'>
            <BookingForm date={date} guest={getGuest} occasion={getOccasion}  availableTimes={availableTimes}/>
        </main>

        <footer>
            <Footer/>
        </footer>

    </>

  );
}

export default Booking;
