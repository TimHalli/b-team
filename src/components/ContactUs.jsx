import React from "react";

export default function ContactUs() {
  return (
    <div>
      <br />
      <div className="list-group">
        <h2 className="text-primary">Contact us</h2>
        <div className="mb-3">
          <form
            style={{ maxWidth: "20%" }}
            action="https://formspree.io/f/xbjpbnyz"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              id="inputDefault"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="name@example.com"
              className="form-control"
              id="inputDefault"
            />
            <input
              type="submit"
              value="Send"
              className="btn btn-primary btn-lg btn-block"
            />
          </form>
        </div>

        <div className="mb-3">
          <p>
            Our team offers the internet marketing solutions needed to create
            and manage a sales funnel that reaches audiences across a variety of
            industries. We design truly integrated programs that are
            particularly well suited for multinational companies seeking to
            maximize brand value. Contact us to learn about our approach to
            content strategy, influencer relationships and integrated marketing
            communications.
          </p>
        </div>
      </div>
    </div>
  );
}
