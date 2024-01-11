import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactquery, SiSupabase } from "react-icons/si";

const Tech = () => {
 return (
  <div className=" bg-purple-200 h-screen">
   <p className=" lg:text-6xl md:leading-5 text-center text-2xl md:text-4xl pt-20">Technologies I work with</p>
   <div className=" text-6xl grid grid-cols-2 max-w-xs mx-auto justify-items-center content-end h-3/5 md:h-3/4 md:text-[5rem] [&>*]:cursor-pointer  gap-10 md:gap-16">
    <div className=" text-sky-400" >
     <FaReact />
    </div>
    <div className="text-yellow-500">
     <IoLogoJavascript />
    </div>
    <div className=" text-orange-600">
     <FaGitAlt />
    </div>
    <div className=" ">
     <FaGithub />
    </div>
    <div className=" text-blue-600">
     <FaCss3Alt />
    </div>
    <div className=" text-orange-500">
     <FaHtml5 />
    </div>
    <div className=" text-teal-500">
     <SiSupabase />
    </div>
    <div className=" text-red-500">
     <SiReactquery />
    </div>
   </div>
  </div>
 );
};

export default Tech;