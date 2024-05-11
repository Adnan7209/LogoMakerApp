import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

const ColorPickerController = ({color,setColor}) => {
  
  return (
    <div>
        <ColorPicker value={color} onChange={setColor} />
    </div>
  )
}

export default ColorPickerController