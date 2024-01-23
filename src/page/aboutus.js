import React from "react";
import "../style/aboutus.css";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (

    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <img src="https://img.freepik.com/free-psd/3d-illustration-people-working-marketing_23-2150417382.jpg?size=626&ext=jpg&ga=GA1.1.2016474121.1701243185&semt=ais" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t("about.title")}</h2>
              <p className="about-font">{t("about.description")}</p>
              <h3>{t("about.why")}</h3>
              <div className="row about-font">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>{t("about.craftsmanship")}</li>
                    <li>{t("about.timelessDesign")}</li>
                    <li>{t("about.customization")}</li>
                    <li>{t("about.qualityMaterials")}</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 about-font">
                  <ul>
                    <li>{t("about.exceptionalComfort")}</li>
                    <li>{t("about.affordableLuxury")}</li>
                    <li>{t("about.dedicatedCustomerService")}</li>
                    <li>{t("about.sustainabilityCommitment")}</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
