import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Cyber() {
  let [data, setData] = useState([
    {
      id: 1,
      img: "/img/CyberSec/img (1).jpg",
      title: "Application Security",
      description:
        "Application security constitutes the measures and countermeasures meant to tackle threats and vulnerabilities that arise in the development stage of an application such as design application, development, deployment, maintenance, upgrade, etc.",
    },
    {
      id: 2,
      img: "/img/CyberSec/img (2).jpg",
      title: "Information security",
      description:
        "nformation security refers to the protection of information and data from theft, unauthorized access breaches, etc. primarily to uphold user privacy and prevent identity theft.",
    },
    {
      id: 3,
      img: "/img/CyberSec/img (3).jpg",
      title: "Network Security",
      description:
        "Network security is a broad concept encompassing a wide range of technologies, processes, and devices. In simple terms, it constitutes monitoring and preventing authorized access.",
    },
    {
      id: 4,
      img: "/img/CyberSec/img (4).jpg",
      title: "Website Security",
      description:
        "Just like the name suggests Website security is used to prevent and protect websites from cyber security risks on the Internet. The holistic website security programs will cover the websites, databases, applications, source codes, and files.",
    },
    {
      id: 5,
      img: "/img/CyberSec/img (5).jpg",
      title: "Endpoint Security",
      description:
        "Endpoint security enables organizations to protect their servers, workstations, and mobile devices from remote and local cyber attacks since devices on a network are interconnected.",
    },
    {
      id: 6,
      img: "/img/CyberSec/img (6).jpg",
      title: "Cloud Security",
      description:
        "Now, Cloud Security is a subset of cybersecurity that focuses on ensuring protection for cloud computing systems. It includes maintaining Security and data privacy online spanning applications, infrastructure, and platforms.",
    },
    {
      id: 7,
      img: "/img/CyberSec/img (7).jpg",
      title: "Internet of Things",
      description:
        "The Internet of Things or short “IoT” is connecting billions of devices over the Internet to share data with each other. They are embedded with sensors and other software.",
    },
    {
      id: 8,
      img: "/img/CyberSec/img (8).jpg",
      title: "Different threats in IoT security.  ",
      description: `MITM or man in the middle is a security breach where cyber criminals are placed between a communication system of a client and the server. 
      Advanced persistent threats or apt occur when the attackers gain unauthorized access to a system or a network and remain undetected for a long duration of time.`,
    },
  ]);
  return (
    <>
      <h1 className="text-center mt-3">
        <i>Cybersecurity and Threats Involved</i>
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

export default Cyber;
