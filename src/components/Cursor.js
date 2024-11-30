import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Cursor = () => {


const {contextSafe} =  useGSAP();



const mouseMov = contextSafe((e)=>{

    console.log(e);

    gsap.to("#cursor",{

        x: e.clientX,
        y: e.clientY,
        duration:1

    },)

})
const mouseMv = contextSafe((e)=>{

    console.log(e);

    document.getElementById("cursor").innerHTML = "view";

    gsap.to("#cursor",{
        scale:2,
        x: e.clientX,
        y: e.clientY,
        opacity:.6,
        duration:1

    },)

})
const mouseLev = contextSafe((e)=>{

    document.getElementById("cursor").innerHTML = "";

    console.log(e);

    gsap.to("#cursor",{
        scale:1,
        x: e.clientX,
        y: e.clientY,
        opacity:1,
        duration:1
        

    },)

})


  return (

    <div>
      

       
       <div id='cursor'  className=' w-10 h-10 bg-white rounded-full fixed z-[9] flex justify-center items-center'>  </div>

        <div id="main"  onMouseMove={mouseMov} className='w-full h-screen bg-black flex justify-center items-center '>

                <div id="image" className='h-[30vw] w-[60vw] bg-red-800  bg-cover relative ' onMouseMove={mouseMv} onMouseLeave={mouseLev}>
                    <div id='overlay' className=' h-[100%] w-[100%] bg-transparent absolute z-[10]' ></div> 
                    <img src="https://images.pexels.com/photos/2021437/pexels-photo-2021437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='h-[100%] w-[100%] '/>
                </div>

        </div>

    </div>
  )
}

export default Cursor
