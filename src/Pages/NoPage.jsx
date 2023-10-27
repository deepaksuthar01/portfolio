import { NoPageImg } from "../assets/images";

const NoPage= () => {
    return (
        <div>           
           <div className="py-16 bg-yellow-500">
                <div className="lg:w-1/2 w-full mt-20 m-auto bg-white rounded-xl">
                    <div className="shadow-xl pb-12" >
                        <div className="w-1/2 m-auto">
                            <img src={NoPageImg} alt="404"  className="" />
                        </div>                   
                        <p className="font-bold text-3xl text-center -mt-14 text-yellow-500 uppercase font-montserrat">Page Not Found!</p>
                        <div className="text-center mt-12">
                            <a href="/" className="site-btn rounded-lg px-6 py-4">Home</a>
                        </div>
                    </div>  
                </div>
           </div>
        </div>
    );
}

export default NoPage;