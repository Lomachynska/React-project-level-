import React from 'react';
// Імпортуємо кожне зображення з назвами
import { ReactComponent as Allquest } from '../components/image/quest/001-allquest.svg';  
import { ReactComponent as Adventures } from '../components/image/quest/002-adventures.svg';  
import { ReactComponent as Horror } from '../components/image/quest/003-horror.svg';  
import { ReactComponent as Mysticism } from '../components/image/quest/004-mysticism.svg';  
import { ReactComponent as Detective } from '../components/image/quest/005-detective.svg';  
import { ReactComponent as SciFi } from '../components/image/quest/006-sciFi.svg';  

// Створюємо компонент, який відображатиме ці зображення
const MyImageQuest = () => {
  return (
    <div>
      {/* Виводимо кожне зображення */}
      <Allquest />
      <Adventures />
      <Horror />
      <Mysticism />
      <Detective />
      <SciFi />
    </div>
  );
};

export default MyImageQuest;
