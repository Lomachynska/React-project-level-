import React from 'react';
// Імпортуємо кожне зображення з назвами
import { ReactComponent as SkypeDefault } from '../components/image/social/skype-default.svg';  
import { ReactComponent as SkypeHover } from '../components/image/social/skype-hover.svg';  
import { ReactComponent as VkDefault } from '../components/image/social/vk-default.svg';  
import { ReactComponent as VkHover } from '../components/image/social/vk-hover.svg';  

// Створюємо компонент, який відображатиме ці зображення
const MyImageSiocial = () => {
  return (
    <div>
      {/* Виводимо кожне зображення */}
      <SkypeDefault />
      <SkypeHover />
      <VkDefault />
      <VkHover />
    </div>
  );
};

export default MyImageSiocial;
