/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background.jpg";

const imageAltText = "orange and white abstract painting";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello there! I'm not just a software engineer; I'm a passionate architect of digital solutions. Rooted in a strong academic background and hands-on professional experience, I bring a solid foundation in computer science and software engineering to the table. My expertise lies in crafting robust and scalable backend systems, where every line of code is a testament to precision and innovation.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web development",
  "Back-End Programming",
  "Database Management",
  "API Design",
  "System Architecture",
  "Software Optimization",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "What drives me? I'm deeply passionate about leveraging technology to create positive change in the world. I champion diversity and inclusion in tech, believing that innovation thrives when perspectives from all walks of life converge. My mission is to build not just functional backend systems but to pave the way for a more inclusive and accessible digital future.";

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
