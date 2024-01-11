import { MdCoffee, MdDashboard, MdHome, MdMail } from 'react-icons/md';
import { scrollToSection } from '../Hooks/ScrollToSection';


const Nav = () => {

 return (
  <div className=" hidden items-center md:grid grid-cols-2 p-4 bg-purple-600 text-slate-100">
   <div className=" uppercase font-bold text-2xl lg:text-4xl">AtogweDaniel.dev</div>


   <ul className=" lg:text-lg [&>*]:cursor-pointer flex justify-between">
    <li className='hover:animate-bounce hover:bg-purple-500 transition-all duration-300 rounded-full p-2 flex items-center justify-center gap-1' onClick={() => scrollToSection('home')}><MdHome />Home</li>

    {/* <li className=' flex items-center justify-center gap-1'><MdHome />About</li> */}

    <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-purple-500 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('contact')}><MdMail />Contact</li>

    <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-purple-500 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('project')}><MdDashboard />Projects</li>

    <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-purple-500 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('coffee')}><MdCoffee />Coffee</li>
   </ul>
  </div>
 );
};

export default Nav;