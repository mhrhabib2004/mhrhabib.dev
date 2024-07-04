import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Baner = () => {
    return (
        <div
        
        className="hero rounded-lg mt-3  bg-gradient-to-r from-purple-300 to-purple-200 min-h-screen"
        >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="md:w-1/3 ml-7  mt-10 h-auto ">
    <Image alt="" width={600}
    height={480}
      src="https://i.ibb.co/cXphP0c/Picsart-24-07-03-03-33-28-138.png"
      className="rounded-lg  shadow-2xl " />
    </div>
    <div className="md:w-1/2 md:mr-10">
        <h1 className="md:text-4xl text-2xl text-center mb-7 font-bold text-green-500">Hey <span className="text-fuchsia-700"> I </span>am</h1>
      <h1 className="md:text-5xl text-3xl text-[#047036] text-center font-bold">HABIBUR RAHMAN HABIB</h1>
      <h1 className="md:text-3xl mt-3 text-2xl text-[#047036] text-center font-bold">MERN Stack Web Developer</h1>
      <p className="py-6 p-4 text-black font-medium bg-gradient-to-r from-purple-200 ">
      I have a strong background in HTML, CSS, JavaScript, and modern frameworks like React. In addition to my front-end expertise, I am proficient in Node.js, MongoDB, Firebase, Git, GitHub, and Express.js. My diverse skill set in the MERN stack (MongoDB, Express.js, React, Node.js) enables me to contribute effectively to both the front-end and back-end aspects of web development, ensuring a seamless and comprehensive user experience.
      </p>
     
      <div className="flex items-center mt-5 justify-center gap-5">
        <Link className="text-4xl" href={'https://www.facebook.com/dmmhrhabib'} target="_blank"> <FaFacebook /> </Link>
        <Link target="_blank" className="text-4xl" href={'https://www.linkedin.com/in/md-habibur-rahman-habib/'}> <FaLinkedin /></Link>
        <Link target="_blank" className="text-4xl" href={'https://github.com/mhrhabib2004'}> <FaGithub /></Link>
        <Link target="_blank" className="text-4xl" href={'https://www.instagram.com/dm_habibur_rahman/'}> <FaInstagramSquare /></Link>
        <Link target="_blank" className="text-4xl" href={'https://discordapp.com/users/mhrhabib1'}> <FaDiscord /></Link>
      </div>
      <div className="flex justify-between mt-5">
        <Link href={'resume'} className="btn btn-active btn-secondary">See My Resume</Link>
        {/* <Link href={''} className="btn btn-active btn-secondary">Hire Me</Link> */}
      
      </div>
    </div>
  </div>
</div>
    );
};

export default Baner;