import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import data from '../data.json'


export default function Cards() {

const crew = data.crew



    return(
        <>
            <Carousel className="w-2/3 max-w-8xl h-full ml-auto mr-auto max-w-4xl ">
                <CarouselContent>
                    {crew.map((crewMember, index) =>{
                        return(
                            <CarouselItem key={index}>
                                <div className=" flex w-full h-2/3 flex-col mt-6 lg:flex-row ">
                                    <section className=" h-full w-full flex flex-col justify-center mb-20 lg:mt-32 lg:mb-0 ">
                                        <h3 className=" text-lg mx-auto text-slate-300  md:text-xl md:mb-4 lg:text-left lg:mx-0 lg:text-2xl ">{crewMember.role.toUpperCase()}</h3>
                                        <h4 className=" text-xl text-center mb-6 md:text-3xl lg:text-left lg:text-4xl ">{crewMember.name.toUpperCase()}</h4>
                                        <p className=" text-xs text-center mx-auto lg:text-left ">{crewMember.bio}</p>
                                    </section>
                                    <section className="  w-full h-full  ">
                                        <img className=" mx-auto w-[271px] h-[340px] object-contain lg:w-[540px] lg:h-[540px] " src={crewMember.images.webp} alt="" />
                                    </section>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className=" bg-transparent  " />
                <CarouselNext className=" bg-transparent " />
            </Carousel>

        </>
    )
}

