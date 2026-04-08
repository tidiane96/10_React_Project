import React from 'react'
import { useDispatch } from 'react-redux'

export default function AddRemoveColor({action,text}) {
  const dispatch = useDispatch()

  function handleClick()
  {
    if(action === 'add')
  {
    dispatch(addCollor())
  }
  else if(action === 'remove')
  {
    dispatch(removeColor())
  }
  }
  
    return (
    <button
    onClick={handleClick}
    className='mr-1 border border-slate-400 rounded min-w-[40px]' 
    >
    {text}
    </button>
  )
}
