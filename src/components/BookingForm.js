
import '../styles/style.css';
 import { useState } from 'react';




const BookingForm=({availableTimes,newDate,submitData})=> {

    const today=new Date().toISOString().split('T')[0];
    const occasionList=["Birthday","Anniversary"];

    const [time,setTime]=useState("17:00");
    const [dates,setDate]=useState(today);
    const [guest,setGuest]=useState(1);
    const [occasion,setOccasion]=useState(occasionList[0]);


  const guestHandler =(e)=>{

    setGuest(e.target.value);

}

    const dateHandler =(e)=>{
    newDate(e.target.value);
    setDate(e.target.value);}

    const occasionHandler =(e)=>{setOccasion(e.target.value);}

    const timeHandler =(e)=>{
        setTime(e.target.value);}

    const handleSubmit= (e)=> {
        e.preventDefault();
        submitData({ dates, time, guest, occasion, });
      }


      const dateErr=(dates)=>{
        if(dates==="" || dates<today){
            return "Please choose a valid date";
        }
        return "";

    }
      const guestErr=(guest)=>{
        const newGest=parseInt(guest);

        if(!newGest || newGest<1 || newGest>10){
            return "Please enter a number between 1 and 10";
        }

        return "";
      }
      const timeErr=(time)=>{
        if(time===""){
            return "Please choose the time";
        }
        return "";

    }
      const occasionErr=(occasion)=>{
        if(!occasion ){
            return "Please choose the occasion";
        }

        return "";
      }

       const isDisabled=(dates,guest)=>{
        if(dateErr(dates)!=="" || guestErr(guest)!=="" || timeErr(time)!=="" || occasionErr(occasion)!=="" ){
            return true
        }
        return false
      }


  return (

    <>


        <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
        <h3>Reserve yor seats!</h3>
            <div className='form-list'>
                <div className='input-main'>
                    <div>
                        <label className='input-label' htmlFor="date">Date</label>
                        <input type="date" id='date' value={dates} min={today} onChange={dateHandler} required/>
                    </div>
                    <label className='error-message' data-testid="date-error">{ dateErr(dates) }</label>
                </div>

                <div className='input-main'>
                    <div>
                        <label className='input-label' htmlFor="time">Time</label>
                        <select id="time" data-testid="select" value={time}  onChange={timeHandler} required>
                        {/* <option hidden value="">Time</option> */}
                            {
                                availableTimes?.map((Times)=>
                                <option data-testid="time-option" value={Times} key={Times}>{Times}</option>
                                )
                            }
                        </select>
                    </div>
                    <label className='error-message' data-testid="time-error">{ timeErr(time) }</label>
                </div>
            </div>
            <div className='form-list'>
                <div className='input-main'>
                    <div>
                        <label className='input-label' htmlFor="guests">Number of guests</label>
                        <input type="number" min={1}  max={10} value={guest} id="guests" onChange={guestHandler} required/>
                    </div>
                    <label className='error-message' data-testid="guest-error">{ guestErr(guest) }</label>
                </div>

                <div className='input-main'>
                    <div>
                        <label className='input-label' htmlFor="occasion">Occasion</label>
                        <select onChange={occasionHandler} id='occasion' required value={occasion}>
                            {/* <option hidden value="">Occasion</option> */}
                            {occasionList?.map((items)=>
                            <option data-testid="occasion-option" value={items} key={items} >{items}</option>
                            )}
                        </select>
                    </div>
                    <label className='error-message' data-testid="guest-occastion">{ occasionErr(occasion) }</label>
                </div>
                {/* <div className="radio">
                    <div>
                        <label>Indoor</label>
                        <input type="radio" name='dinners' onChange={}/>
                    </div>
                    <div>
                        <label>Outdoor</label>
                        <input type="radio" name='dinners' />
                    </div>
                </div> */}
            </div>
            <div className='form-list'>
                <div className='input-main'>
                    <label className='input-label' htmlFor="comments">comments...</label>
                    <textarea id='comments' placeholder='Optional...' minLength={25} maxLength={100}></textarea>
                </div>
            </div>
            {/* <div className='info'>
                <h2>*Please fill out your personal Information</h2>
            </div>
            <div className='form-list'>
                <div>
                    <label>Frist Name</label>
                    <input type='text'
                    onChange={FnameHandler}
                    required
                    />
                    {FnameErr?<span>Invalid</span>:null}
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text'
                    onChange={LnameHandler}
                    required
                    />
                    {LnameErr?<span>Invalid</span>:null}
                </div>
            </div>
            <div className='form-list'>
                <div>
                <label>Email</label>
                <input type='email' required/>
                </div>
                <div>
                <label>Phone Number</label>
                <input type='number' />
                </div>
            </div> */}
            <div className='submit-button-container'>
                <button type='submit' className='submit-button' disabled={isDisabled(dates,guest)} aria-label="On Click">Make Your reservation</button>
            {/* <button type='submit' className='submit-button'>Submit</button> */}
            </div>
        </form>
    </div>
    </>

  );
}

export default BookingForm;
