import React, { useState } from 'react';
import fakeData from '../../fake-data/fakeData'
import './ProfilePic.css';

const ProfilePic = () => {
    
    let [pic, setPic] = useState(fakeData[0]);
    


    return (
        <div>
            {
                <img className="photo" src={pic.proPic} alt=""/>
            }
        </div>
    );
};

export default ProfilePic;