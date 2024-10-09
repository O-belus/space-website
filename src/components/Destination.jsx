import data from '../data.json'
import { useState } from 'react'


export default function Destination() {
    
    const activeClass = "border-b-4 border-white p-1 text-lg duration-700 "
    const inactiveClass = ""

    const destination = data.destinations
    const [info, setInfo] = useState(destination[0])
    function destinationHandle(i) {
        setInfo(destination[i])

    }

    return(
        <>
        <div className=' relative font-mono'>
            <img className="h-[100vh] w-[100vw]" src="/destination/background-destination-desktop.jpg" alt="destination page background image" />
                <div className=' text-white inset-0 top-1/4  ml-auto mr-auto "   absolute w-[60vw] h-[60vh] '>
                    <div className='pl-28 w-full h-12 '>
                        <h2 className=' text-2xl '>
                        <span className=' px-3 text-slate-300 '>01</span>PICK YOUR OWN DESTINATION
                        </h2>
                    </div>
                    <div className=' w-full h-full flex '>
                        <section className=' flex justify-center items-center h-full w-1/2 '>
                            <img className=' w-2/3 h-2/3 ' src={info.images.webp} alt="" />
                        </section>
                        <section className=' h-full w-1/2 '>
                            <nav className=' mt-28 w-1/2 h-12 flex items-center justify-between '>
                                <button onClick={()=> destinationHandle(0)} className={info.name === "Moon" ? activeClass : inactiveClass}>MOON</button>
                                <button onClick={() => destinationHandle(1)} className={info.name === "Mars" ? activeClass : inactiveClass} >MARS</button>
                                <button onClick={() => destinationHandle(2)} className={info.name === "Europa" ? activeClass : inactiveClass} >EUROPA</button>
                                <button onClick={() => destinationHandle(3)} className={info.name === "Titan" ? activeClass : inactiveClass} >TITAN</button>            
                            </nav>
                            <h2 className=' text-8xl pl-4 '>{info.name.toUpperCase()}</h2>
                            <p className=' text-lg w-4/5 mt-8 '>{info.description}</p>
                            <p className="mt-10 w-4/5 border-[1px] border-solid border-white"></p>
                            <div className='flex w-2/3 h-40 mt-10'>
                                <div className=' h-full w-1/2 flex flex-col '>
                                    <p className=' mt-6 '>AVG. DISTANCE</p>
                                    <p className=' mt-2 text-3xl '>{info.distance}</p>
                                </div>
                                <div className=' h-full w-1/2 flex flex-col '>
                                    <p className=' mt-6 '>EST. TRAVEL TIME</p>
                                    <p className=' mt-2 text-3xl '>{info.travel}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            
        </>
    )
}