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
    <div className="flex justify-center space-x-6 ml-4">
      {/* Кожен блок з іконкою і підписом поряд, обгорнутий в тег <a> для переходу */}
      <a href="#allquests" className="flex items-center space-x-2 mb-4">
        <Allquest /> 
        <p className="hover:underline hover:text-orange-500">Усі квести</p>
        <Vertical />
      </a>
      
      <a href="#adventures" className="flex items-center space-x-2 mb-4">
        <Adventures />
        <p className="hover:underline hover:text-orange-500">Пригоди</p>
        <Vertical />
      </a>
      
      <a href="#horror" className="flex items-center space-x-2 mb-4">
        <Horror />
        <p className="hover:underline hover:text-orange-500">Жахи</p>
        <Vertical />
      </a>
      
      <a href="#mysticism" className="flex items-center space-x-2 mb-4">
        <Mysticism />
        <p className="hover:underline hover:text-orange-500">Містика</p>
        <Vertical />
      </a>
      
      <a href="#detective" className="flex items-center space-x-2 mb-4">
        <Detective />
        <p className="hover:underline hover:text-orange-500">Детектив</p>
        <Vertical />
      </a>
      
      <a href="#scifi" className="flex items-center space-x-2 mb-4">
        <SciFi />
        <p className="hover:underline hover:text-orange-500">Sci-Fi</p>
        <Vertical />
      </a>
    </div>
  );
};

export default MyImageQuest;
