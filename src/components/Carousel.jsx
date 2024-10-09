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
            <Carousel className="w-full max-w-8xl h-full ml-auto mr-auto">
                <CarouselContent>
                    {crew.map((crewMember, index) =>{
                        return(
                            <CarouselItem key={index}>
                                <div className=" flex w-full h-full ">
                                    <section className=" h-full w-1/2 flex flex-col justify-center  ">
                                        <h3 className=" text-4xl text-slate-300 mb-4  ">{crewMember.role.toUpperCase()}</h3>
                                        <h4 className=" text-7xl mb-10 ">{crewMember.name.toUpperCase()}</h4>
                                        <p className=" text-lg w-3/4 ">{crewMember.bio}</p>
                                    </section>
                                    <section className=" h-full w-1/2 ">
                                        <img className=" ml-auto mr-auto " src={crewMember.images.webp} alt="" />
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

