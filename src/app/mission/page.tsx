import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Наши цели",
  description: "Цели компании в реализации проекта",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Наши цели" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
