import React from 'react';
import { ReactComponent as LogoGroup } from '../components/image/logo-group.svg';  

const MyOthersGroup = () => {
  return (
    
    <div className='flex items-center space-x-2'>
      <LogoGroup />
      <div className='flex items-center w-[100px] '>
      <LogoGroup />
    </div>
    </div>
    
  );
};

export default MyOthersGroup;
