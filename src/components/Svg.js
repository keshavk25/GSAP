import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Svg = () => {

let finalPath = "M 20 100 Q 690 100 1380 100";
let setPath = "M 20 100 Q 690 100 1380 100";

const mouse = useRef();

const {contextSafe} = useGSAP({scope: mouse});


const mouseMov = contextSafe( (e)=>{
    // console.log(e.clientX);
    setPath = `M 20 100 Q ${e.clientX-40} ${e.clientY-80} 1380 100`
        gsap.to("svg path",{
          attr: {d: setPath},
          duration: 0.3,
          ease: "power3.out "
        } )
})
const mouseLeav = contextSafe( (e)=>{
        gsap.to("svg path",{
          attr: {d: finalPath},
          duration: 1.5,
          ease: "elastic.out(1,0.5) "
        } )
})


  return (
    <div id='box' ref={mouse} className='w-full h-screen bg-black  pt-5 pl-10'>


     <svg width="1400" height={400} className='bg-black-600 pt-10' onMouseMove={mouseMov} onMouseLeave={mouseLeav}>
        <path d="M 10 200 Q 690 200 1390 200" stroke="white" fill="transparent"/>
     </svg>


    </div>
  )
}

export default Svg
