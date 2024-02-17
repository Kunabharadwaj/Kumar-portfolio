import React from "react";
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
  const services = [
    {
      title: "Beautiful Designs",
      description:
        "Creating elegant designs suited for your needs following core design theory.",
      tools: "Design tools I use",
      toolsList: ["Adobe XD", "Figma", "Photoshop"],
    },
    {
        title: "Beautiful Designs",
        description:
          "Creating elegant designs suited for your needs following core design theory.",
        tools: "Design tools I use",
        toolsList: ["XD", "WordPress", "Photoshop"],
      },
      {
        title: "Beautiful Designs",
        description:
          "Creating elegant designs suited for your needs following core design theory.",
        tools: "Design tools I use",
        toolsList: ["Farmer Motion", "Figma", "Photoshop"],
      },
  ];
  return (
    <section ref={ref} className="grid mt-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service,index) => {
        return (
          <motion.div
          key={index}
          initial={{opacity: 0}}
          animate={{opacity: inView ? 1: 0}}
          transition={{duration: .5, delay: index * 0.15}}
          exit={{opacity: 0}}
           className="container mx-auto bg-white rounded-3xl shadow-lg p-8">
            <div className="text-center">
              <h4 className="mb-2">{service.title}</h4>
              <p className="mb-3">{service.description}</p>
              <p className="text-teal-600 mb-2">{service.tools}</p>
              {service.toolsList.map((tool) => {
                return <p>{tool}</p>;
              })}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Card;
