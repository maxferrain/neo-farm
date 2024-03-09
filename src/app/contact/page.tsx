import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Свяжитесь с нами",
  description: "Форма для связи",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Свяжитесь с нами" />

      <Contact />
    </>
  );
};

export default ContactPage;
