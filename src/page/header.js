import React from "react";
import Button from 'react-bootstrap/Button';
import "../style/header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 dangerouslySetInnerHTML={{ __html: t("welcome.text") }} />
                <p>
                {t("welcome.p")}
                </p>

                <Button variant="success" as="a" href="#features" className="logo-button">
                 {t("welcome.button")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
