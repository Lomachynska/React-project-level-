import React from 'react';
import CardImage from '../components/image/Card.png';  // Імпортуємо картинку

const QuestSelection = () => {
  return (
    <div className="quest-image lg:w-1/2 flex justify-center">
      {/* Задаємо ширину картинки в px */}
      <img src={CardImage} alt="Quest Image" className="w-[400px] h-auto object-contain" />
    </div>
  );
};

export default QuestSelection;
