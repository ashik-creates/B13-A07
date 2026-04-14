import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] pt-10">
      <div className="max-w-325  w-[95%] sm:w-10/12 mx-auto">
        <div className="flex justify-center items-center text-center flex-col text-white gap-3">
          <h2 className="text-3xl sm:text-5xl font-bold">KeenKeeper</h2>
          <p className="text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="mx-auto space-y-2">
            <p className="font-semibold text-lg">Socials Links</p>
            <div className="flex items-center justify-center gap-2 text-black">
              <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <FaInstagram></FaInstagram>
              </div>
              <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <FaFacebook></FaFacebook>
              </div>
              <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <FaXTwitter></FaXTwitter>
              </div>
            </div>
          </div>
        </div>
         <div className="mt-5 py-7 flex justify-center flex-wrap gap-5 sm:justify-between items-center text-white/55 border-t border-gray-500 text-sm">
            <p className="text-center sm:text-start">© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
                <p>
                    Privacy Policy  
                </p>
                <p>
                      Terms of Service  
                </p>
                <p>
                     Cookies
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
