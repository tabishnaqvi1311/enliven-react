import { IoSpeedometerOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { RiSoundModuleFill } from "react-icons/ri";
import homePageVector from "../assets/hero.svg";
import TransitionEffect from "../components/TransitionEffect";
import WhatWeDo from "./WhatWeDo";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="w-full  p-3">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-16 lg:gap-28 bg-primary rounded-tr-[4rem] rounded-tl-[4rem] lg:rounded-[8rem] p-20">
          <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-14">
            <h2 className="text-background text-center lg:text-start  lg:leading-[4rem] mt-5 lg:mt-0">
              Mindmate Junior: <span className="text-secondary">Empowering Minds</span>
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <IoSpeedometerOutline size={50} className="text-background" />
                <p className="font-bold text-lg">Physical Counselling</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <IoIosPeople size={50} className="text-background" />
                <p className="font-bold text-lg">Community Support</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <RiSoundModuleFill size={50} className="text-background" />
                <p className="font-bold text-lg">Learning Modules</p>
              </div>
            </div>

            <Link to="/signup">
              <button className="p-3 rounded-tr-xl rounded-bl-xl bg-secondary text-background  border border-primary font-semibold hover:bg-background hover:text-secondary duration-150">
                Join our Community
              </button>
            </Link>
          </div>

          <div>
            <img
              src={homePageVector}
              alt="homePageVector"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <WhatWeDo />
      </div>
    </div>
  );
};

export default HomePage;
