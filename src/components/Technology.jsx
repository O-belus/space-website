import data from "../data.json"
import { useState } from 'react'

export default function Technology() {
    const technology = data.technology
    const [info, setInfo] = useState(technology[0])
    const firstTech = technology[0].name.toUpperCase()
    const [name, setName] = useState(firstTech)

    function technolgyHandle(i) {
        setInfo(technology[i])
        setName(technology[i].name.toUpperCase())
        console.log(name)
    }

    return(
        <>
            <div className="font-mono relative ">
                <img className="w-[100vw] h-[100vh] -z-10"  src="/technology/background-technology-desktop.jpg" alt="technology background image" />
            </div>
            <div className="flex flex-col text-white absolute inset-0 w-[70vw] h-2/3 top-60  ml-auto mr-auto " >
                <h2 className=" font-mono text-2xl h-10 w-full"><span className=" font-bold px-3 text-slate-300   ">03</span> SPACE LAUNCH 101</h2>
                <div className=" flex  h-full w-full ">
                    <section className=" h-full w-2/3 ">
                        <div className=" flex  h-1/2 mt-72 ">
                            <div className="  w-1/6 h-full flex float-start flex-col align-middle gap-14 ">
                                <button className="font-mono font-bold hover:text-[#0b0d17] bg-transparent hover:bg-white w-16 h-16 rounded-full ml-auto border " onClick={()=>technolgyHandle(0)} >1</button>
                                <button className=" font-mono font-bold hover:text-[#0b0d17] bg-transparent hover:bg-white w-16 h-16 rounded-full ml-auto border " onClick={()=>technolgyHandle(1)} >2</button>
                                <button className=" font-mono font-bold hover:text-[#0b0d17] bg-transparent hover:bg-white w-16 h-16 rounded-full ml-auto border " onClick={()=>technolgyHandle(2)} >3</button>
                            </div>
                            <div className=" pl-16  h-full w-5/6 font-mono ">
                                <h3 className=" text-4xl text-slate-300 mb-4 ">THE TERMINOLOGY...</h3>
                                <h4 className=" text-7xl mb-10 ">{name}</h4>
                                <p className=" text-lg w-3/4 ">{info.description}</p>
                            </div>
                        </div>
                        <div></div>
                    </section>
                        <img className=" h-full w-1/2 object-contain " src={info.images.portrait} alt={`${info.name} image`} />
                </div>
            </div>
            
        </>
    )
}