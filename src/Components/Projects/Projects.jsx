import Image from "next/image";
import Link from "next/link";


const Projects = () => {
    return (
        <div className="bg-gradient-to-r from-purple-300">
    <div>
        <h1 className="md:text-5xl text-2xl text-center font-bold">My recent Projects</h1>
    </div>
    <div className="grid w-[95%] mx-auto lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
{/* 1 project */}
<div className="card bg-base-100 w-auto shadow-lg mt-5">
  <figure>
    <Image className="" height={500} width={500}
      src="https://i.ibb.co/bg1VW19/project-9.jpg"
      alt="Dream Home" />
  </figure>
  <div className="card-body bg-gradient-to-b from-pink-400to-purple-100">
    <h2 className="card-title">
    Project Name : Dream Home
      <Link className="btn-link" target="_blank" href={'https://assainment-nine-by-habib.web.app/'}>visit</Link>
    </h2>
    <h1 className="text-lg font-medium">GitHub client Repo : <Link className=" btn-link" target="_blank"  href={'https://github.com/mhrhabib2004/my-project-nine'}>visit</Link></h1>
    
    <p className="text-lg font-medium">Description : <span className="text-[16px] font-normal"> A sanctuary where comfort meets elegance. Enjoy spacious interiors, abundant natural light, and exquisite finishes. Every detail, from the cozy fireplace to the gourmet kitchen, is designed to create cherished memories and provide an unparalleled living experience. Welcome to a home where dreams come to life. </span></p>
    <h1 className="text-lg font-medium">Features : <span className="text-[16px] font-normal">
    <li>User friendly interface and easy to navigate</li>
    <li>For details click the view property button, it's also helpful</li>
    <li>Your choice home aslo added here in also team,contact us, and two conditional rout</li>
    
        </span> 
    
    </h1>
    <h1 className="text-lg font-medium">Technologies Used : <span className="text-[16px] font-normal"> Tailwind CSS, DaisyUI, React Router, React Icon, PropTypes, Firebase, Moment.js, AOS Animation, React Hook Form, React Toast, React Helmet, Animate.css </span></h1>
  </div>
</div>
{/* end project */}
{/* 2 project */}
<div className="card bg-base-100 w-auto shadow-lg mt-5">
  <figure>
    <Image className="" height={500} width={500}
      src="https://i.ibb.co/dg87DL7/project-11.jpg"
      alt="Haven Library" />
  </figure>
  <div className="card-body bg-gradient-to-b from-pink-400to-purple-100">
    <h2 className="card-title">
    Project Name : Literary Haven Library
      <Link className="btn-link" target="_blank" href={''}>visit</Link>
    </h2>
    <h1 className="text-lg font-medium">GitHub client Repo : <Link className=" btn-link" target="_blank"  href={'https://github.com/mhrhabib2004/assainment-elaven'}>visit</Link></h1>
    
    <p className="text-lg font-medium">Description : <span className="text-[16px] font-normal"> Literary Haven Library is a comprehensive online platform designed to provide book enthusiasts with an exceptional reading experience. This project leverages modern web development technologies to create an interactive, user-friendly interface that caters to the diverse needs of readers. </span></p>
    <h1 className="text-lg font-medium">Features : <span className="text-[16px] font-normal">
       
    <li> Display detailed information about each book, including image, description, subjects, etc.</li>
    <li> Send and process requests for borrowing books.</li>
    <li> Secure access to user accounts and data using JWT tokens.</li>
        </span></h1>
    <h1 className="text-lg font-medium">Technologies Used : <span className="text-[16px] font-normal"> React Router, Tailwind CSS, DaisyUI, React Icon, React Tooltip, PropTypes, react-simple-typewriter, axios, react-datepicker, Firebase, sweetalert2 </span></h1>
  </div>
</div>
{/* end project */}
{/* 3 project */}
<div className="card bg-base-100 w-auto shadow-lg mt-5">
  <figure>
    <Image className="" height={500} width={500}
      src="https://i.ibb.co/hKRfxBD/project-12.jpg"
      alt="Matrimony" />
  </figure>
  <div className="card-body bg-gradient-to-b from-pink-400to-purple-100">
    <h2 className="card-title">
    Project Name : Matrimony
      <Link className="btn-link" target="_blank" href={'https://matrimony-74eaf.web.app'}>visit</Link>
    </h2>
    <h1 className="text-lg font-medium">GitHub client Repo : <Link className=" btn-link" target="_blank"  href={'https://github.com/mhrhabib2004/my-project-12-client'}>visit</Link></h1>
    
    <p className="text-lg font-medium">Description :  <span className="text-[16px] font-normal"> Matrimony is a streamlined matchmaking platform that connects individuals for meaningful relationships, offering robust search tools and secure communication features to help users find companionship, love, or marriage effortlessly. Designed to foster lasting connections with intuitive interface and reliable matchmaking.</span></p>
    <h1 className="text-lg font-medium">Features : <span className="text-[16px] font-normal"> <li>Efficiently manage different user roles such as admin, premium, and user with intuitive controls.</li>
    <li> Comprehensive dashboard for managing users and content.</li>
    <li> Efficiently handle and validate forms using react-hook-form.</li></span></h1>
    <h1 className="text-lg font-medium">Technologies Used : <span className="text-[16px] font-normal"> @headlessui/react, @smastrom/react-rating, @tanstack/react-query, axios, firebase, react, react-dom, react-hook-form, react-hot-toast, react-icons, react-router-dom, sweetalert2, swiper </span></h1>
  </div>
</div>
{/* end project */}
    </div>
        </div>
    );
};

export default Projects;