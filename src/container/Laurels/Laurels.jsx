import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="laurels-awards-card">
        <img src={imgUrl} alt="awards" />
        <div className="laurels-awards-card-content">
            <p className="p-cormorant" style={{ color: '#DCCA87' }}>{title}</p>
            <p className="p-opensans">{subtitle}</p>
        </div>
    </div>
);

const Laurels = () => (
    <div className="bg wrapper section-padding" id="awards">
        <div className="wrapper_info">
            <SubHeading title="Awards & recognition" />
            <h1 className="headtext-cormorant">Our Laurels</h1>

            <div className="laurels-awards">
                {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
            </div>
        </div>

        <div className="wrapper-img">
            <img src={images.laurels} alt="laurels" />
        </div>
    </div>
);

export default Laurels;