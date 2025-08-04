import { useTranslation } from "react-i18next";
import Card from "./card";
import LuppiImage from "../../assets/images/Luppi.png";
import Tresseme from "../../assets/images/tresseme.png";
import VR from "../../assets/images/VR.png";
import CEA from "../../assets/images/C&A.png";
import Degree from "../../assets/images/degree-us.png";
import IECLB from "../../assets/images/IECLB.png";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center w-full px-4 md:px-20 py-20"
    >
      <h2 className="text-white text-center text-3xl mb-4 font-semibold">
        {t("projects.title")}
      </h2>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
        <Card
          title={t("projects.cea.title")}
          description={t("projects.cea.description")}
          image={CEA}
          redirect="https://apps.apple.com/us/app/c-a-comprar-roupas/id1168148250"
        />
        <Card
          title={t("projects.vr.title")}
          description={t("projects.vr.description")}
          image={VR}
          redirect="https://apps.apple.com/br/app/superapp-vr/id667577139"
        />
        <Card
          title={t("projects.tresemme.title")}
          description={t("projects.tresemme.description")}
          image={Tresseme}
          redirect="https://www.tresemme.com/uk/home.html"
        />
        <Card
          title={t("projects.degree.title")}
          description={t("projects.degree.description")}
          image={Degree}
          redirect="https://www.degreedeodorant.com/us/en/home.html"
        />
        <Card
          title={t("projects.ieclb.title")}
          description={t("projects.ieclb.description")}
          image={IECLB}
          redirect="https://apps.apple.com/br/app/ieclb/id1565273790"
        />
        <Card
          title={t("projects.luppi.title")}
          description={t("projects.luppi.description")}
          image={LuppiImage}
          redirect="https://www.luppi.app/organizadores"
        />
      </div>
    </section>
  );
}
