import React from 'react';
import Header from './components/Header'; 
import MyImageQuest from './components/MyImageQuest';
import Footer from './components/Footer';  // Імпортуємо Footer

function App() {
  return (
    <div className="min-h-screen flex flex-col relative"> {/* Використовуємо relative для правильного позиціонування футера */}
      <Header />
      
      {/* Блок для вибору квестів */}
      <div className="p-8 flex text-white w-full">
        <p className="hover:text-orange-500">Квести у Вашому місці</p>
      </div>

      <div className="p-8 w-full">
        {/* Заголовок тематики */}
        <h1 className="text-white text-5xl font-bold">Оберіть тематику</h1> {/* Заголовок */}
      </div>
              
      {/* Використовуємо space-x- для додавання відступів між елементами */}
      <div className="p-6 text-white space-x-2">
        <MyImageQuest />
      </div>


      {/*  футер */}
      <Footer /> 
    </div>
  );
}

export default App;
