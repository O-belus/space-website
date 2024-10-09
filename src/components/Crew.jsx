import Carousel from '../components/Carousel'


export default function Crew() {
    

    return(
        <>
            <div className="font-mono relative ">
                <img className="h-[100vh] w-[100vw] " src="/crew/background-crew-desktop.jpg" alt="crew background image" />
                <div className=" flex flex-col text-white absolute inset-0 w-[60vw] h-2/3 top-60  ml-auto mr-auto " >
                    <h2 className=" font-mono text-2xl h-10 w-full"><span className=" font-bold px-3 text-slate-300   ">02</span> MEET OUR CREW </h2>
                    <Carousel />
                </div>
                
            </div>
            
            
        </>
    )
}

