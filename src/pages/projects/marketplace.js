// pages/marketplace.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Marketplace.module.css";

const Marketplace = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col md={8}>
          <h1>Projeto Marketplace</h1>
          <div className={styles.projectOverview}>
            <p>
              Este é um projeto desenvolvido para criar uma plataforma de
              comércio eletrônico onde os usuários podem comprar e vender
              produtos. Aqui, tem-se uma visão geral das tecnologias utilizadas,
              como configurar o ambiente de desenvolvimento e executar o
              projeto.
            </p>
            <p>
              O Projeto Marketplace é uma aplicação full-stack que permite aos
              usuários navegar, listar e comprar produtos. Ele foi desenvolvido
              utilizando uma variedade de tecnologias modernas para garantir uma
              experiência de usuário fluida e um back-end robusto.
            </p>
          </div>

          <div className={styles.technologies}>
            <h5>Tecnologias Utilizadas</h5>
            <div className={styles.techTitle}>Front-end</div>
            <ul>
              <li>
                ReactJS: Utilizado para a construção da interface do usuário.{" "}
              </li>
              <li>
                Framer Motion: Biblioteca de animação para React, utilizada para
                adicionar animações fluidas e interações aos componentes da
                aplicação, proporcionando uma experiência visual atraente.
              </li>
              <li>
                Vite: Ferramenta de build que oferece um ambiente de
                desenvolvimento rápido e eficiente para projetos React. Vite
                melhora a performance e facilita o desenvolvimento com HMR (Hot
                Module Replacement).
              </li>
            </ul>
            <div className={styles.techTitle}>Back-end</div>
            <ul>
              <li>
                NodeJS: Plataforma de execução de JavaScript do lado do
                servidor, utilizada para criar um back-end eficiente e
                escalável.
              </li>
              <li>
                Express: Framework para NodeJS que simplifica a construção de
                APIs RESTful. Utilizado para gerenciar as rotas e middlewares do
                servidor.
              </li>
            </ul>
            <div className={styles.techTitle}>Banco de Dados</div>
            <ul>
              <li>
                MySQL: Sistema de gerenciamento de banco de dados relacional
                utilizado para armazenar informações dos produtos, usuários e
                transações. Escolhido por sua performance, escalabilidade e
                robustez.
              </li>
            </ul>
            <div className={styles.techTitle}>Outras Tecnologias</div>
            <ul>
              <li>
                API Rest: Arquitetura utilizada para comunicação entre o
                front-end e o back-end, facilitando a manipulação de dados entre
                o cliente e o servidor.
              </li>
              <li>
                GIT/GitHub: Sistema de controle de versão usado para gerenciar o
                código-fonte do projeto. GitHub é utilizado para armazenar e
                colaborar no repositório.
              </li>
              <li>
                Jest: Framework de teste utilizado para garantir a qualidade do
                código e a confiabilidade do sistema. Jest facilita a criação de
                testes unitários para componentes e funções.
              </li>
            </ul>
          </div>

          <div className={styles.images}>
            <h5>Imagens do Projeto</h5>
            <p>Adicione aqui algumas imagens que mostram o projeto em ação.</p>
   
          </div>
        </Col>

        <Col md={4}>
          <div className="bg-light p-3 rounded">
            <h5>My Role</h5>
            <ul>
              <li>FullStack Developer</li>
              <li>Website Design</li>
              <li>UX Design</li>
              <li>Photography</li>
              
            </ul>
            <div className={styles.client}>

            </div>
            <div className={styles.year}>
              <h5>Year</h5>
              <p>2024</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Marketplace;
