import { portfolios } from "../../constants";
import { FaLink } from "react-icons/fa6";
const Portfolio = () => {
    return(
        <section id="portfolio" className="py-16">
            <div className="container-xl"  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                <h2 className="section-title mb-5">Portfolio</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">                   
                
                 {
                    portfolios.map((item,index)=> (                       
                        <div key={index} className="relative max-w-xs overflow-hidden portfolio-content">
                            <div className="scroll-img" style={{ backgroundImage: `url('${item.img}')`}}></div>
                          
                            <div className=" scroll-content absolute bg-[#000000b3]  w-full h-full top-[150%] left-0 transition-all ease-in-out delay-150  text-white text-center p-6 duration-1000">
                                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                                <p className="mb-3">{item.desc}</p>
                                <p className="technology mb-3">{item.tech}</p> 
                                <a href={item.url} target="_blank" className="live-link bg-white rounded-full text-center">
                                    <FaLink className="text-4xl bg-white text-blue-600 rounded-full p-2 m-auto" />
                                </a> 
                            </div>
                        </div>
                    ))
                 }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;