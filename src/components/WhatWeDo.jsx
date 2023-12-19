import vector from '../assets/whatwedo.svg'
import { FaCheckCircle } from "react-icons/fa";
const WhatWeDo = () => {
  return (
    <div className="w-full p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3 className="text-primary">What We Do</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10 lg:gap-20">
          <div>
            <img src={vector} alt="vector" />
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 lg:w-[35rem]">
            <h3>
              Our mission is to help children and single parent deal with mental
              health issues
            </h3>

            <p>
              We connect our members to the best psycologist and provide them
              with Studying modules to bring them closer as a happy family.
            </p>

            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <FaCheckCircle size={20} className="text-primary font-semibold" />
                <p>Schedule a free psycologist session now</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle size={20} className="text-primary font-semibold" />
                <p>Enjoy a hassle-free experience and learn so much about mental health.</p>
              </div>
            </div>

            {/* <Button>Schedule your next booking </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;