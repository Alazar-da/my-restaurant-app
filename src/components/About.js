import '../styles/style.css';
import Adrian_a from '../icons_assets/Mario and Adrian A.jpg';
import Adrian_b from '../icons_assets/Mario and Adrian b.jpg';

function About(){
    return(
        <div>
            <h2 className="text-center">About</h2>
            <div className="about-main">

        <div className="about-description">
            <h3>Little Lemon</h3>
            <h5>Chicago</h5>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className="about-img">
            <img className="about-imgs" src={Adrian_a}/>
            <img className="about-imgs" src={Adrian_b} />

        </div>

    </div>
        </div>
    );
}

export default About;