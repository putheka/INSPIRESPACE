import React from "react";
import "../style/comment.css";
import { useTranslation } from "react-i18next";
const Comment = () => {
  const { t } = useTranslation();
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>{t("comment.title")}</h2>
        </div>
        <div className="row">
                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.1.2016474121.1701243185&semt=ais" alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>{t("comment.comment1_p")}</p>
                      <div>John Doe</div>
                    </div>
                  </div>
                  
                </div>
                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?size=626&ext=jpg&ga=GA1.1.2016474121.1701243185&semt=ais" alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>{t("comment.comment2_p")}</p>
                      <div>Johnathan Doe</div>
                    </div>
                  </div>
                  
                </div>
                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg?size=626&ext=jpg&ga=GA1.1.2016474121.1701243185&semt=ais" alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>{t("comment.comment3_p")}</p>
                      <div>John Doe</div>
                    </div>
                  </div>
                  
                </div>
                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?size=626&ext=jpg" alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>{t("comment.comment4_p")}</p>
                      <div>Johnathan Doe</div>
                    </div>
                  </div>
                  
                </div>
                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg" alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>{t("comment.comment5_p")}</p>
                      <div>Johnathan Doe</div>
                    </div>
                  </div>
                  
                </div>

        </div>
      </div>
    </div>
  );
};

export default Comment;
