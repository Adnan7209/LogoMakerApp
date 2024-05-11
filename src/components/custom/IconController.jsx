import { Smile } from 'lucide-react'
import React, { useState } from 'react'
import { Slider } from '../ui/slider'

const IconController = () => {
    const [size,setSize] = useState(150);
    const [rotate,setRotate] = useState(0);
  return (
    <div>
        <div>
            <label>Icon</label>
            <div className='p-3 cursor-pointer bg-gray-200 rounded-md w-[150px] h-[150px] flex items-center justify-center my-2'>
            <Smile />
            </div>
            <div className='p-2'>
                <label className='p-2 flex justify-between items-center'>Size <span>{size}px</span></label>
                <Slider defaultValue={[150]} max={512} step={1} 
                  onValueChange={(event)=>setSize(event)}
                />
            </div>
            <div className='p-2'>
                <label className='p-2 flex justify-between items-center'>Rotate <span>{rotate}°</span></label>
                <Slider defaultValue={[0]} max={360} step={1} 
                  onValueChange={(event)=>setRotate(event)}
                />
            </div>
        </div>
    </div>
  )
}

export default IconController