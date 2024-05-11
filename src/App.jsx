import React from 'react'
import Header from './components/custom/Header'
import SideNav from './components/custom/SideNav'

const App = () => {
  return (
    <div>
      <Header/>
      <div className='w-64 fixed'>
        <SideNav selectedIndex={()=> console.log(value)} />
      </div>
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
        <div className='md:col-span-2 bg-green-200'>control panel</div>
        <div className='md:col-span-3 bg-red-100'>icon preview</div>
        <div className='bg-blue-100'>ads banner</div>
      </div>
    </div>
  )
}

export default App