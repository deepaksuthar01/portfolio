import { weiLogo } from "../../assets/images";

const Experience = () => {
    return(
        <section className="py-10">
            <div className="container-xl">
                <h3 className="section-title mb-16">Experience</h3> 
                <div className="flex flex-wrap gap-4">
                    <div className="lg:w-2/4 p-1 flex flex-col rounded-lg bg-slate-700 hover:bg-yellow-500">
                        <img src={weiLogo} alt="man computer" />
                        
                        <div className="text-white mb-5 p-5">
                            <h3 className=" font-bold text-3xl mb-5">WebexpertInfotech</h3>
                            <p className="text-sm font-bold mt-1 "><span className="font-bold">Duration</span>: 2019-Present</p>
                            <p className="text-sm font-bold mt-1 "><span className="font-bold">Role</span>: Software Developer</p>
                            <p className="text-sm font-bold mt-1 "><span className="font-bold">Position</span>: Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;