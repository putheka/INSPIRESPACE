import React from "react";
import "../style/Team.css";
import { useTranslation } from "react-i18next";
const Team = () => {

  const { t } = useTranslation();
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title mx-auto">
          <h2>{t("team.title")}</h2>
          <p className="mt-4 mb-5">{t("team.p")}</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 team">
            <div className="thumbnail">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais"
                alt="..."
              className="team-img"
              />
              <div className="caption">
                <h4>Emily Johnson</h4>
                <p>Founder</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 team">
            <div className="thumbnail">
              <img
                src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833560.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais"
                alt="..."
                className="team-img"
              />
              <div className="caption">
                <h4>Olivia Davis</h4>
                <p>Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 team">
            <div className="thumbnail">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?size=626&ext=jpg&ga=GA1.1.2016474121.1701243185&semt=ais"
                alt="..."
                className="team-img"
              />
              <div className="caption">
                <h4>Ethan Williams</h4>
                <p>Creative manager</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 team">
            <div className="thumbnail">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg?size=626&ext=jpg&ga=GA1.1.2016474121.1701243185&semt=ais"
                alt="..."
                className="team-img"
              />
              <div className="caption">
                <h4>Benjamin Taylor</h4>
                <p>Operations Manager </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
