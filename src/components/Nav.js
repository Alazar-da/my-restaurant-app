import Logo from '../icons_assets/Logo.svg';
import Hamburgermenu from '../icons_assets/🦆 icon _hamburger menu_.svg';
import '../styles/style.css';
import { Outlet, Link } from "react-router-dom";
function Nav() {
    const collapse=()=>{
        document.querySelector('#menu').classList.toggle('hide');
       }
    return(
        <>
        <nav className='nav'>
            <div className="brand">
                <div><img src={Logo} alt='brand Logo' /></div>
                <div><button className='hidden' onClick={collapse}><img src={Hamburgermenu} /></button></div>

            </div>
            <div className='hide' id='menu'>
                <ul className='menu'>
                    <li className='menu-list' ><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Menu</Link></li>
                    <li><Link to='/Booking'>Reservations</Link></li>
                    <li><Link to='/'>Order online</Link></li>
                    <li><Link to='/'>Log in</Link></li>
                </ul>
            </div>

        </nav>
         <Outlet />
         </>

    );
}

export default Nav;