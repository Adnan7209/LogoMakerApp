import { Smile } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Slider } from '../ui/slider'
import ColorPickerController from './ColorPickerController';

const IconController = () => {
    const [size,setSize] = useState(150);
    const [rotate,setRotate] = useState(0);
    const [color, setColor] = useState('rgba(255,255,255,1)');

    const storageValue = JSON.parse(localStorage.getItem('value'));

    useEffect(()=>{
        const  updatedValue = {
            ...storageValue,
            iconsSize:size,
            iconRotate:rotate,
            iconColor:color,
            icon:'Smile'
        }
        localStorage.setItem('value',JSON.stringify(updatedValue));

    },[size,rotate,color])
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
            <div className='p-2'>
                <label className='p-2 flex justify-between items-center'>Color</label>
                <ColorPickerController color={color} setColor={setColor}/>
                
            </div>
        </div>
    </div>
  )
}

export default IconController