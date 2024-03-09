import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Юрий Максимов",
    designation: "Founder, CEO",
    companies: 'ФармНавигатор, Xerox, R.O.C.S',
    image: "/images/team/yury.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Максим Кузнецов",
    designation: "CTO",
    companies: 'Яндекс Банк, Минтранс РФ',
    image: "/images/team/max.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Иван Кантемиров",
    designation: "CPO",
    companies: 'Газпром',
    image: "/images/team/ivan.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            title="Наша команда"
            paragraph="Мы - это группа квалифицированных специалистов, объединенных одной миссией - открыть полный потенциал цифровых технологий для сельскохозяйственного бизнеса. Мы набрали лучших специалистов в области агробизнеса, финтеха и IT, чтобы предлагать нашим клиентам качественные и действенные решения."
            width="940px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
