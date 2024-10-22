import React from "react";
import image from "../images/hhholographic.png";

const imageAltText = "purple and blue abstract background";

const description =
  "Aspiring Full-Stack Developer with experience in React, TypeScript, real-time collaboration tools, and backend integration. Passionate about solving real-world problems.";

const skillsList = [
  "React js",
  "Express js",
  "Tailwind css",
  "Typescript",
  "MongoDB",
  "JWT Authentication",
];

const detailOrQuote =
  "We’re here to put a dent in the universe. Otherwise, why else even be here? Steve Jobs";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
