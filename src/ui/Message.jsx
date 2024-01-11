import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Form } from "react-router-dom";

const Message = () => {

 const { register, handleSubmit, formState: { errors }, reset } = useForm();

 const onSubmit = (data) => {
  console.log(data);
  if (!data) toast.error('No Value in the field');
  toast.success('Message successfully sent');
  reset();
 };

 return (
  <div id="contact" className=" min-h-screen max-w-5xl border-purple-700 border mx-4 px-4 py-20 lg:text-2xl ">
   <p className=" md:2xl lg:text-6xl font-bold text-bold text-purple-700 text-xl text-center">Send me a Message 📧</p>
   <p className=" text-center py-8">
    Feel free to ask a question, share a proposal, or simply drop a greeting!
   </p>
   <Form onSubmit={handleSubmit(onSubmit)} className=" grid py-8 gap-4">
    <label htmlFor="name">Your Name:</label>

    <input {...register('name', { required: true, minLength: 3 })} type="text" id="name" placeholder="Enter your Name" className=" border-b outline-none pb-4 border-purple-500 text-purple-900 text-base placeholder:text-purple-900 " />

    {errors.name && <span className=" text-pink-700 bg-pink-200 py-2 px-4 rounded-full">⚠ Your <strong>name</strong> is required</span>}

    <label htmlFor="email">Your Email:</label>

    <input  {...register('email', { required: true })} type="email" id="email" placeholder="Enter your Email Address" className=" border-b outline-none pb-4 border-purple-500 text-purple-900 text-base placeholder:text-purple-900" />

    {errors.email && <span className=" text-pink-700 bg-pink-200 py-2 px-4 rounded-full">⚠ Your <strong>email</strong> is required</span>}

    <label htmlFor="message">Your Message:</label>

    <textarea name="message" id="message" cols="30" rows="5" placeholder="I need a design form my company how fast can build it?" className=" border-b outline-none pb-4 border-purple-500 overflow-y-scroll text-purple-900 text-base placeholder:text-purple-900" {...register('message', { required: true, minLength: 8 })} ></textarea>

    {errors.message && <span className=" text-pink-700 bg-pink-200 py-2 px-4 rounded-full">⚠ Your <strong>message</strong> is required</span>}

    <button type="submit" className=" mt-20 p-4 border border-purple-600 hover:bg-purple-300 text-purple-900 font-bold transition-colors duration-300 text-2xl disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:text-gray-700 disabled:border-gray-400" disabled={errors.name || errors.email || errors.message}>Send 🚀</button>
   </Form>
  </div>
 );
};

export default Message;