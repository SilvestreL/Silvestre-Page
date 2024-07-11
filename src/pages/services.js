import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation } from "swiper";
import styles from "../styles/Services.module.css";

SwiperCore.use([Pagination, Navigation]);

const projects = [
  {
    title: "Projeto Clínica Médica",
    description: "Aplicação web para agendamento de consultas médicas.",
    technologies: ["ReactJS"],
  },
  {
    title: "Projeto Kanban Board",
    description: "Quadro Kanban virtual que simula o fluxo de trabalho.",
    technologies: ["ReactJS", "Firebase"],
  },
  // Adicione mais projetos conforme necessário
];

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.servicesTitle}>Projetos</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <ul className={styles.cardTechnologies}>
                {project.technologies.map((tech, i) => (
                  <li key={i} className={styles.cardTechnology}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
