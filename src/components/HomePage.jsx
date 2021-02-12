import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const styles = {
    container: {
      maxWidth: "60%",
      textAlign: "center",
      justifyContent: "center",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };
  return (
    <div>
      <br />
      <div>
        <div
          style={styles.container}
          className="card text-white bg-primary mb-3"
        >
          <h1 className="display-4">Solutions for your business</h1>
          <p className="lead">
            we are a group of marketers and programmers, who use advanced modern
            marketing technologies, and create the best solutions in order to
            distinguish your business from the rest in your field
          </p>

          <hr className="my-4" />

          <p className="lead">
            <Link className="btn btn-primary btn-lg" to="about" role="button">
              Learn more
            </Link>
          </p>
        </div>
        <div
          style={styles.container}
          className="card text-white bg-primary mb-3"
        >
          <h1 className="display-4">Creative</h1>
          <p className="lead">
            Our creative designers and copywriters, will make sure your
            potential clients are interested in exactly your content.
          </p>

          <hr className="my-4" />
          <p className="lead">
            <Link className="btn btn-primary btn-lg" to="about" role="button">
              Learn more
            </Link>
          </p>
        </div>{" "}
        <div
          style={styles.container}
          className="card text-white bg-primary mb-3"
        >
          <h1 className="display-4">All in one</h1>
          <p className="lead">
            While other agencies may provide discrete services, Marketing
            Solutions delivers the fully integrated marketing communications
            programmes our clients need to achieve bottom-line results.
          </p>

          <hr className="my-4" />
          <p className="lead">
            <Link className="btn btn-primary btn-lg" to="about" role="button">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
