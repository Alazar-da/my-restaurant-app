import '../styles/style.css';
import Customer1 from '../icons_assets/customer 1.jpg';
import Customer2 from '../icons_assets/customer 2.jpg';
import Customer3 from '../icons_assets/customer 3.jpg';
import Customer4 from '../icons_assets/customer 4.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Testimonials(){
     const testimonials=[
        {
            name:'Mike William',
            rating:5,
            image:Customer1,
            Comment:"“The food was delicious and the service was impeccable. I would definitely recommend this restaurant to anyone looking for a great dining experience.”"
        },
        {
            name:'Jhon Smith',
            rating:4,
            image:Customer2,
            Comment:"“This restaurant is a hidden gem. The food is fantastic and the prices are very reasonable. I highly recommend giving it a try.”"
        },
        {
            name:'Hellen Night',
            rating:5,
            image:Customer3,
            Comment:"“I had a wonderful time at this restaurant. The staff was friendly and attentive, and the food was absolutely amazing. I can’t wait to go back!”"
        },
        {
            name:'Gabreal Sole',
            rating:5,
            image:Customer4,
            Comment:"“I was blown away by the quality of the food and the attention to detail in the presentation. The atmosphere was also very cozy and inviting.”"
        }
     ];
     const getStarRating = stars => {
        let rating = [];
        let i=0;
        while (i < stars) {
            rating.push(<li>
                { <FontAwesomeIcon icon={faStar}/> }
            </li>
                );
          i++;
        }
        return rating;
      };
    return(
        <div className='testimonial-container'>
            <h2 className="text-center">Testimonials</h2>
        <div className="testimonials">
        {
                    testimonials.map((testimonials)=>
                    <div className="testimonials-list">
                <ul>{getStarRating(testimonials.rating)
                    }
                    </ul>
                <span>
                    <img src={testimonials.image} alt='Customer Image' />
                    <h6>{testimonials.name}</h6>
                </span>
                <p>{testimonials.Comment}</p>
            </div>
                    )
                }

        </div>
        </div>
    );
}
export default Testimonials;