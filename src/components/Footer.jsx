// import { socials } from "../constants/index";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="w-full bg-footer p-5 py-5 mt-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-primary">Enliven</h1>
        </div>

        <div className="p-8 border-t border-gray-800 border-b  flex flex-wrap items-center gap-10 lg:gap-28 justify-center mt-10">
          <div className="flex items-center gap-3">
            <AiOutlineMail size={20} className="text-secondary" />
            <p>enliven@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <BiPhoneCall size={20} className="text-secondary" />
            <p>+91 123456789</p>
          </div>

          <div className="flex items-center gap-3">
            <CiLocationOn size={20} className="text-secondary" />
            <p>New Delhi, India</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 mt-10">
          <div className="flex items-center gap-5">
            {/* {socials.map((link, index) => (
              <div
                key={index}
                className="bg-primary text-background rounded-full p-3">
                <div>{link.icon}</div>
              </div>
            ))} */}
          </div>
          <div>
            <p>Enliven. All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-3">
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
