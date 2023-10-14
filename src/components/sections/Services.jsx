import {webDevlopeIcon,webDesignIcon,seoIcon } from '../../assets/images';
const Services = () => {
    return(
        <section id='services' className="w-full bg-blue-50 py-16 bg-dark ">
            <div className="container-xl"  >
                <h2 className="section-title mb-16">Services</h2>
                <div className="flex lg:gap-3 gap-10 max-lg:flex-col dark:text-black">
                    <div className="flex justify-between gap-3 shadow-xl bg-white lg:w-1/3 p-6 rounded-sm hover:bg-yellow-500"  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <div className="w-56 mt-2">
                            <img src={webDesignIcon} alt="webDesignIcon" />
                        </div>
                        <div className="px-4 ">
                            <h3 className="text-xl font-bold mb-3">Web Design</h3>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi, eum reiciendis at officia earum iste odio minus dicta.</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-3 shadow-xl bg-white lg:w-1/3 p-6 rounded-sm hover:bg-yellow-500"  data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <div className="w-56 mt-2">
                            <img src={webDevlopeIcon} alt="webDevlopeIcon"  />
                        </div>
                        <div className="px-4">
                            <h3 className="text-xl font-bold mb-3">Web Developement</h3>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi, eum reiciendis at officia earum iste odio minus dicta. </p> 
                        </div>
                    </div>                                          
                    <div className="flex justify-between gap-3 shadow-xl bg-white lg:w-1/3 p-6 rounded-sm hover:bg-yellow-500"  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <div className="w-56 mt-2">
                            <img src={seoIcon} alt="seoIcon"/>
                        </div>
                        <div className="px-4 ">
                            <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi, eum reiciendis at officia earum iste odio minus dicta.</p>
                            
                        </div>
                    </div>                                          
                </div>
            </div>
        </section>
    );
}

export default Services;