import { skills } from "../../constants";

const Educations = () => {
    return(
        <section className="w-full bg-white py-16">
            <div className="w-4/5 mx-auto">
                <div className="title">
                    <h2 className="font-bold text-4xl">EDUCATION & SKILLS</h2>
                </div>
                <div className="flex justify-evenly  mt-10">
                    <div className="flex-1 pr-20">
                        <div className="shadow-xl bg-yellow-500 px-4 py-8 rounded-se-3xl">
                            <div className="bg-white px-3 py-1 my-2 -mx-5 text-black rounded-e-xl w-24 uppercase">HSS</div>
                            <h3 className="text-3xl font-semibold text-white ">Web Developer</h3>
                            <p className="text-white mt-2">International Design Institute</p>
                        </div>
                        <div className="shadow-xl bg-yellow-500 px-4 py-8 mt-3 ">
                            <div className="bg-white px-3 py-1 my-2 -mx-5 text-black rounded-e-xl w-24">creative</div>
                            <h3 className="text-3xl font-semibold text-white ">Graphic Designer</h3>
                            <p className="text-white mt-2">International Design Institute</p>
                        </div>
                        <div className="shadow-xl bg-yellow-500 px-4 py-8 mt-3 rounded-es-3xl">
                            <div className="bg-white px-3 py-1 my-2 -mx-5 text-black rounded-e-xl w-24">passionate</div>
                            <h3 className="text-3xl font-semibold text-white ">Search Engine Optimization</h3>
                            <p className="text-white mt-2">International Design Institute</p>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <h3 className="text-3xl mb-5 font-semibold">Skills</h3>
                        <p className="text-md">I'm a Freelancer Front-end Developer with over 3 years of experience. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                        <div className="about-skills mt-16">
                            {
                                skills.map((skill)=> {
                                 const   left_p = `${skill.level ==100 ? 'w-[100%]' : `w-[${skill.level}%]`}`;
                                    return(
                                    <div key={skill.title} className="skills mb-6">
                                        <h2 className="text-2xl font-bold mb-1">{skill.title}</h2>
                                        <div className="w-[100%] bg-slate-500 h-2 relative rounded-md ">
                                            <div className={`${left_p} h-2 bg-yellow-500`}>
                                                <div className={`w-5 h-5 bg-yellow-500 rounded-full absolute ${skill.level ==100 ? 'right-0' : `left-[${skill.level}%]`} -top-1.5`}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}) 
                            }
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Educations;