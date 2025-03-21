import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import MyLogoGroup from '../components/MyLogoGroup'; // Імпортуємо компонент Logo
import { ReactComponent as Group14 } from '../components/image/quest/questy/Group14.svg';

function Header() {
  // Стан для показу контактної інформації
  const [showContacts, setShowContacts] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Функція для обробки натискання на пункт меню
  const handleContactClick = (e) => {
    e.preventDefault(); // Запобігаємо стандартному переходу за посиланням
    setShowContacts(!showContacts); // Перемикаємо стан для показу/сховування контактної інформації
    // For navigation, use navigate instead of history
    navigate("/contacts");  // You can change the path to any page you want
  };

  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          <a href="/" aria-label="Go to homepage">
            <MyLogoGroup />
          </a>
        </div>

        {/* Меню */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#quests" className="hover:text-orange-500">КВЕСТИ</a></li>
            <li><a href="#novachkam" className="hover:text-orange-500">НОВАЧКАМ</a></li>
            <li><a href="#vidguki" className="hover:text-orange-500">ВІДГУКИ</a></li>
            <li><a href="#aktsii" className="hover:text-orange-500">АКЦІЇ</a></li>
            {/* Обробка натискання на Контакти */}
            <li><a href="#kontakty" onClick={handleContactClick} className="hover:text-orange-500">КОНТАКТИ</a></li>
          </ul>
        </nav>

        {/* Контактний номер */}
        <div className="text-lg">
          <a href="tel:+88003335599" className="hover:text-orange-500">
            8 (800) 333-55-99
          </a>
        </div>
      </div>

      {/* Виведення контактної інформації та карти */}
      {showContacts && (
        <div className="mt-6 p-4 bg-E5E5E5 text-white flex flex-wrap">
          {/* Лівий блок для контактної інформації */}
          <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
          <p>Квести у Вашому місці</p>
          <h2 className="text-2xl font-bold mb-4">Контакти</h2>
          <Group14 className="mb-4" /> {/* Додаємо SVG-графіку */}
          <p>Адрес</p> {/* Додаємо відступ нижче */}
          <p className="mb-4">Львів,</p>
          <p>Графік роботи</p>
          <p className="mb-4">Щоденно, с 9:00 до 20:00</p>
          <p>Телефон: <a href="tel:+88003335599" className="hover:text-orange-500">8 (800) 333-55-99</a></p>
          <p>Email: <a href="mailto:info@escape-room.com" className="hover:text-orange-500">info@escape-room.com</a></p>
          </div>


          {/* Правий блок для карти */}
          <div className="w-full md:w-1/2 pl-4 mt-6"> {/* Додаємо mt-6 для відступу */}
            <div className="w-full h-64 bg-gray-600 mb-6">
              {/* Вставляємо карту з точкою Львова */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7094609737823!2d24.029697716429658!3d49.8397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addf053f4a409%3A0x90d2f160e9e72f2!2z0JzQsNGG0LzQtdGA!5e0!3m2!1sen!2sua!4v1617153035200!5m2!1sen!2sua" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: '0' }} 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
