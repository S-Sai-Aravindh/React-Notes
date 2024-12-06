import React from 'react';
// import Zoro from '../Assests/images/zoro.jpg';
// import Nami from '../Assests/images/nami.jpg';

import commonData from '../shared/constant/constantData';
 
const MyimagesComp = () => {
    return (
        <div>
            <hr></hr>
            <h1>Images component</h1>
            <img src={commonData.Zoro} alt="Zoro" width="400px"/>
            <img src={commonData.Nami} alt="Nami" width="200px"/>
            <img src={commonData.Luffy} alt="Nami" width="200px"/>
            <img src={commonData.Brook} alt="Nami" width="200px"/>
            <img src={commonData.Ezio} alt="Nami" width="200px"/>
            <video src={commonData.vdo} controls></video>
        </div>
    );
}

export default MyimagesComp;