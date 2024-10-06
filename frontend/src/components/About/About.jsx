import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[30px] lg:gap-[40px] xl:gap-0 flex-col lg:flex-row">
            {/* ================about image================== */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img src={aboutImg} alt="" />
              <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
              </div>
            </div>

            {/* ===============About content=================== */}
            <div className="w-full lg:w-1/2 xl:w-[670] order-1 lg:order-2">
              <h2 className="heading">Proud to be one of nation best</h2>
              <p className="text__para">
                For 30 years in a row, India News and World report has
                recognised us as one of the best public hospitals in the Nation
                and #1 in Uttar Pradesh. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Sit, deleniti!{" "}
              </p>
              <p className="text__para mt-[30px]">
                Our best is something we strive for each day, caring for our
                patients-not looking back at what we accomplished but towards
                what we can do tomorrow. Providing the best. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Magni molestias a
                expedita at.
              </p>
              <Link to="/">
                {" "}
                <button className="btn">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
