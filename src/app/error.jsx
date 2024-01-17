"use client"
import { useEffect } from "react"
export default function error({error,reset}){
    useEffect(()=>{
        console.log(error)
    },[error])
    return (
        <div className="text-center mt-10">
            <h1>
                Something went wrong.. Please Try again
            </h1>
            <button className='hover:text-amber-500' onClick={()=>reset()}>Try Again</button>
        </div>
    )
}