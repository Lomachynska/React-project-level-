import React, { useState } from 'react';
// Імпортуємо кожне зображення для категорій (SVG)
import { ReactComponent as Allquest } from '../components/image/quest/001-allquest.svg';  
import { ReactComponent as Adventures } from '../components/image/quest/002-adventures.svg';  
import { ReactComponent as Horror } from '../components/image/quest/003-horror.svg';  
import { ReactComponent as Mysticism } from '../components/image/quest/004-mysticism.svg';  
import { ReactComponent as Detective } from '../components/image/quest/005-detective.svg';  
import { ReactComponent as SciFi } from '../components/image/quest/006-sciFi.svg';  
import { ReactComponent as Vertical } from '../components/image/vertical.svg';

// Імпортуємо зображення для кожної категорії (JPG)
import Crypt from '../components/image/subject/crypt.jpg';  
import Maniac from '../components/image/subject/maniac.jpg';  
import Ritual from '../components/image/subject/ritual.jpg';  
import Mars from '../components/image/subject/mars.jpg';  
import Sercet from '../components/image/subject/sercet.jpg';  
import Hut from '../components/image/subject/hut.jpg';  
import Fatal from '../components/image/subject/fatal.jpg';  
import Underground from '../components/image/subject/underground.jpg';  
import Oldserdak from '../components/image/subject/oldserdak.jpg';  

// Об'єкт, що містить зображення для кожної категорії
const categoryImages = {
  allquests: [Crypt, Maniac, Ritual, Mars, Sercet, Hut, Fatal, Underground, Oldserdak], // Всі зображення
  adventures: [Crypt, Maniac], // Тільки "Пригоди"
  horror: [Ritual, Fatal], // Тільки "Жахи"
  mysticism: [Sercet, Hut], // Тільки "Містика"
  detective: [Underground, Oldserdak], // Тільки "Детектив"
  scifi: [Mars], // Тільки "Sci-Fi"
};

const MyImageQuest = () => {
  // Стан активної категорії (яка категорія вибрана)
  const [activeCategory, setActiveCategory] = useState('allquests');

  // Функція зміни категорії при натисканні на кнопку
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Кнопки для вибору категорії */}
      <div className="flex justify-center space-x-6 ml-4">
        <a
          href="#allquests"
          onClick={() => handleCategoryChange('allquests')}
          className="flex items-center space-x-2 mb-4"
        >
          <Allquest />
          <p className="hover:underline hover:text-orange-500">Усі квести</p>
          <Vertical />
        </a>

        <a
          href="#adventures"
          onClick={() => handleCategoryChange('adventures')}
          className="flex items-center space-x-2 mb-4"
        >
          <Adventures />
          <p className="hover:underline hover:text-orange-500">Пригоди</p>
          <Vertical />
        </a>

        <a
          href="#horror"
          onClick={() => handleCategoryChange('horror')}
          className="flex items-center space-x-2 mb-4"
        >
          <Horror />
          <p className="hover:underline hover:text-orange-500">Жахи</p>
          <Vertical />
        </a>

        <a
          href="#mysticism"
          onClick={() => handleCategoryChange('mysticism')}
          className="flex items-center space-x-2 mb-4"
        >
          <Mysticism />
          <p className="hover:underline hover:text-orange-500">Містика</p>
          <Vertical />
        </a>

        <a
          href="#detective"
          onClick={() => handleCategoryChange('detective')}
          className="flex items-center space-x-2 mb-4"
        >
          <Detective />
          <p className="hover:underline hover:text-orange-500">Детектив</p>
          <Vertical />
        </a>

        <a
          href="#scifi"
          onClick={() => handleCategoryChange('scifi')}
          className="flex items-center space-x-2 mb-4"
        >
          <SciFi />
          <p className="hover:underline hover:text-orange-500">Sci-Fi</p>
          <Vertical />
        </a>
      </div>

      {/* Виведення зображень для вибраної категорії */}
      <div className="flex flex-wrap justify-center items-center gap-6 mx-auto">
        {categoryImages[activeCategory]?.map((image, index) => (
          <div key={index} className="flex items-center justify-center max-w-xs">
            <img
              src={image}
              alt={`Category image ${index}`}
              className="w-full h-auto rounded-lg shadow-lg"
              style={{ maxWidth: '344px', maxHeight: '232px' }} //  ширина і висота обраного зображення
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyImageQuest;
