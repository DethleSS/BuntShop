import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Связаться с нами" />
          <form className="mt-5">
            {/* first name */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Иван Иванов"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Тема"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="Сообщение"
              />
            </div>
            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="отправить"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
