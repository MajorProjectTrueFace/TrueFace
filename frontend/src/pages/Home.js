import React from 'react';
import img1 from "../images/img1.jpg";
import img3 from "../images/img2.jpg";
import './styles.css';
const Home = () => {
    
    return (
        <div>
            <div className="my-5 p-3" >
                <div className='container d-flex align-items-center justify-content-between'>
                    <div>
                        <h1>Exploring Emotions with AI !</h1>
                        <h2> Unlock Your Imagination</h2>
                    </div>
                    <div>
                        <img src={img1}
                            className='imgShow' alt='home'
                        />
                    </div>
                </div>
            </div>

            <div className="my-5 p-3">
                <div className='container d-flex align-items-center justify-content-between'>
                    <div>
                        <img src={img3}
                            className='imgShow' alt='Home'
                        />
                    </div>
                    <div>
                        <h1>Explore Facial Emotions Analysis</h1>
                        <h2>Key Highlights</h2>
                        <ul>
                            <li>Experience Facial Emotions Analysis with Approximately 80% Model Accuracy</li>
                            <li>Trained on a Dataset of Over 30K Images Covering 7 Different Emotion Categories</li>
                        </ul>
                        <a href='/emotions'>
                            <button className='my-3 btn btn-primary'>Analyse</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home