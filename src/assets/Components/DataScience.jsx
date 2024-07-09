import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function DataScience() {
  let [data, setData] = useState([
    {
      id: 1,
      img: "/img/DataSci/img (1).jpg",
      title: "Data Analyst",
      description:
        "Data analysts play a crucial role in data science, focusing on interpreting and visualizing data to extract meaningful insights. They create reports and dashboards, helping organizations make data-driven decisions.",
    },
    {
      id: 2,
      img: "/img/DataSci/img (2).jpg",
      title: "Business Analyst",
      description:
        "Business analysts bridge the gap between data science and business operations. They use data to identify opportunities for improvement, develop strategies, and communicate findings to key stakeholders.",
    },
    {
      id: 3,
      img: "/img/DataSci/img (3).jpg",
      title: "Data Scientist Manager",
      description:
        "Data science managers oversee the entire data science team, ensuring that projects are on track and aligned with the company’s objectives. They may not code themselves but understand the technical aspects of data science.",
    },
    {
      id: 4,
      img: "/img/DataSci/img (4).jpg",
      title: "Data Science Consultant",
      description:
        "Consultants provide expert advice to businesses on data science strategies and solutions. They don’t necessarily code but guide organizations on how to leverage data for competitive advantages.",
    },
    {
      id: 5,
      img: "/img/DataSci/img (5).jpg",
      title: "Machine Learning Engineer",
      description:
        "While this role typically involves coding, there’s a growing demand for Machine Learning Engineers with a strong focus on model deployment and optimization rather than writing code from scratch. They ensure models work efficiently in a production environment.",
    },
    {
      id: 6,
      img: "/img/DataSci/img (6).jpg",
      title: "Data Product Manager",
      description:
        "Data product managers collaborate with cross-functional teams to develop data-driven products and services. Their role involves defining product roadmaps and prioritizing features based on data insights.",
    },
    {
      id: 7,
      img: "/img/DataSci/img (7).jpg",
      title: "Data Privacy Officer",
      description:
        "With increased concern about data privacy, companies need professionals to manage data security and compliance. Data Privacy Officers ensure that data is handled responsibly and in accordance with regulations.",
    },
    {
      id: 8,
      img: "/img/DataSci/img (8).jpg",
      title: "Data Visualization Designer",
      description:
        "Data visualization designers create compelling and easy-to-understand visuals that convey complex data. They help tell a story with data, making it accessible to a wider audience.",
    },
  ]);
  return (
    <>
      <h1 className="text-center mt-3">
        <i>DATA SCIENCE JOB DETAIL'S</i>
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

export default DataScience;
