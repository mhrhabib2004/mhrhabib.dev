"use client"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaDiscord, FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import Link from "next/link";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email input
    if (!formData.email) {
      alert("Email is required");
      return;
    }

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.error(error.text);
        alert('Failed to send email, please try again.');
      });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      description: ''
    });
  };

  return (
    <div className=" bg-gradient-to-r from-purple-400">
      <div className="text-center">
        <h1 className="md:text-5xl text-3xl font-bold py-6 ">Contact Me</h1>
        <h2 className="text-xl font-medium">Message me directly to learn about any topic of web development.</h2>
      </div>
      <div className="hero bg-gradient-to-r from-purple-400  rounded-lg bg-base-200 min-h-screen">

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center ml-5 md:w-1/2 lg:text-left">
            <h1 className="text-3xl text-center font-bold">Contact info</h1>
            <div className="flex items-center text-xl text-green-500 gap-5">
              <FaLocationDot />
              <p className="mt-4 text-[16px] text-black font-medium">
                ROTARGAON-3000, BISHWAMBARPUR, SUNAMGNJ, <br /> SYLHET DEVIATION, BANGLADESH
              </p>
            </div>
            <div className="flex items-center text-xl text-green-500 gap-5">
              <MdEmail />
              <p className=" text-[16px]  text-black font-medium">
                mhrhabibdev@gmail.com
              </p>
              
            </div>
            <div className="flex items-center text-xl text-green-500 gap-5">
              <FaPhoneAlt />
              <p className=" text-[16px]  text-black font-medium">
                +8801749959977

              </p>
            </div>
            <div className="flex items-center mt-5 justify-center gap-5">
        <Link className="text-4xl" href={'https://www.facebook.com/dmmhrhabib'} target="_blank"> <FaFacebook /> </Link>
        <Link target="_blank" className="text-4xl" href={'https://www.linkedin.com/in/md-habibur-rahman-habib/'}> <FaLinkedin /></Link>
        <Link target="_blank" className="text-4xl" href={'https://github.com/mhrhabib2004'}> <FaGithub /></Link>
        <Link target="_blank" className="text-4xl" href={'https://www.instagram.com/dm_habibur_rahman/'}> <FaInstagramSquare /></Link>
        <Link target="_blank" className="text-4xl" href={'https://discordapp.com/users/mhrhabib1'}> <FaDiscord /></Link>
      </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="divider divider-start"></div>
          <div className="card bg-base-100 bg-gradient-to-r from-slate-400 to-purple-400 md:w-1/2 shrink-0 shadow-2xl">
            <form ref={form} onSubmit={handleSubmit} className="mt-8  text-start pb-10 px-10">
              <div className="divider divider-neutral"></div>
              <h1 className="text-center text-2xl font-bold">Send Me a message</h1>
              <div className="divider divider-neutral"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">Your name</label>
                  <div className="mt-2.5 relative">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Your email</label>
                  <div className="mt-2.5 relative">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="input input-bordered" required />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Phone number</label>
                  <div className="mt-2.5 relative">
                    <input type="number" min={0} name="phone" value={formData.phone} onChange={handleChange} className="input input-bordered" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Company name</label>
                  <div className="mt-2.5 relative">
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="input input-bordered" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-base font-medium text-gray-900">Description</label>
                  <div className="mt-2.5 relative">
                    <textarea name="description" value={formData.description} onChange={handleChange} className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" rows="4"></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 ">
                    Send
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;