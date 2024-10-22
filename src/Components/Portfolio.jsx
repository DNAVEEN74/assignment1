import React from "react";
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Realtime Collaborative Text Editor",
    description:
      "A web application enabling multiple users to edit documents simultaneously in real-time, leveraging Yjs and y-websocket for synchronization.",
    url: "https://collabeditfrontend.vercel.app/",
  },
  {
    title: "YouTube Video Downloader",
    description:
      "A web application that allows users to download videos from YouTube.",
    url: "https://github.com/DNAVEEN74/YT-Video-Downloader",
  },
  {
    title: "Pokémon-Themed Container",
    description:
      "A visually engaging project using React, TypeScript, and Tailwind CSS to create a themed container inspired by Pokémon, focusing on responsive design and user experience.",
    url: "https://pokemon-cards-orcin.vercel.app/",
  },
  {
    title: "To-Do Application",
    description:
      "A task management tool that allows users to create, edit, and delete tasks, helping them organize their daily activities.",
    url: "https://github.com/DNAVEEN74/todo-project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
