import '../styles/style.css';
import Logo from '../icons_assets/Logo.svg';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <footer className='footer'>
        <div>
             <div>
                 <img className='footer-logo' src={Logo} />
             </div>
             <div className='navigation'>
                 <h5>Navigation</h5>
                 <ul>
                     <li><a>Home</a></li>
                     <li><a>About</a></li>
                     <li><a>menu</a></li>
                     <li><a>Reservations</a></li>
                     <li><a>Order Online</a></li>
                     <li><a>Login</a></li>
                 </ul>
             </div>
             <div className='contact'>
                 <h5>Contact</h5>
                 <ul>
                     <li><a>Illino,Chicago</a></li>
                     <li><a>555-127</a></li>
                     <li><a>Littlelemon@gmail.com</a></li>
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
        </div>
     </footer>


    );
}
export default Footer;