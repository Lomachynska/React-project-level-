import React from 'react';
// Імпортуємо кожне зображення з назвами
import { ReactComponent as Allquest } from '../components/image/quest/001-allquest.svg';  
import { ReactComponent as Adventures } from '../components/image/quest/002-adventures.svg';  
import { ReactComponent as Horror } from '../components/image/quest/003-horror.svg';  
import { ReactComponent as Mysticism } from '../components/image/quest/004-mysticism.svg';  
import { ReactComponent as Detective } from '../components/image/quest/005-detective.svg';  
import { ReactComponent as SciFi } from '../components/image/quest/006-sciFi.svg';  
import { ReactComponent as Vertical } from '../components/image/vertical.svg';

const MyImageQuest = () => {
  return (
    <div className="flex justify-center space-x-6 ml-4"> {/* Відступ зліва */}
      {/* Кожен блок з іконкою і підписом поряд */}
      <div className="flex items-center space-x-2"> {/* Це все в одну лінію */}
        <Allquest /> 
        <p>Усі квести</p>
        <Vertical />
      </div>
      
      <div className="flex items-center space-x-2">
        <Adventures />
        <p className="">Пригоди</p>
        <Vertical />
      </div>
      
      <div className="flex items-center space-x-2">
        <Horror />
        <p>Жахи</p>
        <Vertical />
      </div>
      
      <div className="flex items-center space-x-2">
        <Mysticism />
        <p>Містика</p>
        <Vertical />
      </div>
      
      <div className="flex items-center space-x-2">
        <Detective />
        <p>Детектив</p>
        <Vertical />
      </div>
      
      <div className="flex items-center space-x-2">
        <SciFi />
        <p>Sci-Fi</p>
        <Vertical />
      </div>
    </div>
  );
};

export default MyImageQuest;
