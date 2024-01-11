import { scrollToSection } from "../Hooks/ScrollToSection";

const Intro = () => {
 return (
  <div className=" h-screen text-slate-100 bg-purple-700 px-4 pb-16 lg:text-center ">
   <p className="pt-16 pb-8 mb-16 text-4xl">
    Greetings! <br />
    I&apos;m <strong className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Atogwe Daniel</strong>, <br /> <br />
    Proficient in Full-Stack Web Development, <br />
    Content Creation & <br />
    Freelancing
   </p>

   <button className="bg-gradient-to-r from-indigo-500  to-purple-500  p-8 rounded-2xl text-center text-xl font-bold mt-16" onClick={() => scrollToSection('contact')}>Let&apos;s Craft Something Spectacular.🌟</button>

  </div>
 );
};

export default Intro;