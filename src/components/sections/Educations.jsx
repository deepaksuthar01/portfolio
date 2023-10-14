import { skills } from "../../constants";

const Educations = () => {

    const widths = {
        60: 'w-60',
        65: 'w-65',
        70: 'w-70',
        75: 'w-75',
        80: 'w-80',
        85: 'w-85',
        90: 'w-90',
        95: 'w-95',
        100: 'w-100',
    }
    const lefts = {
        60: 'left-60',
        65: 'left-65',
        70: 'left-70',
        75: 'left-75',
        80: 'left-80',
        85: 'left-85',
        90: 'left-90',
        95: 'left-95',
        100: 'right-0',
    }
    return(
        <section className="w-full bg-site py-16">
            <div className="w-4/5 mx-auto">
                <div className="title">
                    <h2 className="font-bold text-4xl">EDUCATION & SKILLS</h2>
                </div>
                <div className="flex lg:justify-evenly max-lg:flex-col max-lg:gap-10 mt-10">
                    <div className="flex-1 lg:pr-20"  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="shadow-xl bg-yellow-500 px-4 py-8 rounded-se-3xl">
                            <div className="bg-white px-3 py-1 my-2 -mx-5 text-black rounded-e-xl w-24 ">logical</div>
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
                    <div className="flex-1 "  data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <h3 className="text-3xl mb-5 font-semibold">Skills</h3>
                        <p className="text-md">I'm a Freelancer Front-end Developer with over 3 years of experience. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                        <div className="about-skills mt-16">
                            {
                                skills.map((skill)=> {
                                    return(
                                    <div key={skill.title} className="skills mb-6">
                                        <h2 className="text-lg mb-1">{skill.title}</h2>
                                        <div className="w-[100%] bg-slate-500 h-1 relative rounded-md ">
                                            <div className={`${widths[skill.level]} h-1 bg-yellow-500`}>
                                                <div className={`w-3 h-3 bg-yellow-500 rounded-full absolute ${lefts[skill.level]}  -top-1`}></div>
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