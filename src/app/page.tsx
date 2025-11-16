import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FacesOfInefficiency from "@/components/FacesOfInefficiency";
import SolutionsEcosystem from "@/components/SolutionsEcosystem";
import InnovationLab from "@/components/InnovationLab";
import Articles from "@/components/Articles";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background-dark text-gray-300 dark:bg-background-dark dark:text-gray-300">
      <Header />
      <main>
        <Hero />
        <FacesOfInefficiency />
        <SolutionsEcosystem />
        <InnovationLab />
        <Articles />
        <Testimonials />
        <Awards />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
