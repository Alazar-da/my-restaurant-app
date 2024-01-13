import '../styles/style.css';
import Logo from '../icons_assets/Logo.svg';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className='footer'>
        <section>
             <div>
                 <img className='footer-logo' src={Logo} alt='Logo' />
             </div>
             <div className='navigation'>
                 <h5>Navigation</h5>
                 <ul>
                 <li className='menu-list' ><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Menu</Link></li>
                    <li><Link to='/Booking'>Reservations</Link></li>
                    <li><Link to='/'>Order online</Link></li>
                    <li><Link to='/'>Log in</Link></li>
                 </ul>
             </div>
             <div className='contact'>
                 <h5>Contact</h5>
                 <ul>
                     <li>Chicago, Illinois</li>
                     <li>555-127</li>
                     <li>Littlelemon@gmail.com</li>
                 </ul>
             </div>
             <div className='social-media'>
                 <h5>Social Media</h5>
                 <ul>
                      <li><FontAwesomeIcon icon={faInstagram} /></li>
                     <li><FontAwesomeIcon icon={faTwitter} /></li>
                     <li><FontAwesomeIcon icon={faEnvelope} /></li>
                     <li><FontAwesomeIcon icon={faYoutube} /></li>
                 </ul>
             </div>
        </section>
     </footer>


    );
}
export default Footer;