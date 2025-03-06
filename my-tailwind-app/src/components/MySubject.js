import React from 'react';
// Імпортуємо зображення
import Crypt from '../components/image/subject/crypt.jpg';  
import Maniac from '../components/image/subject/maniac.jpg';  
import Ritual from '../components/image/subject/ritual.jpg';  
import Mars from '../components/image/subject/mars.jpg';  
import Sercet from '../components/image/subject/sercet.jpg';  
import Hut from '../components/image/subject/hut.jpg';  
import Fatal from '../components/image/subject/fatal.jpg';  
import Underground from '../components/image/subject/underground.jpg';  
import Oldserdak from '../components/image/subject/oldserdak.jpg';  

const MySubject = () => {
  return (
    <div className="flex justify-start space-x-6 ml-4">
      {/* Кожен блок з іконкою та зображенням */}
      <div className="flex items-center space-x-2">
        <img src={Crypt} alt="Crypt" />
      </div>
      
      <div className="flex items-center space-x-2">
        <img src={Maniac} alt="Maniac" />
      </div>
      
      <div className="flex items-center space-x-2">
        <img src={Ritual} alt="Ritual" />
      </div>
      
      <div className="flex items-center space-x-2">
        <img src={Mars} alt="Mars" />
      </div>
      
      <div className="flex items-center space-x-2">
        <img src={Sercet} alt="Sercet" />
      </div>
      
      <div className="flex items-center space-x-2">
        <img src={Hut} alt="Hut" />
      </div>

      <div className="flex items-center space-x-2">
        <img src={Fatal} alt="Fatal" />
      </div>

      <div className="flex items-center space-x-2">
        <img src={Underground} alt="Underground" />
      </div>

      <div className="flex items-center space-x-2">
        <img src={Oldserdak} alt="Oldserdak" />
      </div>
    </div>
  );
};

export default MySubject;
