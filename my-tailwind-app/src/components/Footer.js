import React from 'react';
import { ReactComponent as Skype } from './image/footer/skype.svg';  // імпортуємо SVG як компонент
import { ReactComponent as VK } from './image/footer/vkdefault.svg';  // імпортуємо SVG як компонент

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-transparent p-4 z-50">
      {/* Футер з прозорим фоном */}
      <div className="flex items-center justify-start space-x-1">
        {/* Зображення ліворуч */}
        <Skype className="w-8 h-8 cursor-pointer hover:text-blue-500 mt-3" /> {/* Зміщуємо Skype трохи вниз */}
        <VK className="w-8 h-8 cursor-pointer hover:text-blue-500 mt-2" />
      </div>
    </footer>
  );
};

export default Footer;
