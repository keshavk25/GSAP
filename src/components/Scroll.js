import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/all";



gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {

 
    useGSAP(()=>{

gsap.from("#box1 div",{
    scale:0,
    delay: 1,
    duration: 1,
    rotate:360,
})
gsap.to("#box h2",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#box",
        scroller: "body",
        markers : true,
        start:"top 0%",
        end:"top -150%",
        scrub:5,
        pin: true
    }
})


//     gsap.from("#box h1",{
//         opacity:0,
//         duration: 2,
//         x:1500,

//     scrollTrigger:{
//         trigger: '#box h1',
//         scrollar:"body ",
//         markers:true,
//         start:"top 60%",
//         end: "top 20%",
//         scrub: true,
//         pin: true

    
//     }
// })

//     gsap.from("#box h2",{
//         opacity:0,
//         duration: 2,
//         x:-500,

//     scrollTrigger:{
//         trigger: '#box h2',
//         scrollar:"body ",
//         markers:true,
//         start:"top 70%",
//         end: "top 30%",
//         scrub: true,

    
//     }

//     })


},)

return (
<div className='overflow-x-hidden'>

<div id='box1' className=' h-screen screen bg-gray-700 flex justify-center items-center overflow-hidden'>
{/* <h2 id='h' className='font-bold text-[500px] text-yellow-400'>Keshav</h2> */}
<div className="h-40 w-40 bg-red-800">

</div>
</div>



<div id='box' className='box h-[100%] w-[100%] bg-red-600 pb-10'>
<h2 id='h' className='font-bold text-[40vw] text-yellow-400 uppercase mb-10'>Keshav</h2> 
{/* <div className="h-40 w-40 bg-gray-800">  </div> */}
</div>



<div id='box' className='box h-[100%] w-[100%] bg-slate-800 flex justify-center items-center flex-col gap-20'>

<h1 id='h' className='font-bold  bg-orange-600 text-[100px] text-yellow-400 px-10'>Keshav</h1>
<h2 id='h' className='font-bold bg-amber-300 text-[100px] text-red-400 px-10'>Kumar</h2> 
<div className="h-40 w-40 bg-red-800"></div>
</div>


</div>
)
}

    


export default Scroll
