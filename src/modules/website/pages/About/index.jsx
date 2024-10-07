import { Header, Footer } from "../../layouts";
import { AboutUs, FAQ } from "../../components";

const About = () => {
  return (
    <main className="relative">
      <Header />
      <AboutUs />
      <FAQ />
      <Footer />
    </main>
  );
};

export default About;
