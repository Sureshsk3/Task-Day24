import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Fullstack() {
  let [data, setData] = useState([
    {
      id: 1,
      img: "/img/FSD/img (1).jpg",
      title: "E-Commerce Website",
      description:
        "The very first and best full-stack development project idea is creating an e-commerce website/application. As e-commerce websites require almost every concept of full-stack development that is from the front-end to the back-end, starting your career with this project can really upscale your skillset.",
    },
    {
      id: 2,
      img: "/img/FSD/img (2).jpg",
      title: "Online Learning App",
      description:
        "The next best full-stack development project idea is creating an online learning app. Creating this application will help you in adding value to your resume.",
    },
    {
      id: 3,
      img: "/img/FSD/img (3).jpg",
      title: "Social Media Platform",
      description:
        "Creating a social media platform is another easy yet exciting full-stack development project. You need to have features like creating profiles, adding pictures to your profile, connecting with friends, etc. You need to be good in skills like programming languages, frameworks such as React or Angular, and database management systems.",
    },
    {
      id: 4,
      img: "/img/FSD/img (4).jpg",
      title: "Task Management Application",
      description:
        "Task Management Application is another best full-stack development projects that beginners should definitely try. To build this application, you need to have a quality knowledge of programming languages (JavaScript, Python, Java), frameworks, database management systems, APIs, etc.",
    },
    {
      id: 5,
      img: "/img/FSD/img (5).jpg",
      title: "Portfolio Website",
      description:
        "Another top full-stack development project idea is creating a portfolio website. In this application, you can add features like entering your educational background details, projects undertaken, achievements you had, skills, hobbies, etc. and thus a candidate can create a portfolio that could be used in companies for recruitment purposes.",
    },
    {
      id: 6,
      img: "/img/FSD/img (6).jpg",
      title: "Gaming Application",
      description:
        "Another interesting full-stack development project idea that everyone would love to create is a gaming application. Games are something that interests everyone and thus building such an application would be fun. You need to be good in programming languages, frontend and backend development skills, database management systems, etc.",
    },
    {
      id: 7,
      img: "/img/FSD/img (7).jpg",
      title: "Quiz App",
      description:
        "The next is creating a quiz app which is very beneficial for college students. You need to have skills in programming languages, frameworks, database management systems, and many more. Some of the features may include – adding no questions, generating scorecards, etc. Some of the quiz applications are Primetime, Quiz Planet, etc.",
    },
    {
      id: 8,
      img: "/img/FSD/img (8).jpg",
      title: "Food Management Application",
      description:
        "Another top full-stack development project idea is a food management application. Some of the features include the category of food items, order lists, tracking the delivery of orders, etc. To create such an application, you need to learn programming languages, frameworks, and database management systems.",
    },
  ]);
  return (
    <>
      <h1 className="text-center mt-3">
        <i>FULL STACK DEVELOPEMENT JOB DETAIL'S</i>
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

export default Fullstack;
