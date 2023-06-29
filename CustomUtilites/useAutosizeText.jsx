import {useState,useLayoutEffect, useRef} from "react";

const useAutoSizeText=()=>{
const[tasks,setTasks]=useState()
let descriptionRef=useRef(null)
useLayoutEffect(()=>{
 
    if(descriptionRef.current){
        console.log(descriptionRef.current.style.height)
       descriptionRef.current.style.height="19px"
        const scrollH=descriptionRef.current.scrollHeight;
        descriptionRef.current.style.height=scrollH+"px"     
        console.log(descriptionRef.current.style.height)
    }
    else{
        console.log("No joy")
    }
     return()=>{
          
        console.log('cleanedUp')
        descriptionRef=null
          
     }
},[tempHolder])
    return{descriptionRef}

}

export default useAutoSizeText