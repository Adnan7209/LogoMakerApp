import React, { useState } from 'react'
import Header from './components/custom/Header'
import SideNav from './components/custom/SideNav'
import IconController from './components/custom/IconController'
import BackgroundController from './components/custom/BackgroundController'

const App = () => {
  const [activeIndex,setActiveIndex] = useState(0);
  return (
    <div>
      <Header/>
      <div className='w-64 fixed'>
        <SideNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6 fixed'>
        <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
          {activeIndex==0?<IconController/>:<BackgroundController/>}
          
        </div>
        <div className='md:col-span-3 bg-red-100'>icon preview</div>
        <div className='bg-blue-100'>ads banner</div>
      </div>
    </div>
  )
}

export default App