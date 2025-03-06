// src/components/Header.js
import React from 'react';
import MyLogoGroup from '../components/MyLogoGroup'; // Імпортуємо компонент Logo

function Header() {
  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          {/* SVG-іконка */}
          <MyLogoGroup />
        </div>

        {/* Меню */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#quests" className="hover:text-orange-500">КВЕСТИ</a></li>
            <li><a href="#novachkam" className="hover:text-orange-500">НОВАЧКАМ</a></li>
            <li><a href="#vidguki" className="hover:text-orange-500">ВІДГУКИ</a></li>
            <li><a href="#aktsii" className="hover:text-orange-500">АКЦІЇ</a></li>
            <li><a href="#kontakty" className="hover:text-orange-500">КОНТАКТИ</a></li>
          </ul>
        </nav>

        {/* Контактний номер */}
        <div className="text-lg">
          <a href="tel:+88003335599" className="hover:text-orange-500">
            8 (800) 333-55-99
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
