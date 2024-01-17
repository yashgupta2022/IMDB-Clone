'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'  
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
export default function DarkModeSwitch() {
    const { theme, setTheme ,systenTheme} = useTheme()
    const currentTheme = theme==='system' ? systenTheme : theme ;
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    
  return (
    <div>
        {mounted && (currentTheme === 'dark' ?( <MdLightMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500 ' />) : (
        <MdDarkMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500' />)
        )}
    </div>
  )
}
