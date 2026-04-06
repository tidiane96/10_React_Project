import React from 'react'
import play from '../assets/play-button.svg'
import reset from '../assets/reset.svg'
import pause from '../assets/pause.svg'
import { startChrono , resetChrono } from '../features/chrono'
import { useDispatch , useSelector } from 'react-redux'

export default function ToggleButton() {
  const dispatch = useDispatch();
  const chronoValue = useSelector(state => state.chrono) 
  function toggleChrono(){
    if(!chronoValue.isPlaying) {
        dispatch(startChrono())
    }
    else {
        dispatch(resetChrono())
    }
  }

  return (
    <button 
    onClick={toggleChrono}
    className='px-4 py-2 text-slate-800 flex
    justify-center mx-auto bg-slate-300 rounded hover:bg-slate-200'>
        <span className='mr-3 text-lg'>{chronoValue.isPlaying ? 'Reset' : 'Start'}</span>
        <img className='w-5' src={chronoValue.isPlaying ? reset : play} alt="" />
    </button>
  )
}
