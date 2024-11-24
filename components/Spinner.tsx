import { Loader2 } from 'lucide-react';
import React from 'react';

const Spinner = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
   <div className='p-32 md:p-52'>
   <img src="/loader.gif" alt="loading..." />
   </div>
    </div>
    </>
  );
};

export default Spinner;
