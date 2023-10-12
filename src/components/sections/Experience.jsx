import { weiLogo } from "../../assets/images";

const Experience = () => {
    return(
        <section className="py-10">
            <div className="container-xl"  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3 className="section-title mb-16">Experience</h3> 
                <div className="flex flex-wrap gap-4">
                    <div className="lg:w-1/3 flex flex-col rounded-lg bg-slate-700 hover:bg-yellow-500 shadow-md shadow-black">
                        <div className="h-52 overflow-hidden">
                            <img src={weiLogo} alt="man computer" className="h-full"  />                        
                        </div>
                        <div className="text-white mb-5 p-5">
                            <h3 className=" text-3xl mb-5">WebexpertInfotech</h3>
                            <p className="text-md mt-1 flex justify-items-start gap-10"><span className="font-bold">Duration:</span> 2019-Present</p>
                            <p className="text-md mt-1 flex justify-items-start gap-10 "><span className="font-bold mr-8">Role:</span> Software Developer</p>
                            <p className="text-md mt-1 flex justify-items-start gap-10"><span className="font-bold mr-1">Position:</span> Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;