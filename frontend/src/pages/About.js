import React from 'react';
import Card from '../components/Card';
import img1 from '../images/Govind.jpg';
import img2 from '../images/Tushar.jpg';
import img3 from '../images/Rishabh.jpg';
import img4 from '../images/Piyush.jpg';
function About() {
    const cardData = [
        {
            imgSrc: img1,
            name: 'Govind Ladha',
            scholarNo: '20U03010',
        },
        {
            imgSrc: img2,
            name: 'Tushar Nagpure',
            scholarNo: '20U03040',
        },
        {
            imgSrc: img3,
            name: 'Rishabh Soni',
            scholarNo: '20U03004',
        },
        {
            imgSrc: img4,
            name: 'Piyush Raj',
            scholarNo: '20U03029',
        }
    ]
    return (
        <div className='row'>
            {cardData.map((card,index)=>(
                <div className='col-md-6' key={index}>
                    <Card {...card} />
                </div>
            ))}
        </div>
    );
}

export default About;
