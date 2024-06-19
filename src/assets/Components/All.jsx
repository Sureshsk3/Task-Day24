import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function All() {
  let [data, setData] = useState([
    {
      id: 1,
      img: "./../../../public/img/python/Phython.jpeg",
      title: "Python with IIT Certification",
      description:
        "The “Python with IIT Certification” course offered by GUVI is an exceptional opportunity for learners to delve into the world of Python programming.",
    },
    {
      id: 2,
      img: "./../../../public/img/python/ChatGpt.jpg",
      title: "ChatGPT for Everyone",
      description:
        "“ChatGPT for Everyone” is a course designed to introduce learners to the groundbreaking world of ChatGPT, an AI language model revolutionizing the way.",
    },
    {
      id: 3,
      img: "./../../../public/img/python/Data.jpeg",
      title: "Introduction to Data Engineering and Big Data",
      description:
        "The “Introduction to Data Engineering and Big Data” course offered by GUVI is a comprehensive program designed to equip learners with the essential skills required in the field.",
    },
    {
      id: 4,
      img: "./../../../public/img/python/AI.jpeg",
      title: "Generative AI",
      description:
        "Generative AI, or gen AI, represents a branch of artificial intelligence that focuses on creating new data and content.Unlike traditional AI models that primarily analyze and predict.",
    },
  ]);
  return (<>
    <h1 className="text-center mt-3"><i>All it related course's Details</i></h1>
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

export default All;
