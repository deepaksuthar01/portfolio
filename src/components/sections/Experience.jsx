import { weiLogo } from "../../assets/images";

const Experience = () => {
    return(
        <section className="py-10">
            <div className="container-xl"  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3 className="section-title mb-16">Experience</h3> 
                <div className="flex flex-wrap gap-4">
                    <div className="relative lg:w-1/3 flex flex-col rounded-lg bg-slate-700 hover:bg-yellow-500 hover:text-black shadow-md overflow-hidden">
                     
                        <img src={weiLogo} alt="man computer"/>                        
                        <div className="exp-content mb-5 p-4">
                        <h2 className="text-3xl font-bold mb-4"><span className="">WebExpertInfotech</span></h2>
                        <p className="text-md flex justify-between flex-col"><span className="font-semibold">Software Developer</span>(2019-Present)</p>   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;