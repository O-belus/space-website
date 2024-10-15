import data from "../data.json"
import { useState } from 'react'
import PropTypes from 'prop-types';

export default function Technology(props) {
    const technology = data.technology
    const [info, setInfo] = useState(technology[0])
    const firstTech = technology[0].name.toUpperCase()
    const [name, setName] = useState(firstTech)

    let techSrc = ''
    if(props.device === 'desktop'){
        techSrc = info.images.portrait
    } else{
        techSrc = info.images.landscape
    }

    function technolgyHandle(i) {
        setInfo(technology[i])
        setName(technology[i].name.toUpperCase())
        console.log(name)
    }

    return(
        <>
            <div className="font-mono relative ">
                <img className="w-[100vw] h-[100vh] -z-10"  src={props.bgSrc} alt="technology background image" />
            </div>
            <div className="flex flex-col text-white absolute inset-0 w-full top-24 lg:w-4/5 lg:mx-auto " >
                <h2 className=" font-mono text-base text-center w-full md:text-left md:pl-10"><span className=" font-bold px-3 text-slate-300   ">03</span> SPACE LAUNCH 101</h2>
                <div className=" flex  h-full w-full flex-col ">
                    <section className=" lg:flex-row-reverse lg:flex ">
                        <img className="  w-screen object-contain mb-8 mt-10 md:mt-10 md:mb-4 lg:w-[500px] lg:h-[500px] " src={techSrc} alt={`${info.name} image`} />
                        <div className=" flex flex-col lg:flex-row ">
                            <div className="  w-full flex flex-row float-start justify-center gap-4 mb-10 md:mb-4 lg:flex-col lg:gap-8 ">
                                <button className="font-mono font-bold hover:text-[#0b0d17] bg-transparent hover:bg-white w-10 h-10 rounded-full border lg:w-14 lg:h-14  " onClick={()=>technolgyHandle(0)} >1</button>
                                <button className=" font-mono font-bold hover:text-[#0b0d17] bg-transparent hover:bg-white w-10 h-10 rounded-full border lg:w-14 lg:h-14 " onClick={()=>technolgyHandle(1)} >2</button>
                                <button className=" font-mono font-bold hover:text-[#0b0d17] bg-transparent hover:bg-white w-10 h-10 rounded-full border lg:w-14 lg:h-14 " onClick={()=>technolgyHandle(2)} >3</button>
                            </div>
                            <div className=" font-mono lg:flex lg:justify-center lg:flex-col ">
                                <h3 className=" text-lg text-center text-slate-300 mb-4 lg:text-left lg:text-2xl ">THE TERMINOLOGY...</h3>
                                <h4 className=" text-xl mb-4 text-center lg:text-left lg:text-5xl ">{name}</h4>
                                <p className=" text-xs text-center w-4/5 mx-auto md:w-3/5 lg:text-left lg:mx-0 lg:w-4/5 ">{info.description}</p>
                            </div>
                        </div>
                        <div></div>
                    </section>
                       
                </div>
            </div>
            
        </>
    )
}
Technology.propTypes = {
    bgSrc: PropTypes.string.isRequired,
    device: PropTypes.string.isRequired,
};