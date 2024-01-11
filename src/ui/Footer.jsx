import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
 return (
  <div className="bg-slate-100 text-purple-700">
   <div className=" flex items-center justify-center gap-4 pt-4 text-lg text-slate-700">
    <div><FaGithub /></div>
    <div><FaLinkedin /></div>
    <div><FaTwitter /></div>
   </div>
   <div className="  p-4 flex justify-center">
    &copy; {new Date().getFullYear()} Atogwe Daniel. All rights reserved.
   </div>
  </div>
 );
};

export default Footer;