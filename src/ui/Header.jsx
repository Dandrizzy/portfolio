import { useState } from 'react';
import { MdClose, MdCoffee, MdDashboard, MdHome, MdMail, MdMenu } from 'react-icons/md';

const Header = () => {
 const [open, setOpen] = useState(false);
 return (
  <div className='md:hidden'>
   <div className=" items-center flex justify-between p-4 bg-purple-600 text-slate-100">
    <div className=" uppercase font-bold text-base">AtogweDaniel.dev</div>

    <div className=" text-lg" onClick={() => setOpen(isOpen => !isOpen)}>{open ? <MdClose /> : <MdMenu />}</div>
   </div>

   {open && <ul className=" px-4 bg-purple-600 sm:max-w-sm text-slate-100 grid divide-y [&>*]:cursor-pointer ">

    <li className='flex items-center gap-1 hover:bg-purple-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2'><MdHome />Home</li>

    {/* <li className=' flex items-center justify-center gap-1'><MdHome />About</li> */}

    <li className=' flex items-center gap-1 hover:bg-purple-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2 '><MdMail />Contact</li>

    <li className=' flex items-center gap-1 hover:bg-purple-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-21'><MdDashboard />Projects</li>

    <li className=' flex items-center gap-1 hover:bg-purple-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2'><MdCoffee />Coffee</li>
   </ul>}
  </div>
 );
};

export default Header;