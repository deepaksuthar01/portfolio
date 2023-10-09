import { instaIcon,linkedinIcon,twitterIcon} from "../../assets/images";

const Footer = () => {
    return(
        <section className="bg-black py-16">
            <div className="text-center">
                <h2 className="font-bold text-2xl text-white tracking-widest uppercase">Deepak Suthar</h2>
                <div className="mt-4 p-2 px-10 social flex gap-3 lg:justify-end justify-center">
                    <img src={instaIcon} alt="instaIcon" className="w-8 invert " />
                    <img src={linkedinIcon} alt="linkedinIcon" className="w-8 invert" />
                    <img src={twitterIcon} alt="twitterIcon" className="w-8 invert" />
                </div>
            </div>
        </section>
    );
}

export default Footer;