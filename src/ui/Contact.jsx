import { FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa6";
import { MdMail, MdPhone, MdWhatsapp } from "react-icons/md";

const Contact = () => {

 const myEmail = 'dandrizzy4all@gmail.com';
 const handleMail = () => {
  const mailToLink = `mailto:${myEmail}`;
  window.location.href = mailToLink;
 };

 const myNumber = '+2349065907379';
 const handleCall = () => {
  const telToLink = `mailto:${myNumber}`;
  window.location.href = telToLink;
 };

 return (
  <div className="mx-4 h-screen bg-purple-700 text-slate-100 p-16 [&>div]:cursor-pointer lg:text-2xl">
   <h1 className=" sm:text-center border-dashed border-b-2 pb-2 text-base lg:text-4xl font-bold">SAY HELLO</h1>
   <div className=" sm:grid sm:grid-cols-2">
    <div className=" flex justify-start items-center gap-4 py-8" onClick={handleMail}>
     <MdMail />
     <p>Send a Mail ✉</p>
    </div>
    <div className=" flex justify-start items-center gap-4 py-8" onClick={handleCall}>
     <MdPhone />
     <p>Call Me 📞</p>
    </div>
    <div className=" flex justify-start items-center gap-4 py-8">
     <MdWhatsapp />
     <a href="whatsapp://send?phone=+2349065907379" target="_blank" rel="noopener noreferrer">Chat Me on Whatsapp </a>
    </div>
    <div className=" flex justify-start items-center gap-4 py-8">
     <FaTwitter />
     <a href="https://twitter.com/AtogweD" target="_blank" rel="noopener noreferrer">Send a Tweet</a>
    </div>
    <div className=" flex justify-start items-center gap-4 py-8">
     <FaLinkedin />
     <a href="https://www.linkedin.com/in/daniel-atogwe-a145a1279" target="_blank" rel="noopener noreferrer">Atogwe Daniel</a>
    </div>
    <div className=" flex justify-start items-center gap-4 py-8">
     <FaMedium />
     <a href="https://medium.com/@dandrizzy4all" target="_blank" rel="noopener noreferrer">Atogwe Daniel</a>
    </div>
   </div>
   <main className="">
    <h1 className=" text-lg border-b-2 border-dashed inline-block">About <strong>Me</strong></h1>
    <h2 className=" text-lg py-2">Background</h2>
    <p>I&apos;ve accumulated {new Date().getFullYear() - 2020} years of experience in the web development industry, navigating through different roles. I started my career as a graphic designer in Benin city. Currently, I operate as a freelance full-stack web developer, a journey that begun during my university days.</p>
   </main>

  </div>
 );
};

export default Contact;