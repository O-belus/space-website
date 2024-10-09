import { Link } from 'react-router-dom'

export default function Home() {
    
    return(
        <>
        <div className="font-mono relative ">
            <img className="w-[100vw] h-[100vh] -z-10" src="/home/background-home-desktop.jpg" alt="home page background image" />
            <div className="flex text-white absolute inset-0 w-[60vw] h-1/3 top-1/2  ml-auto mr-auto ">
                <section className="w-1/2 h-full ">
                    <h2 className="text-4xl mb-5">So, you want to travel to</h2>
                    <h3 className="text-9xl mb-16">SPACE</h3>
                    <p className='text-lg'>Let's face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we'll give you a truly out of this world experience!</p>
                </section>
                <section className=" h-full w-1/2 ">
                    <button className='text-5xl ml-auto mr-auto block w-72 h-72 rounded-full bg-white text-black p-18  duration-500 hover:shadow-[0px_0px_207px_68px_rgba(255,_255,_255,_0.4)]'><Link to='/destination'>Explore</Link></button>
                </section>
            </div>
        </div>
        
        </>
    )
}