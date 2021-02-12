import React from "react";

export default function About() {
  const selectItem = (e) => {
    const item1 = document.querySelector("#item-1");
    const item2 = document.querySelector("#item-2");
    const item3 = document.querySelector("#item-3");
    const item4 = document.querySelector("#item-4");

    const content1 = document.querySelector("#content1");
    const content2 = document.querySelector("#content2");
    const content3 = document.querySelector("#content3");
    const content4 = document.querySelector("#content4");

    if (e.target.id === "item-1") {
      item1.classList.add("active");
      content1.classList.add("show");
      content1.classList.add("active");
    } else {
      item1.classList.remove("active");
      content1.classList.remove("show");
      content1.classList.remove("active");
    }

    if (e.target.id === "item-2") {
      item2.classList.add("active");
      content2.classList.add("show");
      content2.classList.add("active");
    } else {
      item2.classList.remove("active");
      content2.classList.remove("show");
      content2.classList.remove("active");
    }

    if (e.target.id === "item-3") {
      item3.classList.add("active");
      content3.classList.add("show");
      content3.classList.add("active");
    } else {
      item3.classList.remove("active");
      content3.classList.remove("show");
      content3.classList.remove("active");
    }

    if (e.target.id === "item-4") {
      item4.classList.add("active");
      content4.classList.add("show");
      content4.classList.add("active");
    } else {
      item4.classList.remove("active");
      content4.classList.remove("show");
      content4.classList.remove("active");
    }
  };

  return (
    <div style={{ marginTop: 50 }}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            onClick={selectItem}
            id="item-1"
            className="nav-link active"
            data-toggle="tab"
          >
            OUR SERVICE OFFERING
          </a>
        </li>

        <li className="nav-item">
          <a
            onClick={selectItem}
            id="item-2"
            className="nav-link"
            data-toggle="tab"
          >
            STRATEGY DEVELOPMENT & INSIGHTS
          </a>
        </li>

        <li className="nav-item">
          <a onClick={selectItem} id="item-3" className="nav-link">
            CONTENT MARKETING
          </a>
        </li>

        <li className="nav-item">
          <a
            onClick={selectItem}
            id="item-4"
            className="nav-link"
            data-toggle="tab"
          >
            INFLUENCER RELATIONS
          </a>
        </li>
      </ul>

      <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade show active" id="content1">
          <br />{" "}
          <h4 className="card-title">INTEGRATED MARKETING COMMUNICATIONS</h4>
          <p>
            While other agencies may provide discrete services, "B Team"
            delivers the fully integrated marketing communications programmes
            our clients need to achieve bottom-line results.
            <br />
            <br />
            We focus on adding value by delivering consistent, connected and
            cohesive marketing communications campaigns. To do this "B Team" is
            aligned around five service areas: strategy development & insights,
            content marketing, influencer relations, digital marketing
            communications and commstech & analytics.
          </p>
        </div>

        <div className="tab-pane fade" id="content2">
          <br />{" "}
          <h4 className="card-title">THE FOUNDATION OF COMMUNICATIONS</h4>
          <p>
            Understanding a customer's markets and its strategies establishes
            the foundation on which the strategic communications plan is built.
            Once created all marketing communications activities flow from the
            strategic plan and are measured against its objectives.
            <br />
            <br />
            Various elements of research are employed to provide insights for
            the development of the communications plan: from monitoring
            competitive positioning, industry trends and customer persona
            messaging to customer journey communications.
          </p>
        </div>

        <div className="tab-pane fade" id="content3">
          <br /> <h4 className="card-title">TELLING YOUR STORY</h4>
          <p>
            Our technology have a rich reservoir of (often untapped) stories of
            innovation and invention. We understand and translate complex
            technical content into comprehensive and effective communications
            campaigns for you to engage with your key audiences in sector such
            as automation.
          </p>
        </div>

        <div className="tab-pane fade" id="content4">
          <br /> <h4 className="card-title">KNOWING WHO TO TALK TO</h4>
          <p>
            A planned and effectively managed flow of information about a
            company's products, services and activities to the appropriate
            influencers, and through them to targeted audiences, is fundamental
            to all marketing programmes. We have comprehensive, 'live', global
            databases and are continuously forging close working relationships
            with key industrial publications, journalists, bloggers and other
            influencers..
            <br />
            <br />
            We regularly manage major international press conferences, media
            tours and press briefings which ensure in-depth coverage of
            significant news items and business initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}
