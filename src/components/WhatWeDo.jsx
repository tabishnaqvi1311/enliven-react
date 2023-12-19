import vector from "../assets/whatwedo.svg";
import { FaCheckCircle } from "react-icons/fa";
const WhatWeDo = () => {
  return (
    <div className="w-full p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3 className="text-primary">What We Do?</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10 lg:gap-20">
          <div>
            <img src={vector} alt="vector" />
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 lg:w-[35rem]">
            <h3>
              We aim to inspire confidence, nuture positive habits and lay the
              foundation for a lifetime of mental wellness
            </h3>

            <p>
              
            </p>

            <div className="flex flex-col items-start gap-3 text-lg">
              <div className="flex items-center gap-3">
                <FaCheckCircle
                  size={20}
                  className="text-primary font-semibold"
                />
                <p>We provide a supportive digital space that fosters mental well-being.</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle
                  size={20}
                  className="text-primary font-semibold"
                />
                <p>
                  Enjoy a hassle-free experience and learn so much about mental
                  health.
                </p>
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
