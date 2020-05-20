import React from 'react'
import {Image} from 'react-bootstrap';
import oil from '../images/oil.jpg';

function ProfileIcon() {
    return (
        <div>
            <Image src={oil} alt="Profile Image" style={{width:'55%',borderRadius:'50%'}}/>
        </div>
    )
}

export default ProfileIcon
