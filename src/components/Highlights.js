import '../styles/style.css';
import Greek from '../icons_assets/greek salad.jpg';
import Lemon from '../icons_assets/lemon dessert.jpg';
import Bruchetta from '../icons_assets/bruchetta.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';



function Highlights(props){
    const special=
    [
     {name:'Greek salad',
      price:'$12.99',
      image: Greek,
      description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
     },
     {name:'Bruchetta',
      price:'$5.99',
      image: Bruchetta,
      description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
     },
     {name:'Lemon Desert',
      price:'$5',
      image: Lemon,
      description:'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. '
     }
    ];
    return(
        <section className="higlight-main">
            <article className='higlight-container'>
                <div className='higlight-header'>
                    <div>
                        <h2 className='special'>This week special!</h2>
                    </div>
                    <div className='higlight-button-div'>
                        <button className='higlight-button'>Order online</button>
                    </div>
                </div>
            </article>
           <article className="higlight">
           {special.map((special)=>
               <div className='highlight-list'>
                    <img className='highlight-img' src={special.image} alt='special images'/>
                    <div className='highlight-desc'>
                        <h2>{special.name}</h2>
                        <h4>{special.price}</h4>
                        <p>{special.description}</p>
                        <div><h5>Order a delivery</h5><i><FontAwesomeIcon icon={faMotorcycle} /></i></div>
                    </div>
                </div>)}
            </article>
        </section>
    );
}
export default Highlights;