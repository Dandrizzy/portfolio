import Intro from "../Features/Intro";
import Tech from "../Features/Tech";
import Contact from "../ui/Contact";
import Message from "../Features/Message";

const Home = () => {
 return (
  <>
   <Intro />
   <Tech />
   <div className=" lg:grid lg:grid-cols-2">
    <Message />
    <Contact />
   </div>
  </>
 );
};

export default Home;