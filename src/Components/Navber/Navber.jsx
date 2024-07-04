import Image from "next/image";
import Link from "next/link";


const Navber = () => {
    const navlinks= <>
  
    <div className="flex gap-5 text-[16px] font-medium ">
    <Link href={'/'}><li> Home </li></Link>
    {/* <Link href={'aboutme'}><li> About Me </li></Link> */}
    <Link href={'skills'}><li> Skills </li></Link>
    <Link href={'resume'}><li> My Resume </li></Link>
    </div>
   
    </>
    return (
        <div className="navbar  top-0 left-0 right-0 fixed z-10  opacity-60  rounded-md bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navlinks}
        
      </ul>
    </div>
    <a className="btn  text-xl">
      {/* <Image className="" width={100}
    height={120}alt="" src="https://i.ibb.co/qmybTCh/Whats-App-Image-2024-07-03-at-05-36-24-23986f04.jpg"></Image> */}
  <span className="md:text-3xl tex-xl font-bold">DEV MHR HABIB</span>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navber;