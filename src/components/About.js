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
            <p>Little Lemon restaurant is a casual and laid-back restaurant located in the heart of Chicago.
                 The restaurant specializes in gourmet burgers made with fresh, locally sourced ingredients. The restaurant’s interior is decorated with vintage posters and memorabilia,
                 creating a fun and nostalgic atmosphere. The restaurant is open for lunch and dinner, and the prices are reasonable. </p>
        </div>
        <div className="about-img">
            <img className="about-imgs" src={Adrian_a} alt='about 1'/>
            <img className="about-imgs" src={Adrian_b} alt='about 2'/>

        </div>

    </div>
        </div>
    );
}

export default About;