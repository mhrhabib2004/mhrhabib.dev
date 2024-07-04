import Link from "next/link";
import { FaDiscord, FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
    <div className="flex items-center mt-5 justify-center gap-5">
        <Link className="text-4xl" href={'https://www.facebook.com/dmmhrhabib'} target="_blank"> <FaFacebook /> </Link>
        <Link target="_blank" className="text-4xl" href={'https://www.linkedin.com/in/md-habibur-rahman-habib/'}> <FaLinkedin /></Link>
        <Link target="_blank" className="text-4xl" href={'https://github.com/mhrhabib2004'}> <FaGithub /></Link>
        <Link target="_blank" className="text-4xl" href={'https://www.instagram.com/dm_habibur_rahman/'}> <FaInstagramSquare /></Link>
        <Link target="_blank" className="text-4xl" href={'https://discordapp.com/users/mhrhabib1'}> <FaDiscord /></Link>
      </div>
    </div>
  </nav>
</footer>
    );
};

export default Footer;