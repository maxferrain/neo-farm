import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "О нас",
  description: "Информация о команде",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="О нас" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
