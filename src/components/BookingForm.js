
import '../styles/style.css';
 import { useState } from 'react';



const BookingForm=({availableTimes,guest,date,occasion})=> {

    


  const guestHandler =(e)=>
    {
        let guests=e.target.value;
        guest(guests);
        /* if(name.length < 4){
            setFnameErr(true);
        }
        else{
            setFnameErr(false);
        } */
    }

    const dateHandler =(e)=>
    {
        const newDate= e.target.value;
        /* if(name.length < 4){
            setFnameErr(true);
        }
        else{
            setFnameErr(false);
        } */
    date(newDate);
    }

    const occasionHandler =(e)=>
    {
        let occasions=e.target.value;
    occasion(occasions);
    }
    /* const timeHandler =(e)=>
    {
        let time=e.target.value;
    props.time(time);
    } */

    const handleSubmit= (event)=> {

        /* if(date.length<4 || Lname.length<4){
            alert("invalid Data")
        }
        else{
            alert("all good")
        } */
        event.preventDefault()


      }

  return (

    <>


        <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
        <h3>Reserve yor seats!</h3>
            <div className='form-list'>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' onChange={dateHandler} required/>
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <select id="time" /* onChange={timeHandler} */>
                        {
                            availableTimes?.map((Times)=>
                            <option>{Times}</option>
                            )
                        }
                    </select>
                </div>
            </div>
            <div className='form-list'>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={guestHandler} required/>
                </div>
                <div>
                    <label htmlFor="occation">Occation</label>
                    <select required onChange={occasionHandler} id='occation'>
                        <option value={''}>Occasion</option>
                        <option value={'Birthday'}>Birthday</option>
                        <option value={'Engagement'}>Engagement</option>
                        <option value={'Anniversary'}>Anniversary</option>
                    </select>
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
                <div>
                    <label htmlFor="comments">comments...</label>
                    <textarea id='comments'></textarea>
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
                <input type='submit' className='submit-button' value="Make Your reservation" />
            {/* <button type='submit' className='submit-button'>Submit</button> */}
            </div>
        </form>
    </div>
    </>

  );
}

export default BookingForm;
