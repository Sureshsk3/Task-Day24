import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Career() {
  let [data, setData] = useState([
    {
      id: 1,
      img: "./../../../public/img/Career/img (1).jpg",
      title: "Software Engineering Manager",
      description:
        "In an administrative job reporting to upper management, the role of a software engineering manager is to supervise and guide the work of other software engineers on projects.",
    },
    {
      id: 2,
      img: "./../../../public/img/Career/img (2).jpg",
      title: "Mobile Applications Developer",
      description:
        "The newest mobile gadgets and software are revolutionizing how we interact with one another, do business, and get news and entertainment.",
    },
    {
      id: 3,
      img: "./../../../public/img/Career/img (3).jpg",
      title: "Information Systems Security Manager",
      description:
        'A manager of information security is in charge of preventing computer viruses, security lapses, and harmful hacker attacks on a company"s computers, networks, and data.',
    },
    {
      id: 4,
      img: "./../../../public/img/Career/img (4).jpg",
      title: "Database Manager",
      description: "A database manager is in charge of creating and managing the systems an organization uses to store and arrange data for businesses. ",
    },
    {
      id: 5,
      img: "./../../../public/img/Career/img (5).jpg",
      title: "Data Security Analyst",
      description: "Data security experts ensure to keep computer networks and systems safe from viruses and hackers. ",
    },
    {
      id: 6,
      img: "./../../../public/img/Career/img (6).jpg",
      title: "Product Manager",
      description: "Next on the list of high-paying tech jobs is a product manager. Product managers are responsible for making an operating plan that can help achieve strategic and tactical goals.",
    },
    {
      id: 7,
      img: "./../../../public/img/Career/img (7).jpg",
      title: "Artificial Intelligence (AI) Engineer",
      description: "AI Engineers are in high demand due to the rapid integration of AI technologies across industries. These professionals are responsible for designing, developing, and implementing AI-powered solutions.",
    },
    {
      id: 8,
      img: "./../../../public/img/Career/img (8).jpg",
      title: "Front-End Developer",
      description: "Front-end developers are experts who specialize in designing and creating the visual components of websites and applications, with the aim of making them engaging and user-friendly.",
    },
  ]);
  return (
    <>
      <h1 className="text-center mt-3">
        <i>Highest Paying Tech Jobs | Best Paying Jobs in Technology</i>
      </h1>
      <section className="row all-card">
        {data.map((e) => {
          return (
            <Card style={{ width: "18rem" }} className=" m-3 mt-5" key={e.id}>
              <Card.Img variant="top" src={e.img} className="mt-3 img-all" />
              <Card.Body>
                <Card.Title className="mb-3">{e.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {e.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </section>
    </>
  );
}

export default Career;
