import React from 'react'

const RadioButton = () => {
  return (
    <nav className='radio-toggles' style=''>
      <input type='radio' id='option-1' name='radio-options' />
      <label htmlFor='option-1'>ENGLISH</label>
      <input type='radio' id='option-2' name='radio-options' checked />
      <label htmlFor='option-2'>SPANISH</label>
      <div className='radio-toggles__slider'></div>
    </nav>
  )
}

export default RadioButton
