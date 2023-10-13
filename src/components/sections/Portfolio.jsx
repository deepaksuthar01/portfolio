import { portfolios } from "../../constants";

const Portfolio = () => {
    return(
        <section id="portfolio" className="py-16">
            <div className="container-xl"  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                <h2 className="section-title mb-5">Portfolio</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                 {
                    portfolios.map((img,index)=> (
                        <div key={index} className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                            <img src={img} alt={index}  className="max-w-xs transition duration-300 ease-in-out hover:scale-110"/>
                            {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>                       */}
                        </div>
                    ))
                 }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;