import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Преимущества перед рынком"
          title="Что мы делаем?"
          paragraph="Мир цифрового агробизнеса открывает перед вами неограниченные возможности. Наша платформа спроектирована так, чтобы предоставить вам все необходимые инструменты и услуги для вашего сельскохозяйственного бизнеса:"
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
