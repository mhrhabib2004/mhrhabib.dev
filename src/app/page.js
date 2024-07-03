import AboutMe from "@/Components/AboutMe/AboutMe";
import Baner from "@/Components/Baner/Baner";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";


export default function Home() {
  return (
    <div>
      <Baner/>
<AboutMe/>
<Skills></Skills>
<Projects/>
<Contact></Contact>
<Footer></Footer>

    </div>
  );
}
