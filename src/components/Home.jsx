import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import menu from '../../public/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

export default function Home(props) {

    return(
        <>
        <div className="font-mono relative w-full h-full ">
            <img className="w-[100vw] h-[100vh] -z-10 object-cover " src={props.bgSrc} alt="home page background image" />
            <div className="flex flex-col lg:grid-cols-2 lg:grid text-white absolute inset-0 w-full top-20 sm:top-40">
                <section className="w-full p-0 h-1/2 lg:mt-40 ">
                    <h2 className="text-base lg:text-left lg:pl-60 sm:text-xl text-center mb-4">SO, YOU WANT TO TRAVEL TO</h2>
                    <h3 className="text-5xl sm:text-8xl lg:text-left lg:pl-60 text-center mb-6">SPACE</h3>
                    <p className='text-xs lg:text-left lg:pl-60 sm:px-44 text-center px-5'>Let's face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we'll give you a truly out of this world experience!</p>
                </section>
                <section className=" h-1/2 lg:mt-40 w-full ">
                    <button className='text-xl sm:text-2xl lg:text-4xl lg:mt-0 mt-14  ml-auto mr-auto block w-36 h-36 lg:h-[272px] lg:w-[272px] rounded-full bg-white text-black p-18  duration-500 hover:shadow-[0px_0px_207px_68px_rgba(255,_255,_255,_0.4)]'><Link to='/destination'>Explore</Link></button>
                </section>
            </div>
        </div>
        
        </>
    )
}

Home.propTypes = {
    bgSrc: PropTypes.string.isRequired,
};