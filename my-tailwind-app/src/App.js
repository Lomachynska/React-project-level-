// src/App.js
import React from 'react';
import Header from './components/Header';
import QuestSelection from './components/QuestSelection';
import MyImageQuest from './components/MyImageQuest'; // Імпортуємо компонент MyImageQuest
import MyImageSocial from './components/MyImageSocial'; // Імпортуємо компонент для зображень соцмереж

function App() {
  return (
    <div>
      <Header />

      {/* Блок з іконками вибору квестів */}
      <div className="p-8 flex flex-wrap">
        <div className="w-full md:w-1/3">
          <h2 className="text-white text-left">Іконки вибору квестів</h2>
          <MyImageQuest />  {/* Використовуємо компонент MyImageQuest */}
        </div>

        {/* Блок зображення квесту */}
        <div className="w-full md:w-2/3">
          <QuestSelection />  {/* Зображення Card.png компонента QuestSelection */}
        </div>
      </div>

      {/* Блок для зображення соцмереж */}
      <div className="p-8">
        <h2 className="text-white text-left">Соцсеті</h2>
        <MyImageSocial />  {/* Компонент для зображення соцмереж */}
      </div>
    </div>
  );
}

export default App;
