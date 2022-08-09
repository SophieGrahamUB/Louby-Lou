import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card/Card";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Scroller from "../components/Scroller/Scroller";
import Partners from "../components/Partners/Partners";
import servicesJSON from "./api/services.json";

const Services = () => {
  const isOdd = (num) => {
    return num % 2;
  };

  const [servicesAPI, setServicesAPI] = useState([]);

  const fetchData = () => {
    const data = servicesJSON;
    setServicesAPI([...servicesAPI, data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar button={true} title={"Services"} altText={"What can I do for you?"} />
      <Scroller />
      <Hero />

      {servicesAPI &&
        servicesAPI[0]?.data.map((item, idx) => (
          <Card
            key={item.attributes.serviceName}
            title={item.attributes.serviceName}
            desc={item.attributes.serviceShortDetails}
            src={`${item.attributes.serviceImageURL}`}
            button={true}
            expanded={item.attributes.serviceExpandedDetails}
            left={isOdd(idx) ? false : true}
          />
        ))}
      <Partners />
      <Contact />
    </div>
  );
};

export default Services;
