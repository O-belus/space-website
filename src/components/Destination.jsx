import data from '../data.json'
import { useState } from 'react'
import PropTypes from 'prop-types';


export default function Destination(props) {
    
    const activeClass = "border-b-4 border-white p-1 text-base duration-700 "
    const inactiveClass = ""

    const destination = data.destinations
    const [info, setInfo] = useState(destination[0])
    function destinationHandle(i) {
        setInfo(destination[i])

    }

    return(
        <>
        <div className=' relative font-mono'>
            <img className="h-[125vh] w-[100vw] lg:h-screen " src={props.bgSrc} alt="destination page background image" />
                <div className='flex flex-col  lg:flex-col text-white absolute inset-0 w-full top-24 sm:top-28 lg:w-4/5 lg:mx-auto '>
                    <div className=' w-full h-12 '>
                        <h2 className=' font-mono text-base text-center w-full md:text-left md:pl-10'>
                        <span className=' px-3 text-slate-400 font-bold '>01</span>PICK YOUR OWN DESTINATION
                        </h2>
                    </div>
                    <div className=' w-full h-full flex flex-col lg:flex-row lg:w-2/3 lg:mx-auto lg:gap-20 '>
                        <section className=' w-full p-0 h-1/3 lg:mt-4 md:h-2/5 '>
                            <img className=' w-36 h-36 mt-8 mx-auto md:mt-6 md:h-72 md:w-72 lg:mt-24 lg:h-96 lg:w-96 ' src={info.images.png} alt={`image of ${info.name}`} />
                        </section>
                        <section className=' w-full md:mt-10 lg:mt-20 '>
                            <nav className=' w-4/5 h-12 text-xs mx-auto flex items-center justify-between md:w-1/3 lg:text-lg lg:w-2/3 lg:mx-0  '>
                                <button onClick={()=> destinationHandle(0)} className={info.name === "Moon" ? activeClass : inactiveClass}>MOON</button>
                                <button onClick={() => destinationHandle(1)} className={info.name === "Mars" ? activeClass : inactiveClass} >MARS</button>
                                <button onClick={() => destinationHandle(2)} className={info.name === "Europa" ? activeClass : inactiveClass} >EUROPA</button>
                                <button onClick={() => destinationHandle(3)} className={info.name === "Titan" ? activeClass : inactiveClass} >TITAN</button>            
                            </nav>
                            <h2 className=' text-5xl mx-auto text-center mt-6 md:text-6xl lg:mx-0 lg:text-left lg:text-7xl '>{info.name.toUpperCase()}</h2>
                            <p className=' text-xs text-center mx-auto w-4/5 mt-4 md:w-1/2 lg:mx-0 lg:text-left lg:w-full '>{info.description}</p>
                            <p className="mt-4 w-4/5 border-[1px] mx-auto border-solid border-white md:w-2/3 lg:mx-0 "></p>
                            <div className='flex w-full flex-col h-40 mt-6 md:flex-row md:h-20 md:w-1/2 md:mx-auto lg:mx-0 lg:w-2/3 lg:pt-4 lg:gap-8 '>
                                <div className='  mx-auto flex flex-col '>
                                    <p className='  text-center text-sm lg:text-left '>AVG. DISTANCE</p>
                                    <p className=' mt-2 text-2xl '>{info.distance.toUpperCase()}</p>
                                </div>
                                <div className=' mx-auto flex flex-col '>
                                    <p className=' mt-6 md:mt-0 text-center text-sm lg:text-left '>EST. TRAVEL TIME</p>
                                    <p className=' mt-2 text-2xl '>{info.travel.toUpperCase()}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            
        </>
    )
}
Destination.propTypes = {
    bgSrc: PropTypes.string.isRequired,
};