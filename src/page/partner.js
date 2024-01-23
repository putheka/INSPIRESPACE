import React from "react";
import "../style/partner.css";
import { useTranslation } from "react-i18next";

const Partner = () => {
  const { t } = useTranslation();
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4 mt-5"> {t("partner.title")}</h2>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <img
              src="https://imgs.search.brave.com/HSXiRCQvZWUmAZHYBh9jq5GAfhZIqUk_Sk80irToBjQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MWYu/cG5n"
              alt="image"
              className="img-fluid"
            />
            <h3 className="parter-text">{t("partner.parent1_h3")}</h3>
            <p className="parter-text">{t("partner.partner1_p")}</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <img
              src="https://imgs.search.brave.com/n3sLYiMh3B3K2yWETMHO_QUUmaDnDfidiPyu03vr5q8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n"
              alt="image"
              className="img-fluid"
            />
            <h3 className="parter-text">{t("partner.partner2_h3")}</h3>
            <p className="parter-text">{t("partner.partner2_p")}</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <img
              src="https://imgs.search.brave.com/phRt8N4IhTmUqYBbygEGB0j72yuLqw4Jnk_btTdddTU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEx/L2xvZ28tU3RhcmJ1/Y2tzLTUwMHgyODEu/cG5n"
              alt="image"
              className="img-fluid"
            />
            <h3 className="parter-text">{t("partner.partner3_h3")}</h3>
            <p className="parter-text">{t("partner.partner3_p")}</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <img
              src="https://imgs.search.brave.com/1F4mcQoQOOt3AVDlDIcSzjZnNS8Ikp6AK-pXtAnQ0sI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY4NjM5MDc0/N3Rlc2xhLWxvZ28t/dHJhbnNwYXJlbnQu/cG5n"
              alt="image"
              className="img-fluid"
            />
            <h3 className="parter-text">{t("partner.partner4_h3")}</h3>
            <p className="parter-text">{t("partner.partner4_p")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
