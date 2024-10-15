import Carousel from '../components/Carousel'
import PropTypes from 'prop-types';


export default function Crew(props) {
    

    return(
        <>
            <div className="font-mono relative ">
                <img className="h-[100vh] w-[100vw] " src={props.bgSrc} alt="crew background image" />
                <div className=" flex flex-col  text-white absolute inset-0 w-full lg:w-4/5 top-24  ml-auto mr-auto " >
                    <h2 className=" font-mono text-base text-center w-full md:text-left md:pl-10 "><span className=" font-bold px-3 text-slate-300   ">02</span> MEET OUR CREW </h2>
                    <Carousel />
                </div>
                
            </div>
            
            
        </>
    )
}
Crew.propTypes = {
    bgSrc: PropTypes.string.isRequired,
};

