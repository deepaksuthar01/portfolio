import { man_computer } from "../../assets/images";

const Experience = () => {
    return(
        <section className="py-10">
            <div className="container-xl">
                <h3 className="section-title mb-16">Experience</h3> 
                <div className="flex flex-wrap gap-4">
                    <div className="flex flex-row py-5 px-4 rounded-lg bg-slate-500 text-white">
                        <img src={man_computer} alt="man computer" width={150}/>
                        <div className="block">
                            <h3 className="text-yellow-500 font-bold text-3xl uppercase">Webexpert<span className="text-white">Infotech</span></h3>
                            <p className="text-sm font-bold mt-1 text-end"><span className="font-bold">Duration</span>: 2019-Current</p>
                            <p className="text-sm font-bold mt-1 text-end"><span className="font-bold">Role</span>: Developer</p>
                            <p className="text-sm font-bold mt-1 text-end"><span className="font-bold">Position</span>: Senior</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;